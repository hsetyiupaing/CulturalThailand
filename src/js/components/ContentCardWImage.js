export class ContentCardWImage extends HTMLElement {
    connectedCallback() {
        const image = this.getAttribute("image") || "";
        const title = this.getAttribute("title") || "Content Title";
        const body = this.getAttribute("body") || "Lorem ipsum dolor sit amet.";

        this.innerHTML = `
            <section 
                class="w-full py-20 bg-gradient-to-r 
                       from-yellow-300 via-yellow-400 to-yellow-500">

                <div class="max-w-5xl mx-auto px-6 
                            grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                    <!-- Text -->
                    <div class="space-y-5">
                        <h2 class="text-4xl font-bold text-gray-900 drop-shadow-sm">
                            ${title}
                        </h2>
                        <p class="text-gray-800 leading-relaxed text-lg">
                            ${body}
                        </p>
                    </div>

                    <!-- Image -->
                    <div>
                        <img 
                            src="${image}" 
                            alt="${title}"
                            class="w-full h-auto rounded-3xl shadow-2xl object-cover border-4 border-white/40">
                    </div>

                </div>
            </section>
        `;
    }
}
