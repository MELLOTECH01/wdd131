document.getElementById("year").textContent = new Date().getFullYear();

const highlights = [
    { title: "Luxury Homes", desc: "Exclusive properties with top amenities." },
    { title: "Top Car Deals", desc: "Certified pre-owned and brand-new cars." }
];

const highlightsContainer = document.getElementById("highlights");
highlights.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
    highlightsContainer.appendChild(div);
});