let mobile=[
    {
    productId:1,
    brand:"Samsung",
    model:"Galaxy s25",
    image:"https://m.media-amazon.com/images/I/61D3EdXKG5L._AC_UY218_.jpg",
    descreption:"Samsung Galaxy S25 5G AI Smartphone (Silver Shadow, 12GB RAM, 256GB Storage), 50MP Camera with Galaxy AI",
    price:800
},
    {
    productId:2,
    brand:"Apple",
    model:"iphone 16",
    image:"https://m.media-amazon.com/images/I/61lLjrvDEkL._AC_UY218_.jpg",
    descreption:"Samsung Galaxy S25 5G AI Smartphone (Silver Shadow, 12GB RAM, 256GB Storage), 50MP Camera with Galaxy AI",
    price:800
},
    {
    productId:3,
    brand:"Xiaomi",
    model:"14 civi",
    image:"https://m.media-amazon.com/images/I/71x5XVC9UlL._AC_UL320_.jpg",
    descreption:"Samsung Galaxy S25 5G AI Smartphone (Silver Shadow, 12GB RAM, 256GB Storage), 50MP Camera with Galaxy AI",
    price:800
},
    {
    productId:4,
    brand:"Nothing",
    model:"3a",
    image:"https://m.media-amazon.com/images/I/410sjPn977L._SX300_SY300_QL70_FMwebp_.jpg",
    descreption:"Samsung Galaxy S25 5G AI Smartphone (Silver Shadow, 12GB RAM, 256GB Storage), 50MP Camera with Galaxy AI",
    price:800
},
]


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
            <button onclick="cart(${mobile[i].productId})">Add to cart </button>
        </div>
    </div>
    `
}

let arr=[];


function cart(proid)
{
    if(localStorage.length==0)
    {
        arr=[]
    }
    arr.push(mobile[proid-1])
    localStorage.setItem("cartdata",JSON.stringify(arr));
}
