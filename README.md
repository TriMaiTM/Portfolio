# Mai Trí | Frontend Developer Portfolio

A modern, bilingual (Vietnamese/English) portfolio website built with React + Vite + TypeScript.

## Features

- ⚡ Lightning-fast Vite build
- 🌙 Dark / Light mode toggle
- 🌐 Bilingual (Vietnamese / English) toggle
- 📱 Fully responsive (mobile + desktop)
- 🎨 Modern UI with Tailwind CSS
- 🔗 3 project showcases: Erebus, TicketNFT, TTDN

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
git clone https://github.com/TriMaiTM/Portfolio.git
cd Portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **State**: React Context API
- **Deployment**: Vercel / GitHub Pages

## Project Structure

```
src/
├── contexts/
│   ├── ThemeContext.tsx      # Dark/Light mode
│   └── LanguageContext.tsx   # Bilingual support
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   ├── translations.ts       # All bilingual strings
│   └── projects.ts           # Project data
├── App.tsx
├── main.tsx
└── index.css
```

## License

MIT
