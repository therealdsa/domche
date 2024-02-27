// Sample product data
let products = [
    { id: 1, name: 'Product 1', price: 10, image: 'image/aa-1.jpg', quantity: 1, liked: false },
    { id: 2, name: 'Product 2', price: 20, image: 'image/ee-3.jpg', quantity: 1, liked: false },
    { id: 3, name: 'Product 3', price: 20, image: 'image/gg-1.jpg', quantity: 1, liked: false },
    { id : 4, name: 'Product 4', price: 20, image : ' image/hh-2.jpg', quantity: 1, liked : false},
    // Add more product objects as needed
  ];
  
  // Function to display cart items
  function displayCart() {
    const cartElement = document.querySelector('.cart');
    cartElement.innerHTML = '';
  
    let totalPrice = 0;
  
    products.forEach(product => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button onclick="removeItem(${product.id})">Remove</button>
        <button onclick="toggleLike(${product.id})">${product.liked ? '❤️' : '🤍'}</button>
        <button onclick="decreaseQuantity(${product.id})">-</button>
        <span>${product.quantity}</span>
        <button onclick="increaseQuantity(${product.id})">+</button>
      `;
      
      cartElement.appendChild(cartItem);
      totalPrice += product.price * product.quantity;
    });
  
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
  }
  
  // Function to remove item from cart
  function removeItem(id) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      products.splice(index, 1);
      displayCart();
    }
  }
  
  // Function to toggle like
  function toggleLike(id) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      products[index].liked = !products[index].liked;
      displayCart();
    }
  }
  
  // Function to decrease quantity
  function decreaseQuantity(id) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1 && products[index].quantity > 1) {
      products[index].quantity--;
      displayCart();
    }
  }
  
  // Function to increase quantity
  function increaseQuantity(id) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      products[index].quantity++;
      displayCart();
    }
  }
  
  // Initial display of the cart
  displayCart();
  