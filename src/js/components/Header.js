export class Header extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Title';

        let prefix = '/src/pages/';

        const homeLink = prefix + 'index.html';
        const aboutLink = prefix + 'about.html';
        const locationsLink = prefix + 'famousLocations.html';
        const ethnicLink = prefix + 'ethnic.html';
        const contactLink = prefix + 'contactus.html';

        this.innerHTML = `
            <nav role="navigation" aria-label="Main navigation" class="fixed top-0 left-0 w-full z-50 p-2.5 shadow-md bg-gray-200 backdrop:opacity-75">
                <div class="max-w-7xl mx-auto flex items-center justify-between">
                    <h1 class="font-bold text-2xl sm:text-3xl ">${title}</h1>
                    <button id="navToggle" class="sm:hidden focus:outline-none" aria-label="Toggle navigation">
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <ul id="navLinks" class="hidden sm:flex space-x-6 text-lg">
                        <li><a href="${homeLink}" class="hover:underline">Home</a></li>
                        <li><a href="${aboutLink}" class="hover:underline">About</a></li>
                        <li><a href="${locationsLink}" class="hover:underline">Places</a></li>
                        <li><a href="${ethnicLink}" class="hover:underline">Ethnics</a></li>
                        <li><a href="${contactLink}" class="hover:underline">Contact</a></li>
                    </ul>
                </div>
                <div id="mobileNav" class="sm:hidden hidden mt-3">
                    <ul class="flex flex-col space-y-2 text-center">
                        <li><a href="${homeLink}" class="block px-4 py-2 hover:bg-amber-600">Home</a></li>
                        <li><a href="${aboutLink}" class="block px-4 py-2 hover:bg-amber-600">About</a></li>
                        <li><a href="${locationsLink}" class="block px-4 py-2 hover:bg-amber-600">Places</a></li>
                        <li><a href="${ethnicLink}" class="block px-4 py-2 hover:bg-amber-600">Ethnics</a></li>
                        <li><a href="${contactLink}" class="block px-4 py-2 hover:bg-amber-600">Contact</a></li>
                    </ul>
                </div>
            </nav>
        `;

        this._btn = this.querySelector('#navToggle');
        this._mobile = this.querySelector('#mobileNav');

        this._toggle = this._toggle.bind(this);
        this._onDocClick = this._onDocClick.bind(this);

        if (this._btn) this._btn.addEventListener('click', this._toggle);
        document.addEventListener('click', this._onDocClick);
    }

    disconnectedCallback() {
        if (this._btn) this._btn.removeEventListener('click', this._toggle);
        document.removeEventListener('click', this._onDocClick);
    }

    _toggle(e) {
        e.stopPropagation();
        if (this._mobile) {
            this._mobile.classList.toggle('hidden');
        }
    }

    _onDocClick(e) {
        if (!this._mobile) return;
        const target = e.target;
        if (!this.contains(target) && !this._mobile.classList.contains('hidden')) {
            this._mobile.classList.add('hidden');
        }
    }
}
