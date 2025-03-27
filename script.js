document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("container");
    let cartCount = 0;
    let cartItems = {};
  
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        let categories = {};
  
        data.forEach((product) => {
          if (!categories[product.category]) {
            categories[product.category] = [];
          }
          categories[product.category].push(product);
        });
  
        for (let category in categories) {
          let categoryDiv = document.createElement("div");
          categoryDiv.classList.add("category");
          categoryDiv.innerHTML = `<h2>${category}</h2>`;
  
          let productsDiv = document.createElement("div");
          productsDiv.classList.add("products");
  
          categories[category].forEach((product) => {
            let item = document.createElement("div");
            item.classList.add("product-box");
            item.innerHTML = `
              <h3>${product.title}</h3>
              <img src="${product.image}" alt="Product Image">
              <p>${product.price} USD</p>
              <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
              <div class="cart-controls" id="controls-${product.id}" style="display: none;">
                  <button class="decrease" data-id="${product.id}">-</button>
                  <span class="quantity" id="quantity-${product.id}">1</span>
                  <button class="increase" data-id="${product.id}">+</button>
              </div>
            `;
            productsDiv.appendChild(item);
          });
  
          categoryDiv.appendChild(productsDiv);
          container.appendChild(categoryDiv);
        }
  
        document.addEventListener("click", function (event) {
          let productId = event.target.getAttribute("data-id");
  
          if (event.target.classList.contains("add-to-cart")) {
            cartItems[productId] = 1;
            cartCount++;
            document.getElementById(`controls-${productId}`).style.display = "flex";
            event.target.style.display = "none";
            updateCart();
          }
  
          if (event.target.classList.contains("increase")) {
            cartItems[productId]++;
            cartCount++;
            document.getElementById(`quantity-${productId}`).textContent = cartItems[productId];
            updateCart();
          }
  
          if (event.target.classList.contains("decrease")) {
            if (cartItems[productId] > 1) {
              cartItems[productId]--;
              cartCount--;
              document.getElementById(`quantity-${productId}`).textContent = cartItems[productId];
            } else {
              delete cartItems[productId];
              cartCount--;
              document.getElementById(`controls-${productId}`).style.display = "none";
              document.querySelector(`[data-id='${productId}']`).style.display = "inline-block";
            }
            updateCart();
          }
        });
  
        function updateCart() {
          document.getElementById("cart-count").textContent = cartCount;
        }
      });
  });
  