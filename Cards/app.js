// Get references to elements
const shoppingButton = document.querySelector('.shopping');
const sidebar = document.getElementById('sidebar');
const cartItems = document.getElementById('cart-items');
const shoppingNotification = document.querySelector('.shopping-notification');
const totalPriceElement = document.getElementById('totalPrice'); // Reference to total price display

let totalPrice = 0;

// Event listener for the shopping button
shoppingButton.addEventListener('click', () => {
  sidebar.classList.toggle('hidden'); // Toggle sidebar visibility
});

const closeSidebarButton = document.getElementById('closeSidebar');

// Event listener for the close button
closeSidebarButton.addEventListener('click', () => {
  sidebar.classList.add('hidden'); // Hide the sidebar
});

function updateTotalPrice() {
  const items = cartItems.querySelectorAll('.quantity');
  const shoppingBagNotification = document.querySelector('.shopping-notification');

  let totalItems = 0;

  items.forEach(item => {
    const quantity = parseInt(item.textContent);
    totalItems += quantity;
  });

  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
  shoppingBagNotification.textContent = totalItems;
}


function calculateTotalPrice() {
  const cartItemsList = cartItems.querySelectorAll('li');

  let calculatedTotalPrice = 0; // Create a local variable to calculate the total price

  cartItemsList.forEach(item => {
    const priceString = item.querySelector('.font-semibold').textContent;
    const price = parseFloat(priceString.replace('$', '').replace(',', '')); // Handle potential commas in the price string
    const quantity = parseInt(item.querySelector('.quantity').textContent);

    if (!isNaN(price) && !isNaN(quantity)) {
      calculatedTotalPrice += price * quantity;
    }
  });

  // Update the displayed total price after calculating
  if (!isNaN(calculatedTotalPrice)) {
    totalPriceElement.textContent = `$${calculatedTotalPrice.toFixed(2)}`;
    totalPrice = calculatedTotalPrice; // Update the global totalPrice variable
  }

  updateTotalPrice(); // Update the displayed total price and notification
}



function addItemToCart(productCard) {
  const title = productCard.querySelector('.text-title').textContent;
  let priceString = productCard.querySelector('.card-footer .text-title').textContent;
  let price = parseFloat(priceString.replace('$', ''));
  

  const li = document.createElement('li');
  li.classList.add('mb-4');

  li.innerHTML = `
    <div class="flex items-center justify-between">
        <img class="w-16 h-16 mr-2" src="${productCard.querySelector('img').src}" alt="${title}">
        <div class="flex flex-col">
            <p class="text-sm font-semibold">${title}</p>
            <div class="flex mt-1">
                <button class="quantity-control border rounded-full px-2 py-1 mr-2" data-action="decrease">-</button>
                <span class="quantity">1</span>
                <button class="quantity-control border rounded-full px-2 py-1 ml-2" data-action="increase">+</button>
            </div>
        </div>
        <p class="font-semibold">$${price.toFixed(2)}</p>
    </div>
  `;

  const quantityControlButtons = li.querySelectorAll('.quantity-control');
  const quantityElement = li.querySelector('.quantity');

  quantityControlButtons.forEach(button => {
    button.addEventListener('click', () => {
      const action = button.getAttribute('data-action');
      const currentQuantity = parseInt(quantityElement.textContent);

      if (action === 'increase') {
        quantityElement.textContent = currentQuantity + 1;
        totalPrice += price;
      } else if (action === 'decrease' && currentQuantity > 1) {
        quantityElement.textContent = currentQuantity - 1;
        totalPrice -= price;
      }

      calculateTotalPrice();
    });
  });

  cartItems.appendChild(li);
  calculateTotalPrice();
}

const addToCartButtons = document.querySelectorAll('.addToCartButton');

addToCartButtons.forEach(addToCartButton => {
  addToCartButton.addEventListener('click', event => {
    const productCard = event.currentTarget.closest('.card');
    addItemToCart(productCard);
  });
});
