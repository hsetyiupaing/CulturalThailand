# Cultural Thailand

A comprehensive web application showcasing Thailand's rich cultural heritage, famous locations, and traditions. Built as a collaborative project for **IT 362 Frontend Web Development** at **Asia-Pacific International University**.

---

## 🌏 Overview

Cultural Thailand is an educational platform that connects people with Thailand's vibrant traditions, stunning architecture, sacred temples, and living cultural practices. Our mission is to preserve, celebrate, and promote Thai heritage through engaging storytelling, accessible digital experiences, and community-centered tourism.

---

## 📋 Table of Contents

* [Features](#✨-features)
* [Project Structure](#📁-project-structure)
* [Technologies Used](#🛠️-technologies-used)
* [Installation & Setup](#📦-installation--setup)
* [Usage](#💻-usage)
* [Pages & Components](#📄-pages--components)
* [Team](#👥-team)
* [License](#📜-license)

---

## ✨ Features

* **Hero Banner Component** – Eye-catching landing section with background images and overlays
* **Content Cards** – Text and image-based cards highlighting cultural themes
* **FAQ Section** – Frequently asked questions about Thai culture and tourism
* **Profile Cards** – Team member profiles with university information
* **Location Cards** – Interactive grid of famous Thai locations with detailed descriptions
* **Responsive Design** – Mobile-first approach using Tailwind CSS
* **Web Components** – Reusable custom HTML elements for maintainable UI
* **Modern Styling** – Gradients, shadows, and subtle animations using Tailwind utilities

---

## 📁 Project Structure

```
CulturalThailand/
├── docs/                  ← GitHub Pages entry point
│   ├── index.html
│   ├── about.html
│   ├── contactus.html
│   ├── ethnic.html
│   ├── famousLocations.html
│   └── locations/
│       ├── Ayutthaya.html
│       ├── ChiangMaiMuseum.html
│       ├── FloatingMarket.html
│       ├── GrandPalace.html
│       ├── SanctuaryofTruth.html
│       ├── SiThep.html
│       ├── Sukhothai.html
│       ├── WatArun.html
│       ├── WatPhra.html
│       └── WatRongKhun.html
├── src/                  ← development/source files
│   ├── css/
│   │   ├── input.css
│   │   └── output.css (compiled Tailwind)
│   ├── js/
│   │   ├── app.js
│   │   ├── components/
│   │   │   ├── ContentCard.js
│   │   │   ├── ContentCardWImage.js
│   │   │   ├── Footer.js
│   │   │   ├── Header.js
│   │   │   ├── HeroBanner.js
│   │   │   ├── InfoCard.js
│   │   │   ├── PlaceCard.js
│   │   │   ├── ProfileCard.js
│   │   │   ├── FAQ.js
│   │   │   └── mediaComponents.js
│   │   └── events/
│   │       └── FormSubmission/
├── assets/
│   └── [images and media files]
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used

* **HTML5** – Semantic markup & Web Components
* **CSS3 / Tailwind CSS** – Utility-first responsive styling
* **JavaScript (ES6+)** – Component logic & interactivity
* **Web Components API** – Reusable custom elements
* **Git & GitHub** – Version control & collaboration
* **Node.js / npm** – Package management & build tools

---

## 📦 Installation & Setup

### Prerequisites

* **Node.js** v14+
* **npm** (comes with Node.js)
* **Git**

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/hsetyiupaing/CulturalThailand.git
cd CulturalThailand
```

2. **Install dependencies**

```bash
npm install
```

3. **Build Tailwind CSS** (if needed)

```bash
npm run build:css
```

Or watch for changes during development:

```bash
npm run watch:css
```

4. **Start a local server** (optional)

* VS Code **Live Server** extension
* Python:

```bash
python -m http.server 8000
```

* Node.js:

```bash
npx http-server
```

5. **Open in browser**

Navigate to `http://localhost:8000` (or your server port)

---

## 💻 Usage

* Open `docs/index.html` in browser
* Navigate via the Header component
* Explore cultural locations, information, and team details
* Submit inquiries through the Contact Us form

### Development Workflow

* Edit HTML in `docs/`
* Update JS components in `src/js/components/`
* Adjust styles in `src/css/input.css` or via Tailwind classes
* Test responsiveness using browser DevTools

---

## 📄 Pages & Components

### Main Pages

| Page                     | Description                                                 |
| ------------------------ | ----------------------------------------------------------- |
| **index.html**           | Home page with hero banner, culture highlights, FAQ section |
| **about.html**           | Mission, Vision, Our Story, and team profiles               |
| **contactus.html**       | Contact form for inquiries                                  |
| **ethnic.html**          | Information about ethnic groups and cultural diversity      |
| **famousLocations.html** | Grid of 10 famous Thai locations                            |
| **locations/**           | Individual pages for each famous location                   |

### Key Web Components

* `<hero-banner>` – Hero image with overlay title
* `<contentcard-w-image>` – Text + image sections
* `<content-card>` – Simple text card
* `<profile-card>` – Team member card
* `<location-card>` – Location grid item
* `<faq-section>` – FAQ accordion
* `<header>` – Navigation header
* `<footer>` – Footer

### Example Usage

```html
<hero-banner title="Welcome to Cultural Thailand" image="../../assets/intropic.jpg"></hero-banner>

<contentcard-w-image
  image="../../assets/contentImage.png"
  title="Discover the Rich Culture of Thailand"
  body="Explore traditions, stunning architecture, and delicious cuisine..."
  addedStyle="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500"
></contentcard-w-image>

<profile-card
  name="Hset Yiu Paing"
  title="JS Developer"
  university="Asia-Pacific International University"
  image="../../assets/john.png">
</profile-card>

<location-card
  title="Ayutthaya"
  desc="The ancient capital of Thailand filled with historical temples and ruins."
  link="./locations/Ayutthaya.html">
</location-card>
```

---

## 👥 Team

* **Hset Yiu Paing** – JavaScript Developer
* **Daniel Tang** – Frontend Developer
* **Trust** – Researcher

---

## 📝 About the Project

* Preserves and celebrates Thai cultural heritage
* Supports local communities and artisans
* Provides accessible education about cultural traditions
* Promotes ethical and responsible cultural tourism

---

## 📜 License

This project is licensed under the **ISC License**. See `package.json` for details.

---

## 🔗 Links

* **GitHub Repository** – [hsetyiupaing/CulturalThailand](https://github.com/hsetyiupaing/CulturalThailand)
* **Web Link** - [CulturalThailadWeb]()
* **University** – Asia-Pacific International University

---

## 📧 Contact

For inquiries or contributions, visit the **Contact Us** page on the website or submit an issue on GitHub.

---

**Last Updated:** December 1, 2025

---

