# Professional Dashboard

A modern, responsive dashboard built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean UI with dark mode support and interactive widgets.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- 🎨 Modern UI with Tailwind CSS
- 🌙 Dark mode support with system preference detection
- 📊 Responsive dashboard with KPI cards
- 📱 Mobile-friendly design
- ⚡ Built with Next.js 14 App Router
- 🔧 TypeScript for type safety
- 🎯 shadcn/ui components

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes

## Project Structure

```
professional-dashboard/
├── app/
│   ├── api/ping/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── theme-toggle.tsx
│   └── ui/
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   ├── providers.tsx
│   └── utils.ts
├── public/
├── .gitignore
├── README.md
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)