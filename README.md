# React portfolio app

[![DevSkim](https://github.com/ervardaan/react-portfolio/actions/workflows/devskim.yml/badge.svg)](https://github.com/ervardaan/react-portfolio/actions/workflows/devskim.yml)
[![Deploy to S3 + CloudFront](https://github.com/ervardaan/react-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/ervardaan/react-portfolio/actions/workflows/deploy.yml)
[![CodeQL](https://github.com/ervardaan/react-portfolio/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/ervardaan/react-portfolio/actions/workflows/github-code-scanning/codeql)

A dynamic portfolio website built with **React**, **Vite** and **TailwindCSS**, showcasing my projects and experiences with interactive filtering by categories. Each project and experience card features logos, descriptions, technologies, and tags for easy navigation.

---

## Features

- **Project & Experience Cards**
  - Display detailed information including title, description, technologies, and logos.
  - Gradient backgrounds for visually appealing cards.
  - Circular logos displayed on each card.

- **Interactive Filtering**
  - Projects and experiences are automatically tagged with categories like:
    - Computer Science
    - Data Science
    - Statistics
  - Users can click on tags to filter projects dynamically.
  - Clear filter button to reset the selection.

- **Responsive Layout**
  - Grid layout adapts to mobile and desktop screens.
  - TailwindCSS ensures consistent spacing, typography, and responsive design.

- **Animated Components**
  - Smooth entry animations using **Framer Motion**.

- **Tech Stack**
  - **React**: Component-based UI
  - **TailwindCSS**: Styling and responsive design
  - **Framer Motion**: Animations
  - **JavaScript/TypeScript**: Logic and interactivity
  - **AWS S3** (optional): Hosting static assets (logos, images)
  
---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

2. Install dependencies:

```bash
npm install
```
3. Start the development server
```bash
npm run dev
```

Open http://localhost:5173  in your browser to view the app.

## File Structure:
```css
src/
├─ components/
│  ├─ ProjectCard.jsx
│  ├─ ExperienceCard.jsx
│  └─ Projects.jsx
├─ data/
│  └─ projects.js
├─ assets/
│  └─ logos/
└─ App.jsx
```
- ProjectCard.jsx – Card component for projects.
- ExperienceCard.jsx – Card component for experiences.
- Projects.jsx – Parent component handling project listing and filtering.
- projects.js – Project data including title, description, tech, tags, and logos.
- assets/logos/ – Logos for projects and experiences.

## License
This project is open-source and available under the MIT License.
