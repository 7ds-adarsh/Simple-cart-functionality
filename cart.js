// fetching cart data if any
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Dom Elements
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Cart Rendering
function renderCart() {
    cartItems.innerHTML = ""; // clear previous items
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.textContent = "";
        cartCount.textContent = 0;
        return;
    }

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.src}" alt="${item.name}" width="80">
            <h3>${item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;
        cartItems.appendChild(div);

        total += item.price * item.quantity;
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = `Total: ₹${total}`;
}

// to remove items
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart)); // update storage
    renderCart();
}

// Event delegation for removing items
cartItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
        const index = e.target.getAttribute("data-index");
        removeFromCart(index);
    }
});

// Initial render
renderCart();
