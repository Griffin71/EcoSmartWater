// ===== Modal Functionality =====
const buyNowBtn = document.getElementById("buyNowBtn");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const confirmBtn = document.getElementById("confirmBtn");

const colorSelect = document.getElementById("color");
const engraving = document.getElementById("engraving");
const premiumBox = document.getElementById("premiumBox");

const modalPrice = document.getElementById("modalPrice");
const priceDisplay = document.getElementById("price");

let basePrice = 150;

// Open modal
buyNowBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  updatePrice();
});

// Close modal
closeBtn.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Update price in real time
function updatePrice() {
  let total = basePrice;

  const selectedColor = colorSelect.options[colorSelect.selectedIndex];
  total += Number(selectedColor.dataset.price);

  if (engraving.checked) total += Number(engraving.dataset.price);
  if (premiumBox.checked) total += Number(premiumBox.dataset.price);

  modalPrice.textContent = `R${total}`;
  return total;
}

colorSelect.addEventListener("change", updatePrice);
engraving.addEventListener("change", updatePrice);
premiumBox.addEventListener("change", updatePrice);

// Confirm selection
confirmBtn.addEventListener("click", () => {
  const total = updatePrice();
  priceDisplay.textContent = `R${total}`;
  modal.style.display = "none";
});

// ===== Contact Form Validation =====
document.getElementById("contactForm").addEventListener("submit", (e) => {
  const terms = document.getElementById("terms");
  if (!terms.checked) {
    e.preventDefault();
    alert("Please agree to the Terms and Conditions before submitting.");
  } else {
    alert("Message sent successfully!");
  }
});
