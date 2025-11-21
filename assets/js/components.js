// Reusable Components for the Website

const Components = {
    // Header component with navigation
    header: function(isAlt = false) {
        return `
            <header id="header" ${isAlt ? 'class="alt"' : ''}>
                <h1><a href="#home">Rasheesa</a> books</h1>
                <nav id="nav">
                    <ul>
                        <li><a href="#home" class="nav-link">Home</a></li>
                        <li>
                            <a href="#" class="icon solid fa-angle-down">Layouts</a>
                            <ul>
                                <li><a href="#generic" class="nav-link">Generic</a></li>
                                <li><a href="#contact" class="nav-link">Contact</a></li>
                                <li><a href="#elements" class="nav-link">Elements</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        `;
    },

    // Footer component
    footer: function() {
        return `
            <footer id="footer">
                <ul class="icons">
                    <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                    <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                    <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                    <li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
                    <li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
                    <li><a href="#" class="icon brands fa-google-plus"><span class="label">Google+</span></a></li>
                </ul>
                <ul class="copyright">
                    <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </footer>
        `;
    },

    // Banner for home page
    banner: function() {
        return `
            <section id="banner">
                <h2>Alpha</h2>
                <p>Another fine responsive site template freebie by HTML5 UP.</p>
            </section>
        `;
    }
};
