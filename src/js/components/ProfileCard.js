export class ProfileCard extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute("name") || "John Doe";
        const title = this.getAttribute("title") || "CEO & Founder";
        const university = this.getAttribute("university") || "Harvard University";
        const image = this.getAttribute("image") || "/assets/default.jpg";

        this.innerHTML = `
            <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg text-center p-6">
                <img src="${image}" alt="${name}" class="w-full rounded-lg">
                <h1 class="text-2xl font-bold mt-4">${name}</h1>
                <p class="text-gray-500">${title}</p>
                <p class="text-gray-700">${university}</p>

                <div class="flex justify-center gap-4 text-2xl my-4">
                    <a href="#"><i class="fa fa-dribbble"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                </div>

                <button class="w-full bg-amber-600 text-white py-2 rounded-lg cursor-pointer">Contact</button>
            </div>
        `;
    }
}

