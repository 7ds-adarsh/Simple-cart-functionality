// sample products
const products = [
    { id: 1, name: 'Product 1', description: 'This is product 1', price: 10, src: 'https://imgs.search.brave.com/bM2Tf_nkBr-lh6GY-y-biCUwIhO6EAwhYG9XLNvY3Is/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Ym9yZWRwYW5kYS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8xMS82/MThiOTYzY2M4OWNi/X0U3VFZ4UGhfXzg4/MC5qcGc' },
    { id: 2, name: 'Product 2', description: 'This is product 2', price: 20, src: 'https://imgs.search.brave.com/bM2Tf_nkBr-lh6GY-y-biCUwIhO6EAwhYG9XLNvY3Is/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Ym9yZWRwYW5kYS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8xMS82/MThiOTYzY2M4OWNi/X0U3VFZ4UGhfXzg4/MC5qcGc' },
    { id: 3, name: 'Product 3', description: 'This is product 3', price: 30, src: 'https://imgs.search.brave.com/bM2Tf_nkBr-lh6GY-y-biCUwIhO6EAwhYG9XLNvY3Is/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Ym9yZWRwYW5kYS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8xMS82/MThiOTYzY2M4OWNi/X0U3VFZ4UGhfXzg4/MC5qcGc' },
    { id: 4, name: 'Product 4', description: 'This is product 4', price: 40, src: 'https://imgs.search.brave.com/bM2Tf_nkBr-lh6GY-y-biCUwIhO6EAwhYG9XLNvY3Is/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Ym9yZWRwYW5kYS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8xMS82/MThiOTYzY2M4OWNi/X0U3VFZ4UGhfXzg4/MC5qcGc' },
    { id: 5, name: 'Product 5', description: 'This is product 5', price: 50, src: 'https://imgs.search.brave.com/bM2Tf_nkBr-lh6GY-y-biCUwIhO6EAwhYG9XLNvY3Is/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Ym9yZWRwYW5kYS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8xMS82/MThiOTYzY2M4OWNi/X0U3VFZ4UGhfXzg4/MC5qcGc' },
    { id: 5, name: 'Product 5', description: 'This is product 5', price: 50, src: 'https://imgs.search.brave.com/bM2Tf_nkBr-lh6GY-y-biCUwIhO6EAwhYG9XLNvY3Is/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Ym9yZWRwYW5kYS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8xMS82/MThiOTYzY2M4OWNi/X0U3VFZ4UGhfXzg4/MC5qcGc' },
    { id: 5, name: 'Product 5', description: 'This is product 5', price: 50, src: 'https://imgs.search.brave.com/bM2Tf_nkBr-lh6GY-y-biCUwIhO6EAwhYG9XLNvY3Is/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Ym9yZWRwYW5kYS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8xMS82/MThiOTYzY2M4OWNi/X0U3VFZ4UGhfXzg4/MC5qcGc' },
    { id: 5, name: 'Product 5', description: 'This is product 5', price: 50, src: 'https://imgs.search.brave.com/bM2Tf_nkBr-lh6GY-y-biCUwIhO6EAwhYG9XLNvY3Is/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Ym9yZWRwYW5kYS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8xMS82/MThiOTYzY2M4OWNi/X0U3VFZ4UGhfXzg4/MC5qcGc' },
];

// products container
const container = document.getElementById('products');

// fetching cart data if any
let cart = JSON.parse(localStorage.getItem("cart")) || [];

products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <img src="${product.src}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <button class="cart-btn">Add to Cart</button>
    `;

    // add to cart button eventlistener
    const cartBtn = card.querySelector('.cart-btn');
    cartBtn.addEventListener('click', () => {
        addToCart(product);
    });

    container.appendChild(card);
});

// navigations
function gotoCart() {
    window.location.href = 'cart.html';
}

function gotoHome() {
    window.location.href = 'index.html';
}

// add to cart function
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // if product is already in cart
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}
