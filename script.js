 // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const body = document.body;

    function toggleMobileMenu() {
      mobileNav.classList.toggle('active');
      mobileMenuOverlay.classList.toggle('active');
      body.classList.toggle('menu-open');
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

    // Smooth scrolling function
    function scrollToSection(id) {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Handle mobile nav clicks
    function handleMobileNavClick(id) {
      scrollToSection(id);
      toggleMobileMenu();
    }

    // Form submission
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
