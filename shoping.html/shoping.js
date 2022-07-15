// import { getCart } from "./helper";

const productListNode = document.getElementById("product-list");
const cartNode = document.getElementById("cart");

function Product(name, image) {
  this.id = `${name}_${image}_${Math.floor(Math.random() * 20000)}`;
  this.name = name;
  this.image = image;
  this.price = Math.floor(Math.random()*2000) + '₹'
}

const p1 = new Product("Shoe", "./img/product-2.jpg");
const p2 = new Product("T-Shirt", "./img/product-1.jpg");
const p3 = new Product("Shoe", "./img/product-3.jpg");
const p4 = new Product("Shoe", "./img/product-4.jpg");
const p5 = new Product("Shoe", "./img/product-5.jpg");
const p6 = new Product("Shoe", "./img/product-6.jpg");

const products = [p1, p2, p3, p4, p5, p6];
const allProducts = localStorage.getItem("products");
const productsList = JSON.parse(allProducts);

function getCart(){
  const cartInLocal = localStorage.getItem("cart");
  const cart = cartInLocal ? JSON.parse(cartInLocal) : [];
  return cart;
};


window.addEventListener("load", () => {
  // localStorage.setItem('products', JSON.stringify(products))

  // showing cart size
  const cart = getCart();
  cartNode.innerHTML = cart.length;

  // rendering all element

  let allProductsInHtml = "";
  productsList.forEach((product) => {
    allProductsInHtml += `
        <div class="box">
             <img src=${product.image} id="img1">
            <h4>${product.name}</h4>
            <p>${product.price}</p>
            <button onclick="decrement()">-</button>
            <input id=demoInput type=number>
            <button onclick="increment()">+</button>
            <button value=${product.id} onclick=onCartAdd(this.value) class="btn add-cart-btn">Add cart</button>
        </div>
        `;
  });
  productListNode.innerHTML = allProductsInHtml;
});

function onCartAdd(productId) {
  const cart = getCart();
  // finding product
  const product = productsList.find((product) => product.id === productId);
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));
  cartNode.innerHTML = cart.length;
}

// function increment() {
//   document.getElementById('demoInput').stepUp();
// }
// function decrement() {
//   document.getElementById('demoInput').stepDown();
// }