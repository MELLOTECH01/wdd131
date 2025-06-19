document.getElementById("year").textContent = new Date().getFullYear();

// Form submission counter logic
document.getElementById("contactForm").addEventListener("submit", () => {
  let counter = Number(localStorage.getItem("inquiryCount")) || 0;
  localStorage.setItem("inquiryCount", counter + 1);
});