// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const body = document.body;

// Toggle the mobile menu
function toggleMobileMenu() {
  mobileNav.classList.toggle('active');  // This will trigger the CSS transition to drop the menu
  mobileMenuOverlay.classList.toggle('active');  // This will show the overlay
  body.classList.toggle('menu-open');  // Optional, you can use this to prevent scrolling while the menu is open
}

// Event listener for the mobile menu button (Hamburger icon)
mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Event listener for clicking on the overlay to close the menu
mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

// Smooth scrolling function (to navigate to sections)
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Handle mobile nav clicks (scroll to sections and close the menu)
function handleMobileNavClick(id) {
  scrollToSection(id);
  toggleMobileMenu();  // Close the mobile menu when a link is clicked
}

// Form submission (for the quote form)
document.getElementById('quoteForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your request! We will contact you shortly.');
  this.reset();
});

// Close mobile menu when clicking on logo
document.querySelector('.logo-container').addEventListener('click', function() {
  if (body.classList.contains('menu-open')) {
    toggleMobileMenu();
  }
  scrollToSection('home');
});
