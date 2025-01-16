// loading footer 
document.addEventListener("DOMContentLoaded", () => {
    // Load Footer
    const footerElement = document.getElementById("footer");
    if (footerElement) {
        fetch("/assets/components/footer.html")
            .then((response) => response.text())
            .then((html) => {
                footerElement.innerHTML = html;
            })
            .catch((error) => console.error("Error loading footer:", error));
    }
});

// // Mobile Menu Functionality
const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-closed');
    mobileMenu.classList.add('menu-open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-open');
    mobileMenu.classList.add('menu-closed');
    document.body.style.overflow = ''; // Restore scrolling
});

// Close menu when clicking navigation links
const navLinks = document.querySelectorAll('#mobileMenu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('menu-open');
        mobileMenu.classList.add('menu-closed');
        document.body.style.overflow = ''; // Restore scrolling
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     const menuBtn = document.getElementById('menuBtn');
//     const closeMenuBtn = document.getElementById('closeMenuBtn');
//     const mobileMenu = document.getElementById('mobileMenu');

//     if (menuBtn && closeMenuBtn && mobileMenu) {
//         menuBtn.addEventListener('click', () => {
//             mobileMenu.classList.remove('menu-closed');
//             mobileMenu.classList.add('menu-open');
//             document.body.style.overflow = 'hidden'; // Prevent scrolling
//         });

//         closeMenuBtn.addEventListener('click', () => {
//             mobileMenu.classList.remove('menu-open');
//             mobileMenu.classList.add('menu-closed');
//             document.body.style.overflow = ''; // Restore scrolling
//         });
//     } else {
//         console.error('One or more elements are missing: menuBtn, closeMenuBtn, or mobileMenu.');
//     }
// });
