# ProfessionalPortfolio

## Living Workbench

The creative portfolio lives in `portfolio/`. It uses Next.js App Router, TypeScript, Tailwind CSS, and Motion. The homepage and case studies are prerendered. The Workbench simulation runs in the browser.

Use Node.js 22 LTS or newer. Run these commands from the repository root.

```sh
npm ci --prefix portfolio
npm run dev --prefix portfolio
```

Open [the local portfolio](http://localhost:3100). To build and run production locally:

```sh
npm run check --prefix portfolio
npm run build --prefix portfolio
npm run start --prefix portfolio
```

Case studies, professional experience, and contact links are maintained in `portfolio/lib/content.ts`. The portfolio reuses the existing résumé and images from `client/`.

## Original Vite portfolio

![Portfolio Preview](assets/portfolio-preview.png)

## 🚀 Overview

A modern, responsive portfolio website built with React, showcasing professional development work and academic achievements with enhanced internationalization and interactive design. This portfolio features a unique split-screen hero section, comprehensive skill visualization, and multilingual support.

## ✨ Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Multilingual Support**: Full internationalization with English, Persian (Farsi), and Arabic including RTL support
- **Interactive UI**: Engaging animations and transitions using Framer Motion
- **Split Hero Section**: Dynamic dual-focus landing section highlighting development and AI skills
- **Comprehensive Skill Visualization**: Visual representation of technical competencies with custom icons
- **Dark/Light Mode**: Full theming support with system preference detection
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Performance Optimized**: Fast loading with optimized assets and code splitting

## 🛠️ Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Context API
- **Animations**: Framer Motion
- **Internationalization**: i18next with language detection
- **Icons**: Lucide React and React Icons
- **Build Tool**: Vite
- **Backend**: Node.js with Express for API endpoints
- **Content Management**: Support for integration with content API/CMS

## 🌍 Supported Languages

- English
- Persian (Farsi)
- Arabic

## 📋 Sections

- **Hero**: Dynamic split-screen introduction with dual focus areas
- **About**: Personal background and professional summary
- **Skills**: Comprehensive visualization of technical competencies
- **Experience**: Professional work experience timeline
- **Education**: Academic background and achievements
- **Projects**: Showcase of development work with links and descriptions
- **Publications**: Academic research papers and contributions
- **Testimonials**: Client and colleague feedback
- **Contact**: Contact form and information

## 🖥️ Running Locally

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5000`

## 🌐 Deployment

This project can be easily deployed to any static hosting service or Node.js hosting platform:

- Vercel
- Netlify
- DigitalOcean
- Heroku
- AWS
- Replit

## 🔧 Customization

### Personal Information

Update your personal information in the `constants.ts` file:

```typescript
// Update with your information
export const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  location: "Your Location",
  // Other details
};
```

### Skills

Add or modify skills in the `skillsData` array:

```typescript
export const skillsData = [
  {
    name: "React",
    level: "Advanced",
    iconType: "React",
  },
  // Add more skills
];
```

### Experiences and Projects

Modify the `workExperiences` array to showcase your professional background:

```typescript
export const workExperiences = [
  {
    title: "Position Title",
    period: "Date Range",
    description: "Description of your role and achievements",
    technologies: ["Tech1", "Tech2"],
    imageUrl: "path/to/image",
    projectUrl: "https://project-url.com",
  },
  // Add more experiences
];
```

## 🌐 Internationalization

Add or modify translations in the `/public/locales/{language}/translation.json` files.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio-website/issues).

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Design inspiration from modern portfolio trends
- shadcn/ui for beautiful component primitives
- Tailwind CSS for utility-first styling
- React team for the awesome library
- i18next team for internationalization support
