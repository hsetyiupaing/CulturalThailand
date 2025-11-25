import { HeroBenner } from "./components/HeroBenner.js";
import { InfoCards, MediaContent } from "./components/mediaComponents.js";
import { ContentCard } from "./components/ContentCard.js";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { FAQ } from "./components/FAQ.js";
import { ContentCardWImage } from "./components/ContentCardWImage.js";
import { InfoCard } from "./components/InfoCard.js";
import { ProfileCard } from "./components/ProfileCard.js";
import { LocationCard } from "./components/LocationCard.js";


// Debug helper to confirm the module loaded in the browser
console.log('app.js loaded');

customElements.define('hero-banner', HeroBenner);
customElements.define('info-cards', InfoCards);
customElements.define('content-card', ContentCard);
customElements.define('media-content', MediaContent);

customElements.define('header-bar', Header);
customElements.define('footer-bar', Footer);
customElements.define('faq-section', FAQ);

customElements.define('contentcard-w-image', ContentCardWImage);
customElements.define('info-card', InfoCard)
customElements.define('profile-card', ProfileCard)
customElements.define('location-card', LocationCard);

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

