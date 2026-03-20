# CLAUDE.md — Ciridae Terminal

## Project Overview

Ciridae Terminal is a Bloomberg Terminal-style web application for analyzing PE (Private Equity) fund AI transformation data. It visualizes the Ciridae AI Transformation Opportunity Scan dataset covering 147 PE funds, 5,426 portfolio companies, and 27 industry verticals.

Users can explore fund rankings, sector heatmaps, strategy scatter plots, and alpha targets through a multi-panel tiled interface. A natural language AI query terminal lets users ask questions about the dataset in plain English, powered by their own Claude or ChatGPT API key (BYOK model).

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** JavaScript (no TypeScript)
- **Styling:** Inline styles only — no CSS modules, no Tailwind, no styled-components
- **UI Libraries:** None — pure React, zero dependencies beyond Next.js
- **Fonts:** Google Fonts loaded in `layout.js`
  - `Share Tech Mono` — monospaced, used for all data/numbers/tables
  - `Roboto Condensed` — proportional, used for UI labels/headers/buttons
- **AI Integration:** Direct browser-to-API calls (no backend proxy)
  - Anthropic Claude API (`api.anthropic.com/v1/messages`)
  - OpenAI ChatGPT API (`api.openai.com/v1/chat/completions`)
- **State:** React useState/useRef only — no state management library
- **Storage:** localStorage for API key persistence only
- **Deployment:** Vercel (static, no serverless functions needed)

## File Structure

```
ciridae-terminal/
├── app/
│   ├── Terminal.jsx     # Main terminal component (~750 lines, "use client")
│   ├── globals.css      # Minimal reset: scrollbars, selection, body
│   ├── layout.js        # Root layout: meta tags, OG tags, font imports
│   └── page.js          # Entry point, renders <Terminal />
├── public/
│   └── favicon.svg      # Amber diamond on black
├── .gitignore
├── next.config.js
├── package.json
└── README.md
```

## Architecture Decisions

### Why inline styles instead of CSS/Tailwind?
The entire UI is a dense Bloomberg Terminal clone with pixel-level control over padding, colors, and spacing. Inline styles give direct control without class name overhead. Every element has precise padding (0-3px), specific hex colors (#ff9900, #ffcc00, #00ff88, #ff4444), and conditional styling based on data values. CSS classes would add indirection without benefit here.

### Why no backend API route?
The app uses a BYOK (Bring Your Own Key) model. Users provide their own Anthropic or OpenAI API key, which is stored in localStorage and sent directly from the browser to the AI provider. This means:
- Zero server cost for us
- No API key management
- No rate limiting infrastructure needed
- Vercel deployment is purely static

### Why is the dataset embedded in the component?
The fund data (~41 funds), verticals (18), top companies (15), and alpha targets (10) are hardcoded as compressed JS arrays at the top of Terminal.jsx. The full dataset is also serialized into the AI system prompt so Claude/ChatGPT can reference specific numbers when answering queries. This keeps the app self-contained with no external data fetching.

### Window management approach
Each panel has a state object `{ visible, maximized, minimized }`. The grid layout dynamically adjusts columns/rows based on how many panels are active. Closed panels show a restore button in the top bar. Minimized panels show in a taskbar. Maximized panels take the full grid.

## Design System

### Color Palette (Bloomberg-inspired)
```
Background:     #000000 (pure black)
Panel bg:       #0a0a00 (warm black)
Borders:        #222, #333, #444 (grays)
Primary accent: #ff9900 (amber/orange — Bloomberg signature)
Secondary:      #ffcc00 (gold — highlights, selected items)
Positive:       #00ff88 (green — positive returns, good scores)
Negative:       #ff4444 (red — negative returns, warnings)
Durability:     #4488ff (blue)
Opportunity:    #aa88ff (purple)
Muted text:     #888, #666, #555 (grays for labels)
Data text:      #cccc88 (warm gray — default body text)
```

### Typography Scale
```
Data grid body:    11px, Share Tech Mono
Column headers:    9px, Roboto Condensed, uppercase, letter-spacing 0.3-0.5
Section labels:    9px, Roboto Condensed, #ff9900, uppercase, letter-spacing 0.5-1
Large numbers:     16px, Share Tech Mono (fund detail "price" display)
Ticker:            10px, Share Tech Mono
Window title bars: 9px, Roboto Condensed, bold
Status bar:        9px, Roboto Condensed
Input field:       11px, Share Tech Mono, #ffcc00
```

### Spacing Rules
- Table cell padding: `0 3px` (extremely tight, Bloomberg-accurate)
- Row height: 15-16px
- Window title bars: 16px height
- Input bar: 22px height
- Status bar: 14px height
- Ticker: 16px height
- Gap between panels: 1px (dark gray separator)

### Visual Effects
- CRT scanline overlay: `repeating-linear-gradient` with 2px period, very subtle
- Ticker pauses on hover via CSS `animation-play-state: paused`
- Row hover highlights with inline onMouseEnter/onMouseLeave
- Scrollbars styled to 4px width, amber on hover

## Key Components Inside Terminal.jsx

### Data Constants (top of file)
- `F` — Fund array, 41 objects with: n(name), a(AUM), c(companies), d(durability), o(opportunity), s(score), mn(min), mx(max), r(6m return), rc(CW return), h(HQ)
- `V` — Verticals array, 18 objects with: v(name), n(count), ai(score), du(durability), op(opportunity)
- `TC` — Top Companies, 15 objects with: n(name), f(fund), s(score), d(dur), o(opp), r(return)
- `AL` — Alpha Targets, 10 objects with: n(name), f(fund), g(gap), o(opp), d(dur)
- `SYS` — System prompt string with all data serialized, instructs AI to be terse/table-heavy
- `CMDS` — Preset command buttons: COMP, RANK, ALPHA, SECTOR, DEEP, CORR

### Md({ text }) — Markdown Renderer
Parses AI response markdown into styled JSX. Handles:
- Tables (pipe-delimited) → styled `<table>` with amber headers
- Bold (**text**) → white `<strong>`
- Headers (##, ###) → amber/gold styled divs
- Bullet points → ▸ prefix
- BOTTOM LINE → amber highlight bar

### SetupModal — BYOK Onboarding
- Provider toggle: Anthropic / OpenAI
- Step-by-step instructions with links
- Password input with show/hide toggle
- Key validation (min 10 chars)
- Security disclosure
- Cost estimate
- CONNECT / DISCONNECT buttons
- Closeable only if a key already exists

### WinBar — Window Title Bar
- Title, accent color
- Three control buttons: minimize (—), maximize (□/⊟), close (×)
- Each calls togglePanel(id, action)

### Main App State
```
query         — current input text
msgs          — conversation history [{role, text}]
loading       — API call in progress
selFund       — selected fund name (opens detail view)
gridSort      — current sort column key
gridDir       — sort direction (1 or -1)
time          — live clock
showSetup     — setup modal visibility
provider      — "anthropic" | "openai"
apiKey        — user's API key string
panels        — {grid, query, scatter, sectors} each with {visible, maximized, minimized}
```

### run(text) — Query Execution
1. Validates input and API key presence
2. Appends user message to msgs
3. Builds conversation history array
4. Branches on provider:
   - Anthropic: POST to /v1/messages with x-api-key header + anthropic-dangerous-direct-browser-access
   - OpenAI: POST to /v1/chat/completions with Authorization Bearer header
5. Parses response, appends assistant message
6. Handles errors (401 → suggests key update)

## Common Tasks

### Adding a new preset command
Add an entry to the `CMDS` array near line 15:
```js
{k:"TAG", q:"Your natural language query here."},
```
The button appears automatically in the top bar and the query terminal's command grid.

### Adding a new panel
1. Add to the `panels` initial state object
2. Add a corresponding entry in `PANEL_DEFS` with title, color, and render function
3. The grid layout auto-adjusts

### Updating the dataset
Replace the `F`, `V`, `TC`, `AL` arrays at the top of Terminal.jsx. Also update the `SYS` string which serializes these into the AI context. Make sure the `SYS` prompt accurately describes the updated data ranges and means.

### Changing the AI model
In the `run()` function:
- Anthropic model: search for `claude-sonnet-4-20250514`
- OpenAI model: search for `gpt-4o`

### Adding a new AI provider
In `run()`, add a new `else if (provider === "newprovider")` branch with the appropriate fetch call. Add a tab in `SetupModal` for the new provider with setup instructions.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build
npm run start        # Serve production build
```

## Deployment

Push to GitHub, import in Vercel, deploy. No environment variables needed.
The app is fully static — no serverless functions, no database, no secrets on the server.

## Known Limitations

- Dataset is hardcoded (41 of 147 funds, summarized verticals/companies)
- In-memory conversation (refreshing the page clears chat history)
- No streaming responses (waits for full AI response)
- Browser-side API calls require CORS headers from providers (Anthropic requires `anthropic-dangerous-direct-browser-access` header)
- localStorage is per-domain, per-browser (key doesn't sync across devices)

## Future Improvements to Consider

- Stream AI responses token-by-token for faster perceived performance
- Load the full 5,426 company dataset from a JSON file or API
- Add a search/filter to the fund grid
- Drag-to-reorder panels
- Export AI analysis as PDF
- Add more providers (Gemini, Mistral, local Ollama)
- Persist conversation history in localStorage
- Add keyboard shortcuts (Ctrl+1-4 to focus panels, Esc to close modals)
