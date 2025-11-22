export class Header extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Title'
        this.innerHTML = `
            <nav class="bg-amber-500 p-5 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between text-center">
                <h1 class="font-bold text-3xl">${title}</h1>
                <ul class="mt-3 space-x-4">
                    <li class="inline"><a href="index.html" class="hover:underline">Home</a></li>
                    <li class="inline"><a href="about.html" class="hover:underline">About</a></li>
                    <li class="inline"><a href="media.html" class="hover:underline">Media</a></li>
                    <li class="inline"><a href="contactus.html" class="hover:underline">Contact Us</a></li>
                </ul>
            </nav>

        `
    }
}