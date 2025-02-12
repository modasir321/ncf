// Sticky Header
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Open PDF Function
function openPdf() {
    // Path to the PDF file (ensure this path is correct)
    const pdfPath = "NCFInformation.pdf";
    // Open the PDF in a new tab
    window.open(pdfPath, "_blank");
}

// Popup Modal Functions
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Toggle Menu Functionality
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Registration Button Functionality
document.getElementById('register-btn').addEventListener('click', function () {
    const registrationOptions = document.getElementById('registration-options');
    registrationOptions.classList.toggle('active');
});

// Close Popup When Clicking Outside the Modal
window.addEventListener('click', function (event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        closePopup();
    }
});