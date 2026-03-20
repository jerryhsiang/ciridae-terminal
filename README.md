# Ciridae Terminal

Bloomberg-style intelligence terminal for PE fund AI transformation analysis.

**[Live Demo](https://ciridae-terminal.vercel.app)**

147 funds · 5,426 portfolio companies · 3,170 company-level profiles · 27 verticals · Natural language queries powered by your own AI API key.

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
- **Fund Rankings** — Sortable data grid across 41 PE funds with AUM, AI Score, Durability, Opportunity, and returns
- **Portfolio Drilldown** — Click any fund to see its portfolio companies ranked by AI transformation scores (3,170 companies across 36 funds)
- **AI Query Terminal** — Natural language questions against the full dataset with preset commands (COMP, RANK, ALPHA, SECTOR, DEEP, CORR)
- **Strategy Map** — Durability vs Opportunity scatter plot with fund archetypes (Disruptor, Fortress, Balanced, Mid)
- **Sector Map & Alpha Targets** — Sector AI scores + highest opportunity-durability gap targets
- **Window Management** — Close, minimize, maximize any panel; restore from top bar
- **Clickable Ticker** — Scrolling fund scores, pauses on hover, click to drill in

## Architecture

- Next.js 14 (App Router) — static site, no API routes
- AI calls go directly from browser to Anthropic/OpenAI (BYOK)
- API keys stored in localStorage only — never touch any server
- 3,170 portfolio companies embedded as inline data — zero external data fetching
- Zero external UI libraries — pure React + inline styles
- Fonts: Share Tech Mono (data) + Roboto Condensed (UI labels)

## Cost to Users

~$0.01 per query. $5 of API credit = ~500+ queries.
