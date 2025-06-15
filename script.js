/*
// ===================================================================
// BORN HEALER - JAVASCRIPT
// Handles mobile navigation and dynamic content.
// ===================================================================
*/

document.addEventListener('DOMContentLoaded', function() {

    /**
     * Sets up the mobile navigation toggle functionality.
     */
    function setupMobileNav() {
        const navToggle = document.getElementById('nav-toggle');
        const mainNav = document.getElementById('main-nav');

        if (!navToggle || !mainNav) {
            console.error('Mobile navigation elements not found.');
            return;
        }

        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                 if (mainNav.classList.contains('active')) {
                     navToggle.classList.remove('active');
                     mainNav.classList.remove('active');
                     navToggle.setAttribute('aria-expanded', 'false');
                 }
            });
        });
    }

    /**
     * Dynamically updates the copyright year in the footer.
     */
    function updateCopyrightYear() {
        const yearSpan = document.getElementById('year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }
    
    // --- INITIALIZE ALL SCRIPTS ---
    setupMobileNav();
    updateCopyrightYear();

});
