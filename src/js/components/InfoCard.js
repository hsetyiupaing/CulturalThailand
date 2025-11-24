export class InfoCard extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name') || '';
    const location = this.getAttribute('location') || '';
    const culture = this.getAttribute('culture') || '';
    const femaleImg = this.getAttribute('female-img') || '';
    const maleImg = this.getAttribute('male-img') || '';

    this.innerHTML = `
      <div class="grid grid-rows-2 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border-l-4 border-yellow-600 overflow-hidden">
        <div class="p-6">
          <h3 class="text-lg font-bold text-yellow-700 mb-3">${name}</h3>
          <p class="text-gray-700 sm:text-[18px] md:text-[23px] mb-2">
            <strong>Location:</strong> <span class="text-gray-600">${location}</span>
          </p>
          <p class="text-gray-700 sm:text-[18px] md:text-[23px] leading-relaxed">
            <strong>Culture:</strong> <span class="text-gray-600">${culture}</span>
          </p>
        </div>
        <div class="grid grid-cols-2 gap-3 p-4 bg-white">
          <div class="text-center">
            <img src="${femaleImg}" class="w-full h-40 object-cover rounded border-2 border-yellow-600" />
            <p class="text-xs font-semibold text-yellow-700 mt-1">Female</p>
          </div>
          <div class="text-center">
            <img src="${maleImg}" class="w-full h-40 object-cover rounded border-2 border-yellow-600" />
            <p class="text-xs font-semibold text-yellow-700 mt-1">Male</p>
          </div>
        </div>
      </div>
    `;
  }
}

