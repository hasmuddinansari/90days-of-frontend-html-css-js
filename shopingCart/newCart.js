const allProducts = document.getElementById("product-list");
const cartProducts = document.getElementById('cart-length')

function Product(image, name) {
  this.image = image;
  this.name = name;
  this.id = `${name}_${image}_${Math.floor(Math.random() * 20000)};`;
  this.price = Math.floor(Math.random() * 2000) + "₹";
}

const p1 = new Product("./product-1.jpg", "T-shirt");
const p2 = new Product("./product-1.jpg", "shoes");
const p3 = new Product("./product-1.jpg", "Trauser");

const products = [p1, p2, p3];

const allprod = localStorage.getItem("Productlist");
const getProd = JSON.parse(allprod)



function getCartProduct(){
  const cartInLocal = localStorage.getItem("cart");
  const cart = cartInLocal ? JSON.parse(cartInLocal) : [];
  return cart;
};


window.addEventListener("load", function (e) {

//   localStorage.setItem("Productlist", JSON.stringify(products));


const cart = getCartProduct();

cartProducts.innerHTML = cart.length

  let allProductInHtml ="";
  getProd.forEach((product) => {
    allProductInHtml += `
                         <div class="box">
                          <img src=${product.image}>
                          <h4>${product.name}</h4>
                          <p>${product.price}</p>
                          <button class="btn add-cart-btn" value=${product.id} onclick=onCartAdd(this.value)>Add cart</button>
                        </div>
                      `
  });

  allProducts.innerHTML = allProductInHtml
});


function onCartAdd(setInCart){

  const cart = getCartProduct()
  const product = getProd.find((product) => product.id === setInCart);
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));
  cartProducts.innerHTML = cart.length;
    
}




