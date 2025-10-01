// Product data
const products = [
    {
        id: 1,
        name: "Cera Premium Monaco Pro",
        category: "ceras",
        price: 45.99,
        originalPrice: 59.99,
        image: "https://picsum.photos/seed/cera1/400/300.jpg",
        images: [
            "https://picsum.photos/seed/cera1/400/300.jpg",
            "https://picsum.photos/seed/cera1-2/400/300.jpg",
            "https://picsum.photos/seed/cera1-3/400/300.jpg"
        ],
        badge: "Más Vendido",
        rating: 4.8,
        reviews: 124,
        description: "Cera de alta durabilidad con efecto hidrofóbico superior. Fórmula avanzada con polímeros de última generación que protegen la pintura contra rayos UV, contaminación ambiental y elementos corrosivos.",
        features: [
            "Durabilidad hasta 6 meses",
            "Efecto hidrofóbico extremo",
            "Protección UV avanzada",
            "Acabado de alto brillo",
            "Fácil aplicación y retirada"
        ],
        stock: 15,
        featured: true
    },
    {
        id: 2,
        name: "Limpiador de Interiores Multiusos",
        category: "limpiadores",
        price: 22.50,
        originalPrice: 29.99,
        image: "https://picsum.photos/seed/limpiador1/400/300.jpg",
        images: [
            "https://picsum.photos/seed/limpiador1/400/300.jpg",
            "https://picsum.photos/seed/limpiador1-2/400/300.jpg",
            "https://picsum.photos/seed/limpiador1-3/400/300.jpg"
        ],
        badge: "Nuevo",
        rating: 4.5,
        reviews: 89,
        description: "Limpiador versátil para todas las superficies interiores del vehículo. Fórmula segura para plásticos, vinilo, tela y cuero. Elimina eficazmente la suciedad sin dejar residuos.",
        features: [
            "Seguro para múltiples superficies",
            "Fragancia fresca y duradera",
            "No deja residuos grasos",
            "Fórmula antibacteriana",
            "Envase ecológico reciclable"
        ],
        stock: 25,
        featured: false
    },
    {
        id: 3,
        name: "Sellador Cerámico 9H",
        category: "ceras",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://picsum.photos/seed/ceramico1/400/300.jpg",
        images: [
            "https://picsum.photos/seed/ceramico1/400/300.jpg",
            "https://picsum.photos/seed/ceramico1-2/400/300.jpg",
            "https://picsum.photos/seed/ceramico1-3/400/300.jpg"
        ],
        badge: "Premium",
        rating: 4.9,
        reviews: 203,
        description: "Protección cerámica de grado profesional con dureza 9H. Crea una capa protectora duradera que repele el agua, la suciedad y los contaminantes, manteniendo tu vehículo impecable por más tiempo.",
        features: [
            "Dureza 9H certificada",
            "Protección hasta 2 años",
            "Efecto autolimpiante",
            "Resistencia a químicos y arañazos",
            "Brillo intenso y profundo"
        ],
        stock: 8,
        featured: true
    },
    {
        id: 4,
        name: "Microfibra Premium 500g/m²",
        category: "accesorios",
        price: 15.99,
        originalPrice: 19.99,
        image: "https://picsum.photos/seed/microfibra1/400/300.jpg",
        images: [
            "https://picsum.photos/seed/microfibra1/400/300.jpg",
            "https://picsum.photos/seed/microfibra1-2/400/300.jpg",
            "https://picsum.photos/seed/microfibra1-3/400/300.jpg"
        ],
        badge: null,
        rating: 4.6,
        reviews: 67,
        description: "Toalla de microfibra de ultra alta densidad para aplicación y retirada de productos de detailing. Suavidad excepcional que no araña las superficies más delicadas.",
        features: [
            "Densidad de 500g/m²",
            "Borde de microfibra sin costuras",
            "Absorción superior",
            "Lavable y reutilizable",
            "Tamaño 40x40cm"
        ],
        stock: 50,
        featured: false
    },
    {
        id: 5,
        name: "Kit Completo de Detailing Básico",
        category: "kits",
        price: 129.99,
        originalPrice: 169.99,
        image: "https://picsum.photos/seed/kit1/400/300.jpg",
        images: [
            "https://picsum.photos/seed/kit1/400/300.jpg",
            "https://picsum.photos/seed/kit1-2/400/300.jpg",
            "https://picsum.photos/seed/kit1-3/400/300.jpg"
        ],
        badge: "Oferta -20%",
        rating: 4.7,
        reviews: 156,
        description: "Todo lo necesario para comenzar en el mundo del detailing profesional. Incluye los productos esenciales para mantener tu vehículo en perfectas condiciones por dentro y por fuera.",
        features: [
            "Shampoo de pH neutro (500ml)",
            "Cera líquida (250ml)",
            "Limpiador de interiores (500ml)",
            "2 toallas de microfibra premium",
            "1 aplicador de cera",
            "Guía de uso detallada"
        ],
        stock: 12,
        featured: true
    },
    {
        id: 6,
        name: "Hidratante de Cuero con Protector UV",
        category: "limpiadores",
        price: 34.99,
        originalPrice: 44.99,
        image: "https://picsum.photos/seed/cuero1/400/300.jpg",
        images: [
            "https://picsum.photos/seed/cuero1/400/300.jpg",
            "https://picsum.photos/seed/cuero1-2/400/300.jpg",
            "https://picsum.photos/seed/cuero1-3/400/300.jpg"
        ],
        badge: null,
        rating: 4.4,
        reviews: 93,
        description: "Tratamiento exclusivo para cueros que hidrata, nutre y protege. Fórmula enriquecida con aceites naturales y protectores UV que previenen el agrietamiento y decoloración.",
        features: [
            "Protección UV avanzada",
            "Prevención de grietas y decoloración",
            "Aroma a cuero genuino",
            "No deja residuos grasos",
            "Adecuado para cueros naturales y sintéticos"
        ],
        stock: 18,
        featured: false
    },
    {
        id: 7,
        name: "Limpiador de Llantas y Neumáticos",
        category: "limpiadores",
        price: 18.99,
        originalPrice: 24.99,
        image: "https://picsum.photos/seed/llantas1/400/300.jpg",
        images: [
            "https://picsum.photos/seed/llantas1/400/300.jpg",
            "https://picsum.photos/seed/llantas1-2/400/300.jpg",
            "https://picsum.photos/seed/llantas1-3/400/300.jpg"
        ],
        badge: null,
        rating: 4.3,
        reviews: 78,
        description: "Limpiador de alta eficacia para eliminar el polvo de freno y la suciedad incrustada en las llantas. Fórmula ácida balanceada segura para la mayoría de acabados de llantas.",
        features: [
            "Eliminación efectiva de polvo de freno",
            "Seguro para llantas pintadas y cromadas",
            "No requiere cepillado intensivo",
            "Efecto disolvente visible",
            "Fácil enjuague"
        ],
        stock: 30,
        featured: false
    },
    {
        id: 8,
        name: "Pulidora Orbital Dual Action",
        category: "accesorios",
        price: 189.99,
        originalPrice: 249.99,
        image: "https://picsum.photos/seed/pulidora1/400/300.jpg",
        images: [
            "https://picsum.photos/seed/pulidora1/400/300.jpg",
            "https://picsum.photos/seed/pulidora1-2/400/300.jpg",
            "https://picsum.photos/seed/pulidora1-3/400/300.jpg"
        ],
        badge: "Profesional",
        rating: 4.8,
        reviews: 112,
        description: "Pulidora orbital de doble acción para corrección de pintura y aplicación de ceras. Movimiento aleatorio que previene hologramas y marcas de pulido.",
        features: [
            "Motor de 900W con velocidad variable",
            "Movimiento orbital de 8mm",
            "Mango ergonómico antivibración",
            "Incluye 2 discos de espuma",
            "Ideal para principiantes y profesionales"
        ],
        stock: 5,
        featured: true
    },
    {
        id: 9,
        name: "Kit de Cristales y Plásticos",
        category: "kits",
        price: 45.99,
        originalPrice: 59.99,
        image: "https://picsum.photos/seed/cristales1/400/300.jpg",
        images: [
            "https://picsum.photos/seed/cristales1/400/300.jpg",
            "https://picsum.photos/seed/cristales1-2/400/300.jpg",
            "https://picsum.photos/seed/cristales1-3/400/300.jpg"
        ],
        badge: null,
        rating: 4.5,
        reviews: 64,
        description: "Solución completa para la limpieza y protección de cristales y plásticos exteriores. Elimina residuos de películas y protege contra la lluvia.",
        features: [
            "Limpiador de cristales anti-rayas (500ml)",
            "Repelente de lluvia para cristales (250ml)",
            "Restaurador de plásticos exteriores (250ml)",
            "2 toallas de microfibra para cristales",
            "1 aplicador de repelente"
        ],
        stock: 20,
        featured: false
    },
    {
        id: 10,
        name: "Cera Sintética de Rápida Aplicación",
        category: "ceras",
        price: 32.99,
        originalPrice: 42.99,
        image: "https://picsum.photos/seed/cera2/400/300.jpg",
        images: [
            "https://picsum.photos/seed/cera2/400/300.jpg",
            "https://picsum.photos/seed/cera2-2/400/300.jpg",
            "https://picsum.photos/seed/cera2-3/400/300.jpg"
        ],
        badge: null,
        rating: 4.6,
        reviews: 98,
        description: "Cera sintética de última generación con polímeros avanzados que proporcionan brillo duradero y protección hidrofóbica. Fórmula de fácil aplicación y retirada sin esfuerzo.",
        features: [
            "Aplicación y retirada sin esfuerzo",
            "No deja residuos blancos",
            "Protección hasta 4 meses",
            "Compatible con todas las pinturas",
            "Ideal para mantenimiento regular"
        ],
        stock: 22,
        featured: false
    },
    {
        id: 11,
        name: "Limpiador de Motor Degreaser Pro",
        category: "limpiadores",
        price: 24.99,
        originalPrice: 32.99,
        image: "https://picsum.photos/seed/motor1/400/300.jpg",
        images: [
            "https://picsum.photos/seed/motor1/400/300.jpg",
            "https://picsum.photos/seed/motor1-2/400/300.jpg",
            "https://picsum.photos/seed/motor1-3/400/300.jpg"
        ],
        badge: null,
        rating: 4.4,
        reviews: 71,
        description: "Limpiador degresante profesional para motores. Fórmula potente que disuelve la grasa, el aceite y la suciedad acumulada sin dañar componentes eléctricos o plásticos.",
        features: [
            "Disuelve grasa y aceite acumulado",
            "Seguro para componentes eléctricos",
            "Biodegradable y ecológico",
            "No requiere cepillado intensivo",
            "Deja un acabado limpio y seco"
        ],
        stock: 16,
        featured: false
    },
    {
        id: 12,
        name: "Set de Cepillos de Detailing",
        category: "accesorios",
        price: 39.99,
        originalPrice: 49.99,
        image: "https://picsum.photos/seed/cepillos1/400/300.jpg",
        images: [
            "https://picsum.photos/seed/cepillos1/400/300.jpg",
            "https://picsum.photos/seed/cepillos1-2/400/300.jpg",
            "https://picsum.photos/seed/cepillos1-3/400/300.jpg"
        ],
        badge: null,
        rating: 4.5,
        reviews: 83,
        description: "Set completo de cepillos especializados para cada área del vehículo. Cerdas suaves que no rayan pero limpian eficazmente las áreas más difíciles.",
        features: [
            "5 cepillos de diferentes tamaños",
            "Cerdas de nylon suave y resistente",
            "Mangos ergonómicos antideslizantes",
            "Base de almacenamiento incluida",
            "Lavables y reutilizables"
        ],
        stock: 14,
        featured: false
    }
];

// Categories data
const categories = [
    {
        id: 'ceras',
        name: 'Ceras y Selladores',
        icon: 'fa-spray-can',
        description: 'Protección duradera y brillo excepcional'
    },
    {
        id: 'limpiadores',
        name: 'Limpiadores',
        icon: 'fa-soap',
        description: 'Limpieza profunda para cada superficie'
    },
    {
        id: 'accesorios',
        name: 'Accesorios',
        icon: 'fa-tools',
        description: 'Herramientas profesionales para resultados perfectos'
    },
    {
        id: 'kits',
        name: 'Kits Completos',
        icon: 'fa-box',
        description: 'Soluciones todo en uno para cada necesidad'
    }
];

// Testimonials data
const testimonials = [
    {
        id: 1,
        name: 'Carlos Rodríguez',
        avatar: 'https://picsum.photos/seed/avatar1/100/100.jpg',
        text: 'Los productos de Monaco Detailing han transformado por completo el aspecto de mi coche. La calidad es excepcional y los resultados duraderos.',
        rating: 5
    },
    {
        id: 2,
        name: 'María González',
        avatar: 'https://picsum.photos/seed/avatar2/100/100.jpg',
        text: 'Como profesional del detailing, solo confío en productos de calidad. Monaco Detailing nunca me ha decepcionado. ¡Recomendado 100%!',
        rating: 5
    },
    {
        id: 3,
        name: 'Juan Martínez',
        avatar: 'https://picsum.photos/seed/avatar3/100/100.jpg',
        text: 'El kit básico es perfecto para quienes empiezan. Incluye todo lo necesario y los resultados son profesionales. ¡Excelente inversión!',
        rating: 4
    }
];

// Global variables
let cart = [];
let wishlist = [];
let currentProduct = null;
let filteredProducts = [...products];
let currentPage = 1;
const productsPerPage = 8;

// DOM elements
const productGrid = document.getElementById('product-grid');
const categoryGrid = document.getElementById('category-grid');
const featuredCarousel = document.getElementById('featured-carousel');
const testimonialCarousel = document.getElementById('testimonial-carousel');
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const wishlistIcon = document.getElementById('wishlist-icon');
const wishlistSidebar = document.getElementById('wishlist-sidebar');
const closeWishlist = document.getElementById('close-wishlist');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cart-items');
const wishlistItems = document.getElementById('wishlist-items');
const cartCount = document.getElementById('cart-count');
const wishlistCount = document.getElementById('wishlist-count');
const cartTotal = document.getElementById('cart-total');
const cartSubtotal = document.getElementById('cart-subtotal');
const categoryFilter = document.getElementById('category-filter');
const sortFilter = document.getElementById('sort-filter');
const productModal = document.getElementById('product-modal');
const closeModal = document.getElementById('close-modal');
const modalQuantity = document.getElementById('modal-quantity');
const decreaseQuantity = document.getElementById('decrease-quantity');
const increaseQuantity = document.getElementById('increase-quantity');
const addToCartModal = document.getElementById('add-to-cart-modal');
const addToWishlistModal = document.getElementById('add-to-wishlist-modal');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');
const checkoutBtn = document.getElementById('checkout-btn');
const addAllToCart = document.getElementById('add-all-to-cart');
const newsletterForm = document.getElementById('newsletter-form');
const notificationToast = document.getElementById('notification-toast');
const toastMessage = document.getElementById('toast-message');
const loadingSpinner = document.getElementById('loading-spinner');

// Initialize the page
function init() {
    loadCartFromStorage();
    loadWishlistFromStorage();
    renderCategories();
    renderFeaturedProducts();
    renderTestimonials();
    renderProducts();
    updateCart();
    updateWishlist();
    setupEventListeners();
    setupSmoothScroll();
    setupLazyLoading();
}

// Render categories
function renderCategories() {
    categoryGrid.innerHTML = '';
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <div class="category-icon">
                <i class="fas ${category.icon}"></i>
            </div>
            <h3 class="category-name">${category.name}</h3>
            <p>${category.description}</p>
        `;
        categoryCard.addEventListener('click', () => filterByCategory(category.id));
        categoryGrid.appendChild(categoryCard);
    });
}

// Render featured products
function renderFeaturedProducts() {
    const featuredProducts = products.filter(p => p.featured);
    featuredCarousel.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredCarousel.appendChild(productCard);
    });
}

// Render testimonials
function renderTestimonials() {
    testimonialCarousel.innerHTML = '';
    
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.innerHTML = `
            <div class="testimonial-avatar">
                <img src="${testimonial.avatar}" alt="${testimonial.name}">
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <h4 class="testimonial-author">${testimonial.name}</h4>
            <div class="testimonial-rating">
                ${generateStars(testimonial.rating)}
            </div>
        `;
        testimonialCarousel.appendChild(testimonialCard);
    });
}

// Render products
function renderProducts() {
    productGrid.innerHTML = '';
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
    
    renderPagination();
}

// Create product card
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-actions">
                <button class="action-btn quick-view" data-id="${product.id}" title="Vista rápida">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="action-btn add-to-wishlist" data-id="${product.id}" title="Añadir a la lista de deseos">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <p class="product-category">${getCategoryName(product.category)}</p>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                ${generateStars(product.rating)}
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <div class="product-price">
                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                <span class="current-price">$${product.price.toFixed(2)}</span>
            </div>
            <div class="product-actions-bottom">
                <button class="btn btn-small add-to-cart" data-id="${product.id}">Añadir</button>
                <button class="btn btn-small btn-outline view-product" data-id="${product.id}">Ver</button>
            </div>
        </div>
    `;
    
    // Add event listeners
    productCard.querySelector('.add-to-cart').addEventListener('click', addToCart);
    productCard.querySelector('.view-product').addEventListener('click', viewProduct);
    productCard.querySelector('.quick-view').addEventListener('click', quickViewProduct);
    productCard.querySelector('.add-to-wishlist').addEventListener('click', toggleWishlist);
    
    return productCard;
}

// Generate star rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt star"></i>';
        } else {
            stars += '<i class="far fa-star star"></i>';
        }
    }
    return stars;
}

// Get category name
function getCategoryName(category) {
    const categoryData = categories.find(c => c.id === category);
    return categoryData ? categoryData.name : category;
}

// Add to cart
function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    if (product.stock <= 0) {
        showNotification('Producto sin stock', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
            showNotification('Cantidad actualizada en el carrito');
        } else {
            showNotification('No hay más stock disponible', 'error');
        }
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
        showNotification('Producto añadido al carrito');
    }
    
    updateCart();
    saveCartToStorage();
}

// Update cart
function updateCart() {
    cartItems.innerHTML = '';
    let subtotal = 0;
    let count = 0;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
            
            subtotal += item.price * item.quantity;
            count += item.quantity;
        });
        
        // Add event listeners to new elements
        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', decreaseCartItemQuantity);
        });
        
        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', increaseCartItemQuantity);
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeFromCart);
        });
    }
    
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTotal.textContent = `$${subtotal.toFixed(2)}`;
    cartCount.textContent = count;
}

// Decrease cart item quantity
function decreaseCartItemQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    
    if (item.quantity > 1) {
        item.quantity--;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    
    updateCart();
    saveCartToStorage();
}

// Increase cart item quantity
function increaseCartItemQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);
    
    if (item.quantity < product.stock) {
        item.quantity++;
    } else {
        showNotification('No hay más stock disponible', 'error');
    }
    
    updateCart();
    saveCartToStorage();
}

// Remove from cart
function removeFromCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCartToStorage();
    showNotification('Producto eliminado del carrito');
}

// Toggle wishlist
function toggleWishlist(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    const existingItem = wishlist.find(item => item.id === productId);
    
    if (existingItem) {
        wishlist = wishlist.filter(item => item.id !== productId);
        showNotification('Producto eliminado de la lista de deseos');
    } else {
        wishlist.push(product);
        showNotification('Producto añadido a la lista de deseos');
    }
    
    updateWishlist();
    saveWishlistToStorage();
}

// Update wishlist
function updateWishlist() {
    wishlistItems.innerHTML = '';
    let count = wishlist.length;
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p class="empty-wishlist">Tu lista de deseos está vacía</p>';
    } else {
        wishlist.forEach(item => {
            const wishlistItem = document.createElement('div');
            wishlistItem.className = 'wishlist-item';
            wishlistItem.innerHTML = `
                <div class="wishlist-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="wishlist-item-info">
                    <h4 class="wishlist-item-name">${item.name}</h4>
                    <p class="wishlist-item-price">$${item.price.toFixed(2)}</p>
                    <button class="btn btn-small add-to-cart-from-wishlist" data-id="${item.id}">Añadir al carrito</button>
                </div>
                <button class="remove-wishlist-item" data-id="${item.id}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            wishlistItems.appendChild(wishlistItem);
        });
        
        // Add event listeners to new elements
        document.querySelectorAll('.add-to-cart-from-wishlist').forEach(button => {
            button.addEventListener('click', addToCartFromWishlist);
        });
        
        document.querySelectorAll('.remove-wishlist-item').forEach(button => {
            button.addEventListener('click', removeFromWishlist);
        });
    }
    
    wishlistCount.textContent = count;
}

// Add to cart from wishlist
function addToCartFromWishlist(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    if (product.stock <= 0) {
        showNotification('Producto sin stock', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
            showNotification('Cantidad actualizada en el carrito');
        } else {
            showNotification('No hay más stock disponible', 'error');
        }
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
        showNotification('Producto añadido al carrito');
    }
    
    updateCart();
    saveCartToStorage();
}

// Remove from wishlist
function removeFromWishlist(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    wishlist = wishlist.filter(item => item.id !== productId);
    updateWishlist();
    saveWishlistToStorage();
    showNotification('Producto eliminado de la lista de deseos');
}

// View product details
function viewProduct(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    currentProduct = products.find(p => p.id === productId);
    
    if (currentProduct) {
        openProductModal(currentProduct);
    }
}

// Quick view product
function quickViewProduct(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    currentProduct = products.find(p => p.id === productId);
    
    if (currentProduct) {
        openQuickViewModal(currentProduct);
    }
}

// Open product modal
function openProductModal(product) {
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-category').textContent = getCategoryName(product.category);
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-rating').innerHTML = `
        ${generateStars(product.rating)}
        <span class="rating-count">(${product.reviews} reseñas)</span>
    `;
    document.getElementById('modal-price').innerHTML = `
        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
        <span class="current-price">$${product.price.toFixed(2)}</span>
    `;
    document.getElementById('modal-description').textContent = product.description;
    
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Load thumbnails
    const thumbnailsContainer = document.getElementById('modal-thumbnails');
    thumbnailsContainer.innerHTML = '';
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="${product.name}">`;
        thumbnail.addEventListener('click', () => changeMainImage(image, thumbnail));
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    modalQuantity.value = 1;
    productModal.classList.add('active');
    overlay.classList.add('active');
}

// Change main image in modal
function changeMainImage(imageSrc, thumbnail) {
    document.getElementById('modal-image').src = imageSrc;
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Open quick view modal
function openQuickViewModal(product) {
    const quickViewModal = document.getElementById('quick-view-modal');
    const quickViewBody = quickViewModal.querySelector('.quick-view-body');
    
    quickViewBody.innerHTML = `
        <div class="quick-view-product">
            <div class="quick-view-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="quick-view-info">
                <h3>${product.name}</h3>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                </div>
                <p>${product.description}</p>
                <div class="quick-view-actions">
                    <button class="btn add-to-cart-quick" data-id="${product.id}">Añadir al Carrito</button>
                    <button class="btn btn-outline view-product-quick" data-id="${product.id}">Ver Detalles</button>
                </div>
            </div>
        </div>
    `;
    
    quickViewModal.classList.add('active');
    overlay.classList.add('active');
    
    // Add event listeners
    quickViewBody.querySelector('.add-to-cart-quick').addEventListener('click', (e) => {
        addToCart(e);
        quickViewModal.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    quickViewBody.querySelector('.view-product-quick').addEventListener('click', (e) => {
        viewProduct(e);
        quickViewModal.classList.remove('active');
    });
}

// Filter by category
function filterByCategory(categoryId) {
    categoryFilter.value = categoryId;
    applyFilters();
    
    // Scroll to products section
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Apply filters
function applyFilters() {
    const category = categoryFilter.value;
    const sort = sortFilter.value;
    
    // Filter by category
    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(p => p.category === category);
    }
    
    // Apply sorting
    applySorting(sort);
    
    // Reset pagination
    currentPage = 1;
    
    // Render products
    renderProducts();
}

// Apply sorting
function applySorting(sortValue) {
    switch (sortValue) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'featured':
        default:
            filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
            break;
    }
}

// Render pagination
function renderPagination() {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    pagination.innerHTML = '';
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
        }
    });
    pagination.appendChild(prevBtn);
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderProducts();
        });
        pagination.appendChild(pageBtn);
    }
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts();
        }
    });
    pagination.appendChild(nextBtn);
}

// Search products
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            getCategoryName(product.category).toLowerCase().includes(searchTerm)
        );
    }
    
    currentPage = 1;
    renderProducts();
}

// Setup event listeners
function setupEventListeners() {
    // Cart toggle
    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
    });
    
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Wishlist toggle
    wishlistIcon.addEventListener('click', () => {
        wishlistSidebar.classList.add('active');
        overlay.classList.add('active');
    });
    
    closeWishlist.addEventListener('click', () => {
        wishlistSidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Product modal
    closeModal.addEventListener('click', () => {
        productModal.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Quick view modal
    document.getElementById('close-quick-view').addEventListener('click', () => {
        document.getElementById('quick-view-modal').classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Quantity controls in modal
    decreaseQuantity.addEventListener('click', () => {
        if (modalQuantity.value > 1) {
            modalQuantity.value--;
        }
    });
    
    increaseQuantity.addEventListener('click', () => {
        modalQuantity.value++;
    });
    
    // Add to cart from modal
    addToCartModal.addEventListener('click', () => {
        if (currentProduct) {
            const quantity = parseInt(modalQuantity.value);
            const existingItem = cart.find(item => item.id === currentProduct.id);
            
            if (existingItem) {
                if (existingItem.quantity + quantity <= currentProduct.stock) {
                    existingItem.quantity += quantity;
                    showNotification('Cantidad actualizada en el carrito');
                } else {
                    showNotification('No hay suficiente stock disponible', 'error');
                }
            } else {
                if (quantity <= currentProduct.stock) {
                    cart.push({
                        ...currentProduct,
                        quantity: quantity
                    });
                    showNotification('Producto añadido al carrito');
                } else {
                    showNotification('No hay suficiente stock disponible', 'error');
                }
            }
            
            updateCart();
            saveCartToStorage();
            productModal.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
    
    // Add to wishlist from modal
    addToWishlistModal.addEventListener('click', () => {
        if (currentProduct) {
            const existingItem = wishlist.find(item => item.id === currentProduct.id);
            
            if (existingItem) {
                wishlist = wishlist.filter(item => item.id !== currentProduct.id);
                showNotification('Producto eliminado de la lista de deseos');
            } else {
                wishlist.push(currentProduct);
                showNotification('Producto añadido a la lista de deseos');
            }
            
            updateWishlist();
            saveWishlistToStorage();
        }
    });
    
    // Overlay click
    overlay.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        wishlistSidebar.classList.remove('active');
        productModal.classList.remove('active');
        document.getElementById('quick-view-modal').classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Category filter
    categoryFilter.addEventListener('change', applyFilters);
    
    // Sort filter
    sortFilter.addEventListener('change', applyFilters);
    
    // Search
    searchInput.addEventListener('input', searchProducts);
    searchBtn.addEventListener('click', searchProducts);
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Tu carrito está vacío', 'error');
        } else {
            showNotification('Redirigiendo al checkout...');
            // In a real application, this would redirect to a checkout page
        }
    });
    
    // Add all to cart from wishlist
    addAllToCart.addEventListener('click', () => {
        if (wishlist.length === 0) {
            showNotification('Tu lista de deseos está vacía', 'error');
        } else {
            wishlist.forEach(product => {
                const existingItem = cart.find(item => item.id === product.id);
                
                if (existingItem) {
                    if (existingItem.quantity < product.stock) {
                        existingItem.quantity++;
                    }
                } else {
                    cart.push({
                        ...product,
                        quantity: 1
                    });
                }
            });
            
            updateCart();
            saveCartToStorage();
            showNotification('Todos los productos añadidos al carrito');
            wishlistSidebar.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
    
    // Newsletter form
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('¡Gracias por suscribirte a nuestro newsletter!');
        e.target.reset();
    });
    
    // Tab functionality in modal
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            
            // Update active button
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update active tab content
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            document.getElementById(`${tabName}-tab`).classList.add('active');
        });
    });
    
    // View toggle
    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', () => {
            const view = button.getAttribute('data-view');
            
            // Update active button
            document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update grid view
            if (view === 'list') {
                productGrid.classList.add('list-view');
            } else {
                productGrid.classList.remove('list-view');
            }
        });
    });
    
    // Dropdown items
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const category = item.getAttribute('data-category');
            if (category) {
                filterByCategory(category);
            }
        });
    });
    
    // Footer links
    document.querySelectorAll('.footer-links a[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            filterByCategory(category);
        });
    });
}

// Setup smooth scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup lazy loading
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Show notification
function showNotification(message, type = 'success') {
    toastMessage.textContent = message;
    notificationToast.className = 'notification-toast show';
    
    if (type === 'error') {
        notificationToast.style.backgroundColor = '#e74c3c';
    } else {
        notificationToast.style.backgroundColor = 'var(--primary-green)';
    }
    
    setTimeout(() => {
        notificationToast.classList.remove('show');
    }, 3000);
}

// Local storage functions
function saveCartToStorage() {
    localStorage.setItem('monacoCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('monacoCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function saveWishlistToStorage() {
    localStorage.setItem('monacoWishlist', JSON.stringify(wishlist));
}

function loadWishlistFromStorage() {
    const savedWishlist = localStorage.getItem('monacoWishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
    }
}

// Loading spinner functions
function showLoadingSpinner() {
    loadingSpinner.classList.add('active');
}

function hideLoadingSpinner() {
    loadingSpinner.classList.remove('active');
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Refresh data when page becomes visible again
        loadCartFromStorage();
        loadWishlistFromStorage();
        updateCart();
        updateWishlist();
    }
});

// Handle online/offline status
window.addEventListener('online', () => {
    showNotification('Conexión restaurada');
});

window.addEventListener('offline', () => {
    showNotification('Sin conexión a internet', 'error');
});

// Handle beforeunload
window.addEventListener('beforeunload', () => {
    saveCartToStorage();
    saveWishlistToStorage();
});
