# myPortfolio

This repository powers [alavyapandey.com](https://www.alavyapandey.com/) – a modern, responsive personal portfolio website built with Next.js 14 and TypeScript. Features smooth animations, contact forms, and optimized performance for showcasing projects and professional information.

[Live Demo](https://www.alavyapandey.com/)

## ✨ Features

- **Next.js 14 App Router** with Server Components and React Server Actions
- **TypeScript** for type safety and developer experience
- **Tailwind CSS** for utility-first styling and responsive design
- **Custom Components** organized in `/components` directory
- **Context API** for state management (`/context`)
- **Email Integration** via `/email` utilities for contact forms
- **ESLint + Prettier** for consistent code quality
- **GitHub Actions** workflows in `/actions` for CI/CD

## 🛠 Tech Stack

| Category      | Technologies                  |
| ------------- | ----------------------------- |
| **Framework** | Next.js 14 (App Router)       |
| **Language**  | TypeScript, JavaScript (ES6+) |
| **Styling**   | Tailwind CSS, PostCSS         |
| **Build**     | next.config.mjs, Vercel-ready |
| **Linting**   | ESLint, .eslintrc.json        |
| **State**     | React Context API             |

## 📁 Project Structure

myPortfolio/
├── app/ # Next.js 14 App Router pages
├── components/ # Reusable React components
├── context/ # React Context providers
├── lib/ # Utility functions and helpers
├── email/ # Email form handling
├── public/ # Static assets
├── actions/ # GitHub Actions workflows
├── package.json # Dependencies and scripts
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs

## 🚀 Quick Start

1. **Clone the repository**
   git clone https://github.com/alavyap/myPortfolio.git
   cd myPortfolio

text

2. **Install dependencies**
   npm install

text

3. **Run development server**
   npm run dev

text
Open [http://localhost:3000](http://localhost:3000) to view.

4. **Build for production**
   npm run build
   npm start

text

## 🔧 Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## 🚀 Deployment

- **Vercel** (Recommended): Connect GitHub repo for automatic deployments
- **Netlify**: Drag & drop `dist` folder or use CLI
- **Other**: Any Node.js hosting with `npm run build && npm start`
