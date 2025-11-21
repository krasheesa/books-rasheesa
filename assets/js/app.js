// Application initialization and management
const App = {
    container: null,

    // Initialize the application
    init: function() {
        this.container = document.getElementById('page-wrapper');
        
        // Register all routes
        this.registerRoutes();
        
        // Initialize the router
        Router.init();
    },

    // Register all application routes
    registerRoutes: function() {
        // Home page
        Router.register('home', () => {
            this.loadPage('home', true);
        });

        // Generic page
        Router.register('generic', () => {
            this.loadPage('generic', false);
        });

        // Contact page
        Router.register('contact', () => {
            this.loadPage('contact', false);
        });

        // Elements page
        Router.register('elements', () => {
            this.loadPage('elements', false);
        });
    },

    // Load a page with header and footer
    loadPage: function(pageName, isHomePage = false) {
        const header = Components.header(isHomePage);
        const content = Pages[pageName]();
        const footer = Components.footer();

        // Update page content
        this.container.innerHTML = header + content + footer;

        // Update page title
        const titles = {
            'home': 'Rasheesa Books',
            'generic': 'Generic - Rasheesa Books',
            'contact': 'Contact - Rasheesa Books',
            'elements': 'Elements - Rasheesa Books'
        };
        document.title = titles[pageName] || 'Rasheesa Books';

        // Update body class for home page
        if (isHomePage) {
            document.body.classList.add('landing');
        } else {
            document.body.classList.remove('landing');
        }

        // Reinitialize dropotron for navigation dropdowns
        if (typeof jQuery !== 'undefined' && jQuery.fn.dropotron) {
            jQuery('#nav > ul').dropotron({
                alignment: 'right'
            });
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    App.init();
});
