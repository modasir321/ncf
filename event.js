// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Open PDF Function
function openPdf() {
    // Path to the PDF file
    const pdfPath = "NCFInformation.pdf";
    // Open the PDF in a new tab
    window.open(pdfPath, "_blank");
}

// Popup Modal
function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}