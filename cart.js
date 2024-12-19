let cart = [];

function addToCart(productName) {
    cart.push(productName);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContent = document.getElementById('cart-content');
    const cartItems = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartContent.innerText = 'Корзина пуста';
        cartItems.innerText = 'Предметы, которые находятся в корзине: Корзина пуста';
    } else {
        cartContent.innerText = cart.join(', ');
        cartItems.innerText = 'Предметы, которые находятся в корзине: ' + cart.join(', ');
    }
}
function clearCart() {
    cart = []; 
    updateCartDisplay(); 
}