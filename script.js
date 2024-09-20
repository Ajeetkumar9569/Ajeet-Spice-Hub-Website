let cart = [];
let totalAmount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const itemName = event.target.getAttribute('data-name');
        const itemPrice = parseFloat(event.target.getAttribute('data-price'));
        const itemImage = event.target.getAttribute('data-image');
        
        cart.push({ name: itemName, price: itemPrice, image: itemImage });
        totalAmount += itemPrice;
        updateCart();
    });
});

function updateCart() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50">
            <span>${item.name} - $${item.price}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
}

function removeFromCart(index) {
    totalAmount -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}
