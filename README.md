# Ciridae Terminal

Bloomberg-style intelligence terminal for PE fund AI transformation analysis.

147 funds · 5,426 portfolio companies · 27 verticals · Natural language queries powered by your own AI API key.

## How It Works

Users bring their own API key (Claude or ChatGPT). Keys are stored in the browser's localStorage and sent directly to the AI provider — **no backend, no server, no data collection.**

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push to GitHub
2. Import in [Vercel](https://vercel.com/new)
3. Deploy — no environment variables needed

That's it. No API keys on your end. Zero server cost.

## Features

- **BYOK (Bring Your Own Key)** — Supports Claude (Anthropic) and ChatGPT (OpenAI)
- **Onboarding modal** with step-by-step instructions for getting an API key
- **Fund Rankings** — Sortable data grid, click any fund for detail
- **AI Query Terminal** — Natural language questions against the full dataset
- **Strategy Map** — Durability vs Opportunity scatter with fund archetypes
- **Sector Map & Alpha Targets** — Sector scores + transformation targets
- **Window Management** — Close, minimize, maximize any panel
- **Clickable Ticker** — Scrolling fund scores, pauses on hover

## Architecture

- Next.js 14 (App Router) — static site, no API routes
- AI calls go directly from browser to Anthropic/OpenAI (BYOK)
- API keys stored in localStorage only — never touch any server
- Zero external UI libraries — pure React + inline styles
- Fonts: Share Tech Mono (data) + Roboto Condensed (UI labels)

## Cost to Users

~$0.01 per query. $5 of API credit = ~500+ queries.
