// Page Content Definitions
const Pages = {
    // Home page content
    home: function() {
        return `
            <!-- Banner -->
            <section id="banner">
                <h2>Rasheesa Books</h2>
                <p>A collection of tales crafted by Rasheesa</p>
            </section>

            <!-- Main -->
            <section id="main" class="container">

                <section class="box special">
                    <header class="major">
                        <h2>About Me</h2>
                        <p>Hi! Aku Rasheesa, nama pena yang kuambil dari namaku sendiri—Kevin Rasheesa.<br />
                        Di malam hari, aku penulis fiksi pemula yang senang menulis tentang emosi, cinta yang rumit, dunia yang hancur, dan manusia yang sering kali kalah oleh pikirannya sendiri. Tapi di siang hari, aku seorang DevOps/Software Engineer. Sama-sama menulis, hanya saja bahasanya berbeda :D <br />
                        Mungkin terdengar kontras, tapi buat aku, keduanya saling melengkapi. Teknologi mengajarkanku disiplin, keteraturan, dan struktur. Sementara menulis memberiku ruang untuk bernapas dan kebebasan untuk berantakan, rapuh, dan jujur. <br />
                        Website ini adalah tempatku berbagi cerita dan imajinasi.</p>
                    </header>
                    <span class="image featured"><img src="images/pic01.jpg" alt="" /></span>
                </section>

                <section class="box special features">
                    <div class="features-row">
                        <section>
                            <span class="icon solid major fa-heart accent2"></span>
                            <h3>Romance</h3>
                            <p>Aku menulis romance sebagai sarana untuk mencurahkan isi kepala dan hati. Karena entah kenapa, banyak hal terasa lebih jujur ketika disampaikan lewat kisah cinta.</p>
                        </section>
                        <section>
                            <span class="icon solid major fa-skull accent4"></span>
                            <h3>Thriller/Survival</h3>
                            <p>Genre ini menjembatani pikiranku yang sering membayangkan: bagaimana jika dunia benar-benar hancur, dan aku terpaksa hidup di dalamnya.</p>
                        </section>
                    </div>
                    <div class="features-row">
                        <section>
                            <span class="icon solid major fa-dragon accent3"></span>
                            <h3>Fantasy</h3>
                            <p>Fantasy adalah tempatku membayangkan hal-hal yang mustahil terjadi di dunia ini. Sebuah ruang bebas tanpa batas realitas.</p>
                        </section>
                        <section>
                            <span class="icon solid major fa-cloud accent5"></span>
                            <h3>Slice of Life</h3>
                            <p>Potongan-potongan kecil kehidupan sehari-hari yang bisa dirasakan; sederhana, terasa dekat, justru karena tidak berusaha menjadi luar biasa.</p>
                        </section>
                    </div>
                </section>

                <div class="row">
                    <div class="col-6 col-12-narrower">

                        <section class="box special">
                            <span class="image featured"><img src="images/pic02.jpg" alt="" /></span>
                            <h3>Sed lorem adipiscing</h3>
                            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
                            <ul class="actions special">
                                <li><a href="#" class="button alt">Learn More</a></li>
                            </ul>
                        </section>

                    </div>
                    <div class="col-6 col-12-narrower">

                        <section class="box special">
                            <span class="image featured"><img src="images/pic03.jpg" alt="" /></span>
                            <h3>Accumsan integer</h3>
                            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
                            <ul class="actions special">
                                <li><a href="#" class="button alt">Learn More</a></li>
                            </ul>
                        </section>

                    </div>
                </div>

            </section>


        `;
    },

    // Generic page content
    generic: function() {
        return `
            <!-- Main -->
            <section id="main" class="container">
                <header>
                    <h2>Generic</h2>
                    <p>A generic page for every non-generic situation.</p>
                </header>
                <div class="box">
                    <span class="image featured"><img src="images/pic01.jpg" alt="" /></span>
                    <h3>This is a subheading</h3>
                    <p>Cep risus aliquam gravida cep ut lacus amet. Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae ante vestibulum ante. Blandit. Ante accumsan nisi eu placerat gravida placerat adipiscing in risus fusce vitae ac mi accumsan nunc in accumsan tempor blandit aliquet aliquet lobortis. Ultricies blandit lobortis praesent turpis. Adipiscing accumsan adipiscing adipiscing ac lacinia cep. Orci blandit a iaculis adipiscing ac. Vivamus ornare laoreet odio vis praesent nunc lorem mi. Erat. Tempus sem faucibus ac id. Vis in blandit. Nascetur ultricies blandit ac. Arcu aliquam. Accumsan mi eget adipiscing nulla. Non vestibulum ac interdum condimentum semper commodo massa arcu.</p>
                    <div class="row">
                        <div class="row-6 row-12-mobilep">
                            <h3>And now a subheading</h3>
                            <p>Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae lorem ipsum adipiscing ac. Vivamus ornare laoreet odio vis praesent.</p>
                        </div>
                        <div class="row-6 row-12-mobilep">
                            <h3>And another subheading</h3>
                            <p>Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae lorem ipsum adipiscing ac. Vivamus ornare laoreet odio vis praesent.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // Contact page content
    contact: function() {
        return `
            <!-- Main -->
            <section id="main" class="container medium">
                <header>
                    <h2>Contact Us</h2>
                    <p>Tell us what you think about our little operation.</p>
                </header>
                <div class="box">
                    <form method="post" action="#">
                        <div class="row gtr-50 gtr-uniform">
                            <div class="col-6 col-12-mobilep">
                                <input type="text" name="name" id="name" value="" placeholder="Name" />
                            </div>
                            <div class="col-6 col-12-mobilep">
                                <input type="email" name="email" id="email" value="" placeholder="Email" />
                            </div>
                            <div class="col-12">
                                <input type="text" name="subject" id="subject" value="" placeholder="Subject" />
                            </div>
                            <div class="col-12">
                                <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
                            </div>
                            <div class="col-12">
                                <ul class="actions special">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        `;
    },

    // Elements page content (placeholder)
    elements: function() {
        return `
            <!-- Main -->
            <section id="main" class="container">
                <header>
                    <h2>Elements</h2>
                    <p>Various UI elements and components.</p>
                </header>
                <div class="box">
                    <h3>Coming Soon</h3>
                    <p>This page will contain various UI elements and components.</p>
                </div>
            </section>
        `;
    }
};
