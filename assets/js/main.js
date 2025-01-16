// loading footer 
document.addEventListener("DOMContentLoaded", () => {
    // Load Footer
    const footerElement = document.getElementById("footer");
    if (footerElement) {
        fetch("/assets/components/footer.html")
            .then((response) => response.text())
            .then((html) => {
                footerElement.innerHTML = html;
                // Optional: Add footer-specific JS logic here
            })
            .catch((error) => console.error("Error loading footer:", error));
    }
});