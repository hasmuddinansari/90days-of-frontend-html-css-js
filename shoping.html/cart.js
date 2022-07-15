// const { getCart } = require("./helper");

function getCart (){
  const cartInLocal = localStorage.getItem("cart");
  const cart = cartInLocal ? JSON.parse(cartInLocal) : [];
  return cart;
};

function setCart(cart){
  localStorage.setItem('cart', JSON.stringify(cart))
}


function renderCartUi(cart){
  let allProductsInHtml = `
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
        </tr>`


  cart.forEach((product, index) => {
    allProductsInHtml += `
       <tr>
          <td>${index+1}</td>
          <td><img src=${product.image}></td>
          <td>${product.name}</td>
          <td>${product.price}</td>
         <td> <button class="remove-btn" value=${product.id} onclick={removeItem(this.value)}>Remove</button></td>
      </tr>
        `;
  });
  document.getElementById('cart-table').innerHTML = allProductsInHtml;
  
}



window.addEventListener("load", () => {
  // localStorage.setItem('products', JSON.stringify(products))

  // showing cart size
  const cart = getCart();
  renderCartUi(cart)

  // rendering all element

})



function removeItem(id){
  const cart = getCart()
  const newCartItems = cart.filter(cartItem=>cartItem.id !== id)
  renderCartUi(newCartItems)
  setCart(newCartItems)
  document.getElementById("cart").innerHTML = newCartItems.length
}