// DOM Elements
const productsGrid = document.getElementById('products-grid');
const priceFilter = document.getElementById('price-filter');
const priceValue = document.getElementById('price-value');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const themeToggle = document.getElementById('theme-toggle');

// State
let products = [];
let cart = [];
let maxPrice = 145000; // KES
const exchangeRate = 145; // 1 USD = 145 KES

// Load cart from localStorage on page load
const loadCart = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
};

// Save cart to localStorage
const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

// Theme Management
const getCurrentTheme = () => localStorage.getItem('theme') || 'light';
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
};

// Initialize theme
setTheme(getCurrentTheme());

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const currentTheme = getCurrentTheme();
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
});

// Event Listeners
priceFilter.addEventListener('input', (e) => {
    maxPrice = e.target.value;
    priceValue.textContent = maxPrice;
    renderProducts();
});

cartIcon.addEventListener('click', () => {
    cartModal.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

// Fetch Products
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/category/electronics');
        products = await response.json();
        renderProducts();
    } catch (error) {
        console.error('Error fetching products:', error);
        productsGrid.innerHTML = '<p>Error loading products. Please try again later.</p>';
    }
}

// Render Products
function renderProducts() {
    const filteredProducts = products.filter(product => (product.price * exchangeRate) <= maxPrice);
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>KES ${Math.round(product.price * exchangeRate)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    saveCart(); // Save cart to localStorage
}


function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCart(); // Save cart to localStorage
}

function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items display
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}">
            <div>
                <h4>${item.title}</h4>
                <p>KES ${Math.round(item.price * exchangeRate)} x ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * exchangeRate * item.quantity), 0);
    cartTotal.textContent = Math.round(total);
}

// Initialize
loadCart(); // Load the cart from localStorage
setTheme(getCurrentTheme()); // Ensure theme is loaded on page load
fetchProducts(); // Fetch products from API