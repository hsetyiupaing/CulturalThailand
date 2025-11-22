import { HeroBenner } from "./components/HeroBenner.js";
import { InfoCards, MediaContent } from "./components/mediaComponents.js";
import { ContentCard } from "./components/ContentCard.js";
import { Header } from "./components/Header.js";

customElements.define('hero-banner', HeroBenner);
customElements.define('info-cards', InfoCards);
customElements.define('content-card', ContentCard);
customElements.define('media-content', MediaContent);

customElements.define('header-bar', Header);