## Inspiration

During Pakistan's devastating 2022 floods — which displaced over **33 million people** — we witnessed firsthand how communities struggled with a critical gap: access to verified, timely emergency information.

People were sharing unverified WhatsApp forwards, couldn't locate nearby shelters, and had no centralized way to find emergency contacts during the chaos.

We asked ourselves: _What if there was a single platform that aggregated verified emergency data, made it searchable through AI, and presented it in a way anyone could use — even under stress?_

That question became **Ctrl+Aid**.

## What it does

Ctrl+Aid is an **AI-powered emergency information platform** designed for Pakistani communities facing natural disasters. It provides four core capabilities:

- 🔴 **Live Emergency Updates** — A real-time feed of verified alerts from official sources (NDMA, PDMA, PMD, Rescue 1122), categorized by type and severity
- 🗺️ **Shelter & Resource Map** — An interactive map showing nearby shelters, hospitals, and relief camps with addresses, phone numbers, capacity, and real-time status
- 📞 **Emergency Contacts** — A searchable directory of critical helplines (Rescue 1122, Edhi 115, Police, Fire, PDMA hotlines) with one-tap calling
- 🤖 **AI Emergency Assistant** — A conversational AI powered by Google Gemini that provides personalized emergency guidance, shelter directions, safety checklists, and evacuation advice based on verified data

## How we built it

We prioritized **functional polish over feature breadth** — building fewer features but making each one feel production-ready.

**Tech Stack:**

- **Next.js 16** (App Router) — Full-stack React framework with server-side streaming
- **TypeScript** — Type-safe development across the entire codebase
- **Tailwind CSS v4** — Premium dark-themed design system with custom glassmorphism effects
- **Framer Motion** — Smooth micro-animations and page transitions
- **React-Leaflet** with CartoDB Dark Matter tiles — Interactive dark-themed shelter map
- **Google Gemini 2.0 Flash** via Vercel AI SDK — Streaming AI emergency assistant
- **Lucide React** — Consistent iconography throughout

**Data Strategy:**

We compiled real emergency data from NDMA, PDMA, Rescue 1122, and other verified Pakistani sources to create realistic datasets covering shelters, contacts, and alerts for Islamabad, Rawalpindi, Lahore, and Karachi.

## Challenges we ran into

- **AI SDK v5 Breaking Changes** — The Vercel AI SDK recently shipped v5 with a completely new transport-based architecture. Messages now use a `parts` format instead of `content`. We had to adapt our entire chat pipeline using `convertToModelMessages()` to bridge client-side UIMessages to server-side ModelMessages.

- **SSR vs Client Components** — Leaflet maps and AI chat hooks cannot render on the server. We carefully split components using `"use client"` directives and `next/dynamic` imports with SSR disabled.

- **Designing for Crisis UX** — Emergency platforms cannot afford to be confusing. Every design decision — color-coded severity badges, prominent phone numbers, minimal navigation — was made with the assumption that users are stressed, possibly injured, and on low-bandwidth connections.

## Accomplishments that we're proud of

- A fully streaming AI assistant that knows real Pakistani emergency data
- An interactive dark-themed map with 12+ real shelter and hospital locations
- A design system that feels premium and production-ready, not like a hackathon prototype
- Zero TypeScript errors across the entire codebase
- The platform works offline (except AI chat) — alerts, contacts, and map data are all embedded

## What we learned

- Modern AI SDK integration patterns (transport architecture, UIMessage vs ModelMessage conversion)
- Crisis-oriented UX design principles — simplicity, high contrast, large tap targets
- The real state of Pakistan's emergency infrastructure and how fragmented information access truly is

## What's next for Ctrl+Aid

- Real-time data integration with NDMA/PDMA APIs and Pakistan Meteorological Department feeds
- Multi-language support (Urdu, Sindhi, Pashto) for broader accessibility
- Offline-first PWA with cached shelter data and emergency guides
- SMS fallback for users without internet access
- Community disaster reporting with AI-powered verification before publishing
