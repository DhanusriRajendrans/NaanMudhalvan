const mobile=JSON.parse( localStorage.getItem('cartdata'));
console.log(mobile);


const con =document.getElementById('container');

for(let i=0;i<mobile.length;i++)
{
    con.innerHTML+=`
    <div class="item">
        <img src=${mobile[i].image} >
        <div class="data">
            <h1>${mobile[i].brand}</h1>
            <p class="desc">${mobile[i].descreption}</p>
            <p class="price">$ ${mobile[i].price}</p>
            <button onclick="cart(${mobile[i].productId})">BuyNow </button>
        </div>
    </div>
    `
}
