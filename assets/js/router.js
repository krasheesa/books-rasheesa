// Simple Router for Single Page Application
const Router = {
    routes: {},
    currentPage: '',

    // Initialize the router
    init: function() {
        // Handle initial load
        window.addEventListener('load', () => {
            this.handleRoute();
        });

        // Handle hash changes
        window.addEventListener('hashchange', () => {
            this.handleRoute();
        });

        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('.nav-link')) {
                e.preventDefault();
                const hash = e.target.getAttribute('href');
                window.location.hash = hash;
            }
        });
    },

    // Register a route
    register: function(path, callback) {
        this.routes[path] = callback;
    },

    // Handle route changes
    handleRoute: function() {
        let hash = window.location.hash.slice(1) || 'home';
        
        // Remove any parameters from hash
        hash = hash.split('?')[0];

        // Check if route exists
        if (this.routes[hash]) {
            this.currentPage = hash;
            this.routes[hash]();
            this.updateActiveLinks(hash);
        } else {
            // Default to home
            window.location.hash = '#home';
        }
    },

    // Update active navigation links
    updateActiveLinks: function(currentHash) {
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href').slice(1);
            if (href === currentHash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    },

    // Navigate to a route programmatically
    navigate: function(path) {
        window.location.hash = '#' + path;
    }
};
