export class InfoCards extends HTMLElement {
  connectedCallback() {
    const opening = this.getAttribute('opening') || '';
    const location = this.getAttribute('location') || '';
    const price = this.getAttribute('price') || '';

    this.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-2xl p-8 text-center shadow-lg">
          <h3 class="text-gray-500 text-sm uppercase mb-4">Opening Hour</h3>
          <p class="text-gray-900 font-bold text-x1">${opening}</p>
        </div>
        <div class="bg-white rounded-2xl p-8 text-center shadow-lg">
          <h3 class="text-gray-500 text-sm uppercase mb-4">Location</h3>
          <p class="text-gray-900 font-bold text-xl">${location}</p>
        </div>
        <div class="bg-white rounded-2xl p-8 text-center shadow-lg">
          <h3 class="text-gray-500 text-sm uppercase mb-4">Price</h3>
          <p class="text-gray-900 font-bold text-xl">${price}</p>
        </div>
      </div>
    `;
  }
}

export class MediaContent extends HTMLElement {
  connectedCallback() {
    // Preserve any innerHTML provided in markup as the content body
    const content = this.innerHTML || '';
    this.innerHTML = `
      <div class="bg-white rounded-3xl p-5 sm:p-10 border border-white border-opacity-30 shadow-xl">
        ${content}
      </div>
    `;
  }
}
