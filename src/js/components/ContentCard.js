export class ContentCard extends HTMLElement {
  connectedCallback() {
    const text = this.getAttribute('text') || this.innerHTML || 'Default Content Text';
    // If content provided as attribute, use it; otherwise allow innerHTML fallback
    this.innerHTML = `
      <div class="bg-white rounded-3xl p-5 sm:p-10 border border-white border-opacity-30 shadow-xl">
        <p class="text-lg sm:text-xl leading-relaxed text-black">
          ${text}
        </p>
      </div>
    `;
  }
}
