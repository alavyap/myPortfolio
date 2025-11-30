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

<pre>
myPortfolio/
├── app/                    # Next.js 14 App Router pages
├── components/             # Reusable React components
├── context/                # React Context providers
├── lib/                    # Utility functions and helpers
├── email/                  # Email form handling
├── public/                 # Static assets
├── actions/                # GitHub Actions workflows
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.mjs         # Next.js configuration
</pre>

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/alavyap/myPortfolio.git
cd myPortfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

### 4. Build for production

```bash
npm run build
npm start
```

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

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/alavyap/myPortfolio/issues).

## 👤 Author

**Alavya Pandey**

- Website: [alavyapandey.com](https://www.alavyapandey.com/)
- GitHub: [@alavyap](https://github.com/alavyap)

---

<div align="center">

⭐️ If you found this project helpful, please consider giving it a star!

### 🍽️ Feel free to fork this repository and make it your own!

**Made with ❤️ by Alavya Pandey**

</div>
