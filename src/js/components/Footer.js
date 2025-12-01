export class Footer extends HTMLElement {
    connectedCallback() {
        // Automatically detect correct prefix based on folder depth
        let path = window.location.pathname;

        // Count how many folders deep we are after /docs/
        let basePath = "/docs/";
        let depth = 0;

        if (path.startsWith(basePath)) {
            let subPath = path.slice(basePath.length); // remove "/docs/"
            depth = subPath.split("/").length - 1; // count folder depth
        }

        // Generate "../" repeated depth times
        let up = "../".repeat(depth);

        let prefix = up; // dynamically correct prefix

        const homeLink = prefix + 'index.html';
        const aboutLink = prefix + 'about.html';
        const locationsLink = prefix + 'famousLocations.html';
        const ethnicLink = prefix + 'ethnic.html';
        const contactLink = prefix + 'contactus.html';

        this.innerHTML = `
            <footer class="w-full bg-gray-900 text-white py-10 mt-10">
                <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 px-6 text-center sm:text-left">

                    <!-- Section 1 -->
                    <div>
                        <h2 class="font-bold text-lg mb-3">Cultural Thailand</h2>
                        <p class="footer-note">
                            Discover the beauty, heritage and diverse culture of Thailand.
                        </p>
                    </div>

                    <!-- Section 2 -->
                    <div>
                        <h2 class="font-bold text-lg mb-3">Quick Links</h2>
                        <ul class="space-y-2 text-sm">
                            <li><a href="${homeLink}" class="hover:underline">Home</a></li>
                            <li><a href="${aboutLink}" class="hover:underline">About</a></li>
                            <li><a href="${locationsLink}" class="hover:underline">Places</a></li>
                            <li><a href="${ethnicLink}" class="hover:underline">Ethnics</a></li>
                            <li><a href="${contactLink}" class="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    <!-- Section 3 -->
                    <div>
                        <h2 class="font-bold text-lg mb-3">Contact</h2>
                        <p class="footer-note">Bangkok, Thailand</p>
                        <p class="footer-note">Email: info@culturalthailand.com</p>
                    </div>

                </div>

                <div class="text-center text-xs opacity-70 mt-8">
                    © 2025 IT 362 Frontend Web Development All Rights Reserved
                </div>
            </footer>
        `;
    }
}
