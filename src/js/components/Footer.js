export class Footer extends HTMLElement {
    connectedCallback() {
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
                            <li><a href="index.html" class="hover:underline">Home</a></li>
                            <li><a href="about.html" class="hover:underline">About</a></li>
                            <li><a href="media.html" class="hover:underline">Media</a></li>
                            <li><a href="contactus.html" class="hover:underline">Contact Us</a></li>
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
                    © 2025 Cultural Thailand — All Rights Reserved
                </div>
            </footer>
        `;
    }
}
