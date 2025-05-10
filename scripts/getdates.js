document.addEventListener("DOMContentLoaded", () => {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    // Update the copyright year in the paragraph with the id "current-year"
    const footerFirstParagraph = document.getElementById("currentyear");
    footerFirstParagraph.innerHTML = `&copy;${currentYear} || Dayo Oluwasuyi || Nigeria`;

    // Get and format the last modified date
    const lastModified = new Date(document.lastModified);
    const footerLastModified = document.getElementById("lastModified");
    footerLastModified.textContent = 
        `Last Modification: ${lastModified.toLocaleDateString()} ${lastModified.toLocaleTimeString()}`;
});


