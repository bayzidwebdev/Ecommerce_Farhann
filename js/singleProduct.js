const cartCountElement = document.querySelector(".cart-amount");
const adToCartButton = document.querySelector(".increaseBtn");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");

let cartCount = 0;
const quantityInput = document.getElementById("quantity");

// Minimum and maximum values
const minValue = parseInt(quantityInput?.min);
const maxValue = parseInt(quantityInput?.max);

// Decrease button functionality
decreaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);

  if (currentValue > minValue) {
    quantityInput.value = currentValue - 1;
  }
});

// Increase button functionality
increaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);

  if (currentValue < maxValue) {
    quantityInput.value = currentValue + 1;
  }
});

// Prevent manual input outside the min/max limits
quantityInput.addEventListener("input", () => {
  let currentValue = parseInt(quantityInput.value);

  if (currentValue < minValue) {
    quantityInput.value = minValue;
  } else if (currentValue > maxValue) {
    quantityInput.value = maxValue;
  }
});
const updateCartCount = () => {
  // Update the cart count element's text
  cartCount += Number(quantityInput.value);
  cartCountElement.textContent = cartCount;

  // Show the count if it's greater than 0, hide it if 0
  if (cartCount > 0) {
    cartCountElement.classList.add("visible");
  } else {
    cartCountElement.classList.remove("visible");
  }
};

// Add event listener to the button to increase the count
adToCartButton.addEventListener("click", updateCartCount);
