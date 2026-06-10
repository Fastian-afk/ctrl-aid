<div align="center">

# 🛡️ Ctrl+Aid

### AI-Powered Emergency Information Platform for Pakistan

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-2.0_Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**Bridging the gap between communities and critical emergency information during natural disasters.**

[Live Demo](https://ctrl-aid.vercel.app) · [Report Bug](https://github.com/Fastian-afk/ctrl-aid/issues) · [Request Feature](https://github.com/Fastian-afk/ctrl-aid/issues)

---

*Built for the **AI for Civic Innovation Hackathon 2026** — Code for Pakistan*

</div>

---

## 📋 Table of Contents

- [The Problem](#-the-problem)
- [Our Solution](#-our-solution)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Team](#-team)
- [License](#-license)

---

## 🔴 The Problem

During Pakistan's 2022 floods — the deadliest in over a decade — **33 million people** were displaced. Communities faced:

| Challenge | Impact |
|---|---|
| **Fragmented information** | No single source of verified emergency alerts |
| **Inaccessible shelter data** | People couldn't locate nearby shelters or hospitals |
| **Scattered emergency contacts** | Critical helplines buried across different websites |
| **No AI-assisted guidance** | No way to ask questions and get personalized safety advice |

> *"During emergencies, access to the right information at the right time saves lives."*

---

## 💡 Our Solution

**Ctrl+Aid** is a centralized, AI-powered platform that aggregates verified emergency information and makes it instantly accessible through four integrated modules:

```
┌─────────────────────────────────────────────────────────┐
│                      CTRL+AID                           │
├──────────────┬──────────────┬─────────────┬─────────────┤
│  📡 Live     │  🗺️ Shelter  │  📞 Emergency│  🤖 AI     │
│  Emergency   │  & Resource  │  Contacts   │  Emergency  │
│  Updates     │  Map         │  Directory  │  Assistant  │
├──────────────┴──────────────┴─────────────┴─────────────┤
│              Verified Data Sources                       │
│         NDMA · PDMA · PMD · Rescue 1122                 │
└─────────────────────────────────────────────────────────┘
```

---

## ✨ Key Features

### 📡 Live Emergency Updates
Real-time feed of verified emergency alerts with category filtering, severity indicators, and source attribution.
- Filter by: Floods, Rain, Evacuation, Shelters, Roads, Relief
- Color-coded severity: 🔴 Critical · 🟠 High · 🟡 Medium · 🟢 Low
- Sources: NDMA, PDMA, PMD, Rescue 1122, NHA

### 🗺️ Shelter & Resource Map
Interactive dark-themed map powered by Leaflet with real Pakistani locations.
- **12+ locations** across Islamabad, Rawalpindi, Lahore, and Karachi
- Color-coded markers: 🔵 Shelters · 🔴 Hospitals · 🟢 Relief Camps
- Click for details: address, phone, capacity, operational status

### 📞 Emergency Contacts
Searchable directory of critical Pakistani emergency helplines with one-tap calling.
- **Rescue 1122** — Emergency rescue (Punjab & KPK)
- **Edhi Foundation (115)** — Ambulance nationwide
- **Police (15)** · **Fire Brigade (16)** · **NDMA (051-9205037)**
- Category filters: Rescue, National, Provincial, Medical, Police, Fire

### 🤖 AI Emergency Assistant
Conversational AI powered by **Google Gemini 2.0 Flash** with streaming responses.
- Trained with verified shelter data, emergency contacts, and safety protocols
- Quick-action prompts for common emergency queries
- Provides personalized evacuation guidance and preparedness checklists

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 16 (App Router) | Full-stack React with SSR & streaming |
| **Language** | TypeScript | Type-safe development |
| **Styling** | Tailwind CSS v4 | Utility-first dark theme design system |
| **Animations** | Framer Motion | Smooth micro-interactions & transitions |
| **AI** | Google Gemini 2.0 Flash | Streaming emergency assistant |
| **AI SDK** | Vercel AI SDK v5 | Chat transport & message streaming |
| **Maps** | React-Leaflet + CartoDB | Interactive dark-themed mapping |
| **Icons** | Lucide React | Consistent iconography |
| **Deployment** | Vercel | Edge-optimized hosting |

---

## 🏗️ Architecture

```
ctrl-aid/
├── src/
│   ├── app/
│   │   ├── api/chat/          # Gemini AI streaming endpoint
│   │   │   └── route.ts       # POST handler with convertToModelMessages
│   │   ├── dashboard/         # Emergency dashboard page
│   │   │   └── page.tsx       # Tab-based dashboard shell
│   │   ├── globals.css        # Design system (tokens, animations, glassmorphism)
│   │   ├── layout.tsx         # Root layout with Inter font & metadata
│   │   └── page.tsx           # Landing page
│   │
│   ├── components/
│   │   ├── dashboard/         # Dashboard feature modules
│   │   │   ├── AiAssistant.tsx      # Streaming chat with Gemini
│   │   │   ├── AlertsFeed.tsx       # Categorized emergency alerts
│   │   │   ├── EmergencyContacts.tsx # Searchable contact directory
│   │   │   ├── ShelterMap.tsx       # Interactive Leaflet map
│   │   │   └── Sidebar.tsx          # Collapsible navigation
│   │   ├── landing/           # Landing page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── ImpactMetrics.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/                # Reusable UI primitives
│   │       ├── AnimatedCounter.tsx
│   │       ├── Badge.tsx
│   │       ├── GlowCard.tsx
│   │       └── StatusPulse.tsx
│   │
│   └── data/                  # Verified emergency datasets
│       ├── alerts.ts          # 15 realistic emergency alerts
│       ├── shelters.ts        # 12 shelter/hospital locations
│       └── contacts.ts        # 10 emergency helplines
│
├── .env.local                 # API keys (not committed)
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**
- **Google Gemini API Key** ([Get one free](https://aistudio.google.com/apikey))

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Fastian-afk/ctrl-aid.git
cd ctrl-aid

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and add your Gemini API key:
# GOOGLE_GENERATIVE_AI_API_KEY=your_key_here

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GOOGLE_GENERATIVE_AI_API_KEY` | Yes (for AI chat) | Google Gemini API key from [AI Studio](https://aistudio.google.com/apikey) |

> **Note:** Everything except the AI Assistant works without an API key. The landing page, alerts feed, shelter map, and emergency contacts are fully functional immediately.

---

## 📸 Screenshots

<div align="center">

### Landing Page
*Premium dark-themed hero with animated gradient mesh and floating orbs*

### Emergency Dashboard — Live Updates
*Real-time categorized alerts with severity indicators and source attribution*

### Shelter & Resource Map
*Interactive Leaflet map with color-coded markers for shelters, hospitals, and relief camps*

### Emergency Contacts
*Searchable directory with one-tap calling and category filtering*

### AI Emergency Assistant
*Streaming chat interface powered by Google Gemini with quick-action prompts*

</div>

---

## 🗺️ Roadmap

- [x] Landing page with premium dark theme
- [x] Live emergency updates feed with category filtering
- [x] Interactive shelter & resource map
- [x] Emergency contacts directory with search
- [x] AI assistant with Gemini streaming
- [ ] Real-time NDMA/PDMA API integration
- [ ] Multi-language support (Urdu, Sindhi, Pashto)
- [ ] Offline-first PWA with cached data
- [ ] SMS fallback for low-connectivity areas
- [ ] Community disaster reporting with AI verification

---

## 👥 Team

Built with ❤️ for the **AI for Civic Innovation Hackathon 2026** by Code for Pakistan.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**⭐ If this project helped you, consider giving it a star!**

*Ctrl+Aid — Because access to information saves lives.*

</div>
