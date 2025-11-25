export class LocationCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Location';
        const desc = this.getAttribute('desc') || 'Description not available.';
        const link = this.getAttribute('link') || '#';
        const image = this.getAttribute('image') || ''; // NEW IMAGE

        this.innerHTML = `
            <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                
                ${image
                    ? `<img src="${image}" alt="${title}"
                        class="w-full h-48 object-cover rounded-lg mb-4">`
                    : ''
                }

                <h2 class="text-2xl font-semibold mb-3">${title}</h2>
                <p class="text-gray-700 mb-4">${desc}</p>

                <a href="${link}"
                    class="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Learn More
                </a>

            </div>
        `;
    }
}
