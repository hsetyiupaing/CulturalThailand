export class HeroBenner extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'Default Title';
    const image = this.getAttribute('image') || '';

    this.innerHTML = `<section class="w-full h-[60vh] flex justify-center items-center text-white relative">
                        <div class="absolute inset-0 bg-opacity-40"></div>
                        <img src="${image}" class="absolute inset-0 w-full h-full object-cover -z-10">
                        <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-center px-3 sm:px-5 relative"
                            style="text-shadow: 3px 3px 10px rgba(0,0,0,0.5);">
                            ${title}
                        </h1>
                      </section>`;
  }
}
