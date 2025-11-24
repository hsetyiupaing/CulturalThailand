export class FAQ extends HTMLElement {
    constructor() {
        super();

        this.faqs = [
            { q: "What is Thailand famous for?", a: "Culture, temples, food, beaches." },
            { q: "Best time to visit?", a: "November to February for cool weather." },
            { q: "Is Thailand cheap?", a: "Yes, compared to Western countries." },
            { q: "Do I need a visa?", a: "Many nationalities get visa-free entry for short stays; check your country's rules." },
            { q: "Is it safe to travel?", a: "Thailand is generally safe for tourists; follow normal precautions and local advice." },
            { q: "What currency is used?", a: "Thai Baht (THB). Credit cards are widely accepted in cities." }
        ];
    }

    connectedCallback() {
        this.render();
        this.addToggleEvents();
    }

    render() {
        this.innerHTML = `
            <section class="max-w-3xl mx-auto p-4">
                <h2 class="text-2xl font-bold mb-4">FAQ</h2>
                <div>
                    ${this.faqs.map((item, index) => `
                        <div class="border-b py-3 cursor-pointer" data-index="${index}">
                            <p class="font-semibold">${item.q}</p>
                            <p class="text-gray-600 hidden answer">${item.a}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    addToggleEvents() {
        const items = this.querySelectorAll("[data-index]");

        items.forEach(item => {
            item.addEventListener("click", () => {
                const answer = item.querySelector(".answer");
                answer.classList.toggle("hidden");
            });
        });
    }
}
