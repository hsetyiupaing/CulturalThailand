export class HeroBenner extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'Default Title';
    const image = this.getAttribute('image') || '';

    this.innerHTML = `
      <section class="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">

        <!-- Background Image -->
        <div class="absolute inset-0">
          <img src="${image}" class="w-full h-full object-cover" />
        </div>

        <!-- Dark overlay -->
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- Title -->
        <h1 class="relative z-10 text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center px-4"
            style="text-shadow: 3px 3px 10px rgba(0,0,0,0.5);">
          ${title}
        </h1>

      </section>
    `;
  }
}

