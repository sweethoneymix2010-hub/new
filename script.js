// Smooth Scroll for "Connect With Me" button
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

// Optional: console greeting
console.log("Welcome to Corrina Almeida's resume website!");

// Optional: alert on page load (can remove if not needed)
window.addEventListener('load', () => {
    console.log("Page Loaded Successfully");
});
