// Cart array to store selected products
let cart = [];

// Add product to cart
function addToCart(productName) {
  cart.push(productName);
  updateCartUI();
}

// Remove product from cart by index
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

// Update the cart UI
function updateCartUI() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    return;
  }

  cart.forEach((product, index) => {
    const listItem = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = product;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => removeFromCart(index);

    listItem.appendChild(text);
    listItem.appendChild(deleteBtn);
    cartList.appendChild(listItem);
  });
}

// Contact Form Handling
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("form-status");

    if (!name || !email || !message) {
      status.textContent = "Please fill out all fields.";
      status.style.color = "red";
      return;
    }

    // Simulate form submission success
    status.textContent = "Thank you! Your message has been sent.";
    status.style.color = "green";
    contactForm.reset();
  });
}
