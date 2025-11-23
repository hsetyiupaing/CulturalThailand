import { HeroBenner } from "./components/HeroBenner.js";
import { InfoCards, MediaContent } from "./components/mediaComponents.js";
import { ContentCard } from "./components/ContentCard.js";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";

// Debug helper to confirm the module loaded in the browser
console.log('app.js loaded');

customElements.define('hero-banner', HeroBenner);
customElements.define('info-cards', InfoCards);
customElements.define('content-card', ContentCard);
customElements.define('media-content', MediaContent);

customElements.define('header-bar', Header);
customElements.define('footer-bar', Footer);

window.addEventListener("DOMContentLoaded", () => {
    if(!document.querySelector("header-bar")){
        const header = document.createElement("header-bar");
        header.setAttribute("title", "Catural Thailand");
        document.body.append(header)
    }
    
    if(!document.querySelector("footer-bar")){
        const footer = document.createElement("footer-bar");
        document.body.append(footer)
    }
})

