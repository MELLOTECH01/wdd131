const listings = [
  { id: 1, title: "3-Bedroom Duplex", type: "real-estate", img: "images/3-bedroom-duplex.jpeg" },
  { id: 2, title: "Toyota Camry 2022", type: "cars", img: "images/toyota-camry-2022.jpeg" },
  { id: 3, title: "Luxury Villa", type: "real-estate", img: "images/luxury-villa.jpeg" },
  { id: 4, title: "Tesla Model 3", type: "cars", img: "images/tesla-model-3.jpeg" }
];

const container = document.getElementById("listings-container");
const buttons = document.querySelectorAll("#filters button");

function displayListings(filter) {
  container.innerHTML = "";
  const filtered = filter === "all" ? listings : listings.filter(item => item.type === filter);

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}" loading="lazy" style="max-width:100%">
      <h3>${item.title}</h3>
    `;
    container.appendChild(div);
  });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => displayListings(btn.dataset.type));
});

document.getElementById("year").textContent = new Date().getFullYear();

displayListings("all");