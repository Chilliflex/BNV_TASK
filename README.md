# 🚀 Vite + React + TypeScript Landing Page

A modern, responsive **marketing landing page** built with **Vite**, **React**, and **TypeScript**, styled using **Tailwind CSS** and **shadcn/ui**, and enhanced with smooth animations via **Framer Motion** and icons from **Lucide React**.

This project showcases a clean, scalable frontend architecture with reusable components, modern UI patterns, and performance-focused tooling.

---

## ✨ Features

* ⚡ **Vite** for lightning-fast development and builds
* ⚛️ **React + TypeScript** for type-safe UI development
* 🎨 **Tailwind CSS** for utility-first styling
* 🧩 **shadcn/ui** for accessible, customizable UI components
* 🎞️ **Framer Motion** for smooth animations and transitions
* 🧭 **React Router** for routing and navigation
* 🎯 **Lucide React** for modern SVG icons
* 📱 Fully **responsive** design (mobile → desktop)
* 🧱 Modular and reusable component structure

---

## 📂 Project Structure

```txt
src/
├── components/
│   ├── landing/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── PartnerLogos.tsx
│   │   ├── Services.tsx
│   │   ├── ProcessAccordion.tsx
│   │   ├── Testimonials.tsx
│   │   └── Footer.tsx
│   ├── logo-carousel.tsx
│   └── ui/                # shadcn/ui components
│
├── screens/
│   └── LandingPage.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🧩 Key Sections

### 🧭 Navbar

* Responsive navigation bar
* Mobile menu using **shadcn Sheet**
* Smooth anchor-based navigation

### 🎯 Hero Section

* Bold headline and supporting text
* Call-to-action button
* Custom SVG illustration

### 🤝 Partner Logos

* Auto-playing animated logo carousel
* Fully configurable and reusable

### 🛠️ Services

* Card-based layout
* Custom SVG illustrations per service
* Tailwind-based color theming

### 🔄 Process Accordion

* Interactive accordion with expand/collapse
* Animated icons using Lucide
* Clear step-by-step workflow presentation

### 💬 Testimonials

* Carousel-based testimonials
* Custom speech-bubble UI
* Smooth scrolling and navigation controls

### 👣 Footer

* Newsletter input
* Navigation links
* Branding and dark theme styling

---

## 🛠️ Tech Stack

| Technology    | Purpose       |
| ------------- | ------------- |
| Vite          | Build tool    |
| React         | UI library    |
| TypeScript    | Type safety   |
| Tailwind CSS  | Styling       |
| shadcn/ui     | UI components |
| Framer Motion | Animations    |
| React Router  | Routing       |
| Lucide React  | Icons         |

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Sidd616/BNV-Front-end.git
cd BNV-Front-end
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Open your browser at:

```
http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🎨 Styling Guide

* Tailwind utility classes are used throughout
* Global styles live in `index.css`
* Component-specific styles are inline via Tailwind
* Colors follow a **brand-first** approach (e.g. `#B9FF66`, `#191A23`)

---

## ♻️ Reusability & Customization

* Components are **fully reusable** and configurable
* Logo carousel supports dynamic logo lists
* Accordion and carousel logic is generic
* Easy to extend into multi-page apps

---

## 📌 Best Practices Followed

* Clean component separation
* Type-safe props and hooks
* Accessible UI patterns
* Mobile-first responsive design
* Scalable folder structure

