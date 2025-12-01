# Cultural Thailand

A comprehensive web application dedicated to showcasing Thailand's rich cultural heritage, famous locations, and traditions. Built as a collaborative project for **IT 362 Frontend Web Development** class at Asia-Pacific International University.

## 🌏 Overview

Cultural Thailand is an educational platform that connects people with Thailand's vibrant traditions, stunning architecture, sacred temples, and living cultural practices. Our mission is to preserve, celebrate, and promote Thai heritage through engaging storytelling, accessible digital experiences, and community-centered tourism.

---

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Pages & Components](#pages--components)
- [Team](#team)
- [License](#license)

---

## ✨ Features

- **Hero Banner Component** – Eye-catching landing section with background images and overlays
- **Content Cards** – Text and image-based cards showcasing cultural themes
- **FAQ Section** – Frequently asked questions about Thai culture and tourism
- **Profile Cards** – Team member profiles with university information
- **Location Cards** – Interactive grid of famous Thai locations with detailed descriptions
- **Responsive Design** – Mobile-first approach using Tailwind CSS for all screen sizes
- **Web Components** – Custom HTML elements for reusable, maintainable UI patterns
- **Rich Styling** – Modern gradients, shadows, and animations using Tailwind utilities

---

## 📁 Project Structure

```
CulturalThailand/
├── src/
│   ├── css/
│   │   ├── input.css
│   │   └── output.css (compiled Tailwind)
│   ├── js/
│   │   ├── app.js (component registration)
│   │   ├── components/
│   │   │   ├── ContentCard.js (simple text card)
│   │   │   ├── ContentCardWImage.js (text + image card)
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
│   └── pages/
│       ├── index.html (home)
│       ├── about.html (mission, vision, story, team)
│       ├── contactus.html
│       ├── ethnic.html
│       ├── famousLocations.html
│       └── locations/
│           ├── Ayutthaya.html
│           ├── ChiangMaiMuseum.html
│           ├── FloatingMarket.html
│           ├── GrandPalace.html
│           ├── SanctuaryofTruth.html
│           ├── SiThep.html
│           ├── Sukhothai.html
│           ├── WatArun.html
│           ├── WatPhra.html
│           └── WatRongKhun.html
├── assets/
│   ├── hello/
│   └── [images and media files]
├── package.json
├── README.md (this file)
└── tailwind.config.js (if present)
```

---

## 🛠️ Technologies Used

- **HTML5** – Semantic markup and Web Components (Custom Elements)
- **CSS3 / Tailwind CSS** – Utility-first responsive styling
- **JavaScript (ES6+)** – Component logic and interactivity
- **Web Components API** – Reusable custom HTML elements
- **Git** – Version control and collaborative development
- **Node.js / npm** – Package management and build tools

---

## 📦 Installation & Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **Git**

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
   Or watch for changes:
   ```bash
   npm run watch:css
   ```

4. **Start a local server** (optional, for testing)
   - Use VS Code's **Live Server** extension, or
   - Run a simple Python server:
     ```bash
     python -m http.server 8000
     ```
   - Or Node.js:
     ```bash
     npx http-server
     ```

5. **Open in browser**
   - Navigate to `http://localhost:8000` (or your server port)

---

## 💻 Usage

### Running the Project Locally

1. Open `src/pages/index.html` in your browser (or via a local server)
2. Navigate through the different pages using the Header component
3. Explore cultural information, locations, and team details
4. Submit forms on the Contact Us page

### Development Workflow

- **Edit HTML** in `src/pages/` or components in `src/js/components/`
- **Style changes** in `src/css/input.css` or adjust Tailwind classes in HTML
- **Add new components** following the Web Components pattern in existing files
- **Test responsiveness** using browser DevTools (Chrome, Firefox)

---

## 📄 Pages & Components

### Main Pages

| Page | Description |
|------|-------------|
| **index.html** | Home page with hero banner, culture highlights, and FAQ section |
| **about.html** | Mission, Vision, Our Story, and team member profiles |
| **contactus.html** | Contact form for inquiries |
| **ethnic.html** | Information about ethnic groups and cultural diversity |
| **famousLocations.html** | Grid of 10 famous Thai locations with links to detail pages |
| **locations/** | Individual pages for each famous location with in-depth information |

### Key Web Components

- `<hero-banner>` – Large image header with title overlay
- `<contentcard-w-image>` – Text and image side-by-side section
- `<content-card>` – Simple text card
- `<profile-card>` – Team member card with name, title, university
- `<location-card>` – Location grid item with title, description, link
- `<faq-section>` – Frequently asked questions accordion
- `<header>` – Navigation header (if implemented)
- `<footer>` – Footer with links and information (if implemented)

### Component Usage Example

```html
<!-- Hero Banner -->
<hero-banner 
  title="Welcome to Cultural Thailand" 
  image="../../assets/intropic.jpg">
</hero-banner>

<!-- Content Card with Image -->
<contentcard-w-image
  image="../../assets/contentImage.png"
  title="Discover the Rich Culture of Thailand"
  body="Explore the vibrant traditions, stunning architecture, and delicious cuisine..."
  addedStyle="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500"
></contentcard-w-image>

<!-- Profile Card -->
<profile-card
  name="Hset Yiu Paing"
  title="JS Developer"
  university="Asia-Pacific International University"
  image="../../assets/john.png">
</profile-card>

<!-- Location Card -->
<location-card 
  title="Ayutthaya"
  desc="The ancient capital of Thailand filled with historical temples and ruins."
  link="./locations/Ayutthaya.html">
</location-card>
```

---

## 👥 Team

The Cultural Thailand project was created by students from the **IT 362 Frontend Web Development** class at **Asia-Pacific International University**:

- **Hset Yiu Paing** – JavaScript Developer
- **Daniel Tang** – Frontend Developer
- **Trust** – Researcher

---

## 📝 About the Project

This project was developed as part of an academic course to combine practical web development skills with cultural research and storytelling. The team aims to create a sustainable platform that:

- Preserves and celebrates Thai cultural heritage
- Supports local communities and artisans
- Provides accessible education about cultural traditions
- Promotes ethical and responsible cultural tourism

---

## 📜 License

This project is licensed under the **ISC License**. See the `package.json` for details.

---

## 🔗 Links

- **GitHub Repository** – [hsetyiupaing/CulturalThailand](https://github.com/hsetyiupaing/CulturalThailand)
- **University** – Asia-Pacific International University

---

## 📧 Contact

For inquiries or contributions, please visit the **Contact Us** page on the website or submit an issue on GitHub.

---

**Last Updated:** December 1, 2025