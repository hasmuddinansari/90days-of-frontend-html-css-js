const getCart = () => {
    const cartInLocal = localStorage.getItem("cart");
    const cart = cartInLocal ? JSON.parse(cartInLocal) : [];
    return cart;
  };
  
module.exports = {
    getCart,
    
}