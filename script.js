// Array of local Nigerian meals
const menuItems = [
  {
    name: "Jollof Rice",
    description: "Spicy tomato-based rice with chicken lap",
    price: 1500,
    image: "images/jollof.jpg"
  },
  {
    name: "Egusi Soup",
    description: "Melon seed soup with assorted meat",
    price: 2000,
    image: "images/egusi.jpg"
  },
  {
    name: "Yam and Egg Sause",
    description: "Yam with delicious Egg Sause",
    price: 1800,
    image: "images/yam-and-sause.jpg"
  },
  {
    name: "Suya",
    description: "Spicy grilled beef with onions and pepper",
    price: 1000,
    image: "images/suya.jpeg"
  },
  {
    name: "Moi Moi",
    description: "Steamed bean pudding made with pepper and spices",
    price: 800,
    image: "images/moi-moi.jpg"
  },
  {
    name: "Amala & Ewedu",
    description: "Yam flour dish with green ewedu soup and meat",
    price: 1700,
    image: "images/amala.jpg"
  }
];

// Cart to hold selected items
let cart = [];

const menuContainer = document.getElementById("menu-items");
const cartContainer = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
const submitBtn = document.getElementById("submit-btn");
const printBtn = document.getElementById("print-btn");
const modal = document.getElementById("success-modal");
const closeModal = document.getElementById("close-modal");

// menu items
menuItems.forEach((item, index) => {
  const card = document.createElement("div");
  card.classList.add("food-card");

  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <p><strong>₦${item.price}</strong></p>
    <button class="add-btn" data-index="${index}">Add to Plate</button>
  `;

  menuContainer.appendChild(card);
});

// Add to Plate button
menuContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    const index = e.target.getAttribute("data-index");
    const item = menuItems[index];
    cart.push(item);
    updateCart();
  }
});

// Update cart UI
function updateCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₦${item.price}`;
    cartContainer.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = total;
}

// Submit Order
submitBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Please add at least one item to your plate!");
    return;
  }

  modal.classList.remove("hidden");
});

// Close success modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  cart = [];
  updateCart();
});

// Print Order
printBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Nothing to print. Add items to your plate.");
    return;
  }

  window.print();
});