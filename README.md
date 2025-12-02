# **Cultural Thailand**

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
├── src/
│   ├── docs/                       ← All HTML pages (moved from root/docs)
│   │   ├── index.html
│   │   ├── about.html
│   │   ├── contactus.html
│   │   ├── ethnic.html
│   │   ├── famousLocations.html
│   │   └── locations/
│   │       ├── Ayutthaya.html
│   │       ├── ChiangMaiMuseum.html
│   │       ├── FloatingMarket.html
│   │       ├── GrandPalace.html
│   │       ├── SanctuaryofTruth.html
│   │       ├── SiThep.html
│   │       ├── Sukhothai.html
│   │       ├── WatArun.html
│   │       ├── WatPhra.html
│   │       └── WatRongKhun.html
│
│   ├── css/
│   │   ├── input.css
│   │   └── output.css              ← Compiled Tailwind
│
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
│
├── assets/                         ← Images and media files
│
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used

* **HTML5** – Semantic markup & Web Components
* **CSS3 / Tailwind CSS** – Utility-first responsive styling
* **JavaScript (ES6+)** – Component logic & interactivity
* **Web Components API** – Custom reusable UI elements
* **Git & GitHub** – Version control
* **Node.js / npm** – Build tools & Tailwind CLI

---

## 📦 Installation & Setup

### Prerequisites

* **Node.js** v14+
* **npm** (comes with Node.js)
* **Git**

---

### Steps

#### 1. Clone the repository

```bash
git clone https://github.com/hsetyiupaing/CulturalThailand.git
cd CulturalThailand
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Build Tailwind CSS

```bash
npm run build:css
```

Or watch for changes:

```bash
npm run watch:css
```

#### 4. Start local development server

You can use:

**VS Code Live Server**, or:

```bash
python -m http.server 8000
```

or:

```bash
npx http-server
```

#### 5. Open in browser

```
http://localhost:8000/src/docs/index.html
```

---

## 💻 Usage

* Open `src/docs/index.html` in your browser
* Navigate using the custom `<header>` component
* Explore cultural content and location pages
* Use **Contact Us** form for inquiries

---

### Development Workflow

* Edit HTML pages inside **`src/docs/`**
* Edit JavaScript components inside **`src/js/components/`**
* Update CSS via Tailwind or `src/css/input.css`
* Test responsive behavior with DevTools

---

## 📄 Pages & Components

### Main Pages

| Page                     | Description                                    |
| ------------------------ | ---------------------------------------------- |
| **index.html**           | Homepage with hero banner, key highlights, FAQ |
| **about.html**           | Mission, vision, team profiles                 |
| **contactus.html**       | Contact form                                   |
| **ethnic.html**          | Information on Thai ethnic groups              |
| **famousLocations.html** | Grid gallery of famous locations               |
| **locations/**           | Individual location detail pages               |

---

### Key Web Components

* `<hero-banner>`
* `<contentcard-w-image>`
* `<content-card>`
* `<profile-card>`
* `<location-card>`
* `<faq-section>`
* `<header>`
* `<footer>`

---

### Example Usage

```html
<hero-banner title="Welcome to Cultural Thailand" image="../../../assets/intropic.jpg"></hero-banner>

<contentcard-w-image
  image="../../../assets/contentImage.png"
  title="Discover the Rich Culture of Thailand"
  body="Explore traditions, stunning architecture, and delicious cuisine..."
  addedStyle="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500"
></contentcard-w-image>

<profile-card
  name="Hset Yiu Paing"
  title="JS Developer"
  university="Asia-Pacific International University"
  image="../../../assets/john.png">
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

* Celebrates and preserves Thai culture
* Supports local communities and artisans
* Provides educational cultural content
* Promotes ethical tourism

---

## 📜 License

This project is licensed under the **ISC License**.
See `package.json` for complete information.

---

## 🔗 Links

* **GitHub Repository** – [https://github.com/hsetyiupaing/CulturalThailand](https://github.com/hsetyiupaing/CulturalThailand)
* **Web Link** – *(to be added once deployment is configured)*
* **University** – Asia-Pacific International University

---

## 📧 Contact

For inquiries or contributions, visit the **Contact Us** page or open an issue on GitHub.

---

**Last Updated:** December 1, 2025


