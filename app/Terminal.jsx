"use client";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";

const F=[{n:"EQT",a:246,c:348,d:63.9,o:51.7,s:55.8,mn:30,mx:76.2,r:-5.4,rc:-9.1,h:"Stockholm"},{n:"TPG",a:303,c:163,d:63.8,o:51,s:55.5,mn:36.1,mx:71.2,r:-8.7,rc:-9.4,h:"Fort Worth"},{n:"Advent Intl",a:94,c:154,d:64.2,o:50.9,s:55.7,mn:41,mx:80.8,r:-7.5,rc:-9,h:"Boston"},{n:"CVC Capital",a:186,c:154,d:66.3,o:51.4,s:56.7,mn:43.6,mx:77.7,r:-7.2,rc:-8.3,h:"Luxembourg"},{n:"KKR",a:229,c:144,d:62.8,o:51.7,s:55.4,mn:41.4,mx:74.4,r:-10,rc:-10.4,h:"New York"},{n:"TA Associates",a:65,c:139,d:60.6,o:57.8,s:58.3,mn:42.6,mx:72.1,r:-18.3,rc:-15.5,h:"Boston"},{n:"Blackstone",a:1300,c:113,d:63.7,o:50.9,s:55,mn:40.2,mx:75.2,r:-5.8,rc:-8.8,h:"New York"},{n:"Bain Capital",a:215,c:106,d:68.1,o:49.8,s:56.7,mn:41.7,mx:73,r:-3.9,rc:-9.3,h:"Boston"},{n:"General Atl",a:71,c:103,d:55.7,o:55.9,s:54.9,mn:36.1,mx:72,r:-16.5,rc:-15.2,h:""},{n:"Waterland PE",a:5,c:101,d:60.1,o:46.9,s:50.6,mn:36.7,mx:65.5,r:-4.1,rc:-8.4,h:"Bussum"},{n:"BC Partners",a:40,c:99,d:66.3,o:46.6,s:54.1,mn:41,mx:69.7,r:-4.4,rc:-5.9,h:"London"},{n:"Vista Equity",a:100,c:99,d:56.9,o:58.6,s:57.3,mn:41.4,mx:72.1,r:-25.2,rc:-18.4,h:""},{n:"GIC",a:770,c:98,d:64.6,o:50.1,s:55.4,mn:33.5,mx:75.8,r:-2.5,rc:-5.8,h:"Singapore"},{n:"Carlyle Group",a:477,c:97,d:69.7,o:49.4,s:57.1,mn:42,mx:76.2,r:0.5,rc:-4.8,h:"Washington"},{n:"H.I.G.",a:74,c:91,d:62.6,o:47,s:51.9,mn:39.2,mx:68,r:-3.7,rc:-7,h:"Miami"},{n:"ICG",a:127,c:84,d:67.6,o:48.2,s:55.4,mn:35.7,mx:73.5,r:0.1,rc:-5.4,h:"London"},{n:"New Mountain",a:60,c:80,d:59.4,o:57.4,s:57.1,mn:40.2,mx:69,r:-7.9,rc:-9.3,h:"New York"},{n:"Permira",a:88,c:80,d:55.2,o:57.2,s:54.9,mn:41,mx:74.8,r:-15.4,rc:-14.2,h:"London"},{n:"Bridgepoint",a:86,c:79,d:55.7,o:54.4,s:53.2,mn:37.4,mx:71.6,r:-11.5,rc:-11.8,h:"London"},{n:"Francisco P",a:45,c:77,d:52.2,o:57.7,s:54.4,mn:36.3,mx:69.4,r:-25.8,rc:-17.3,h:"San Francisco"},{n:"Eurazeo",a:36.1,c:76,d:57.8,o:55.2,s:55.4,mn:38.3,mx:74.2,r:-15.8,rc:-15.3,h:"Paris"},{n:"Apax",a:77,c:75,d:60.1,o:53.1,s:54.8,mn:40.2,mx:71.6,r:-13.9,rc:-12.9,h:"London"},{n:"Vitruvian",a:16,c:74,d:53.9,o:58.1,s:55.3,mn:40.2,mx:76.2,r:-19.6,rc:-18.1,h:"London"},{n:"Silver Lake",a:104,c:72,d:57.7,o:56.5,s:56,mn:37.4,mx:71.6,r:-19.3,rc:-14.9,h:"Menlo Park"},{n:"Thoma Bravo",a:181,c:61,d:60.5,o:60.3,s:60.1,mn:40.2,mx:72,r:-24.4,rc:-18.2,h:"Chicago"},{n:"HgCapital",a:100,c:58,d:59.6,o:62.2,s:60.5,mn:48,mx:73.5,r:-27.1,rc:-20.4,h:"London"},{n:"Stone Point",a:70,c:58,d:54.3,o:64.8,s:59,mn:43.5,mx:70.3,r:-20,rc:-17.5,h:"Greenwich"},{n:"Genstar",a:50,c:47,d:60.2,o:58.5,s:58.6,mn:42.4,mx:72.5,r:-15.3,rc:-13.6,h:"San Francisco"},{n:"Hellman & F",a:108,c:29,d:61.5,o:58.9,s:59.2,mn:44.7,mx:75.8,r:-20.9,rc:-15.3,h:"San Francisco"},{n:"Veritas Cap",a:50,c:17,d:66.6,o:59.3,s:61.8,mn:50.3,mx:71.2,r:-12,rc:-10.7,h:"New York"},{n:"Enlightenm",a:1.8,c:13,d:74,o:57.7,s:64.4,mn:42.4,mx:76.2,r:-4.9,rc:-10.9,h:"Chevy Chase"},{n:"AE Industrl",a:8,c:19,d:79.4,o:45.8,s:59.5,mn:46.9,mx:76.2,r:17,rc:-2.6,h:"Boca Raton"},{n:"Reverence",a:12.4,c:13,d:56.3,o:65.6,s:60.4,mn:52,mx:73,r:-13.8,rc:-15.2,h:"New York"},{n:"Clearlake",a:90,c:44,d:61.7,o:53.1,s:56.1,mn:40.2,mx:74.8,r:-18.7,rc:-14.3,h:"Santa Monica"},{n:"Warburg P",a:85,c:40,d:66.3,o:53.4,s:58,mn:35.1,mx:72.1,r:-12.6,rc:-10.8,h:"New York"},{n:"Cinven",a:44,c:45,d:61.8,o:54.7,s:57,mn:42.4,mx:72,r:-9.5,rc:-11.2,h:"London"},{n:"Oaktree",a:218,c:46,d:70.3,o:41.5,s:52.8,mn:40,mx:66.3,r:1,rc:-5.1,h:"Los Angeles"},{n:"Platinum Eq",a:50,c:58,d:66.7,o:40.7,s:50.8,mn:41,mx:59.7,r:-2.6,rc:-5.6,h:"Los Angeles"},{n:"Ardian",a:180,c:47,d:60.6,o:49.4,s:52.4,mn:40.2,mx:67,r:-7.3,rc:-10,h:"Paris"},{n:"GTCR",a:27,c:51,d:62,o:52.9,s:55.7,mn:42.5,mx:66.9,r:-12.2,rc:-11.4,h:"Chicago"},{n:"CD&R",a:57,c:43,d:65.4,o:46.9,s:53.9,mn:43.6,mx:69,r:-4,rc:-6.7,h:"New York"}];
const V=[{v:"Govt & Public",n:61,ai:63.7,du:68.4,op:60.1},{v:"Aero & Defense",n:115,ai:60.6,du:80.3,op:46.8},{v:"Insurance",n:151,ai:60.6,du:56.3,op:66},{v:"Healthcare",n:982,ai:59.8,du:69.5,op:53.5},{v:"Cybersecurity",n:107,ai:59.4,du:56.9,op:62.8},{v:"Financial Svc",n:529,ai:57.4,du:54.4,op:61.5},{v:"Energy",n:221,ai:55.9,du:76.2,op:42.6},{v:"Legal",n:56,ai:54.9,du:49,op:62.9},{v:"Manufacturing",n:394,ai:53.1,du:73.2,op:39.7},{v:"Technology",n:356,ai:50.2,du:47.8,op:55.1},{v:"Media & Ent",n:261,ai:50.1,du:47.4,op:56.3},{v:"Biz Services",n:197,ai:51.6,du:49.9,op:56.6},{v:"HR & Workfrc",n:107,ai:51.3,du:44.8,op:59.8},{v:"Retail",n:211,ai:48.9,du:54.2,op:46},{v:"Food & Bev",n:209,ai:48.1,du:72,op:32.9},{v:"Education",n:155,ai:52.8,du:53.1,op:55.4},{v:"Logistics",n:203,ai:53.9,du:64,op:47.8},{v:"Construction",n:199,ai:54.1,du:72.7,op:41.7}];
const TC=[{n:"Vantor",f:"Advent",s:80.8,d:90,o:72.5,r:30.6},{n:"RiverStone",f:"CVC",s:77.7,d:78,o:77.5,r:4},{n:"ThayerMahan",f:"AE Ind",s:76.2,d:86,o:67.5,r:16.2},{n:"UltraGreen",f:"Vitruvian",s:76.2,d:86,o:67.5,r:-14},{n:"Expression",f:"Enlighten",s:76.2,d:80,o:72.5,r:3.5},{n:"Muna Thera",f:"EQT",s:76.2,d:80,o:72.5,r:-18.7},{n:"Quantum Leap",f:"Carlyle",s:76.2,d:80,o:72.5,r:26.1},{n:"Envision",f:"GIC",s:75.8,d:82,o:70,r:6.8},{n:"PointClickCare",f:"H&F",s:75.8,d:82,o:70,r:-28.2},{n:"Nightwing",f:"Blackstone",s:75.2,d:78,o:72.5,r:-9.4},{n:"ModMed",f:"Clearlake",s:74.8,d:80,o:70,r:-28.2},{n:"Versaterm",f:"Permira",s:74.8,d:80,o:70,r:-41.7},{n:"Aerska",f:"EQT",s:74.2,d:76,o:72.5,r:8.2},{n:"Planet",f:"Eurazeo",s:74.2,d:76,o:72.5,r:-3.3},{n:"Egle Thera",f:"EQT",s:73.9,d:84,o:65,r:10}];
const AL=[{n:"Front Row",f:"Charlesbank",g:48.5,o:72.5,d:24},{n:"KM2",f:"H.I.G.",g:48.5,o:72.5,d:24},{n:"Sideshow",f:"Waterland",g:48.5,o:72.5,d:24},{n:"VXI",f:"Bain",g:48.5,o:72.5,d:24},{n:"Amsive",f:"H.I.G.",g:48,o:70,d:22},{n:"GOAL",f:"TPG",g:48,o:70,d:22},{n:"TaskUs",f:"Blackstone",g:46,o:70,d:24},{n:"Twinkl",f:"Vitruvian",g:43.5,o:77.5,d:34},{n:"Sagility",f:"EQT",g:40,o:80,d:40},{n:"Keyword St",f:"EQT",g:39,o:75,d:36}];

const SYS = `You are an AI analyst in a Bloomberg-style PE terminal. Ciridae dataset: 147 funds, 5,426 portcos, 27 verticals.
METRICS: AI Score (29-81, μ54.6), Durability (μ63.1), Opportunity (μ50.2), Comp Returns (6M/CW).
ARCHETYPES: Disruptors=Opp≥57+Dur<58. Fortresses=Dur≥65+Opp<50. Balanced=both high. Mid=neither.
DATA:${JSON.stringify({f:F.map(f=>({n:f.n,a:f.a,c:f.c,d:f.d,o:f.o,s:f.s,r:f.r,rc:f.rc})),v:V,tc:TC,al:AL})}
RULES: Terse. Tables. Bold key nums. <300 words. Bottom line first. Abbreviate. End: **BOTTOM LINE:** one-liner.`;

const CMDS = [
  {k:"COMP", q:"Compare KKR and Carlyle Group head-to-head across all AI metrics in a table."},
  {k:"RANK", q:"Rank top 10 PE funds by AI Score with AUM, portcos, durability, opportunity, 6M returns in a table."},
  {k:"ALPHA", q:"Show top alpha targets — highest opportunity-durability gap. Table format."},
  {k:"SECTOR", q:"Rank all sectors by AI opportunity score. Table with AI, Durability, Opportunity, company count."},
  {k:"DEEP", q:"Deep dive Thoma Bravo vs HgCapital vs Vista Equity vs Silver Lake. Full comparison table."},
  {k:"CORR", q:"Analyze relationship between AI opportunity scores and 6M comparable returns across all funds."},
];

const mono = "'Share Tech Mono', 'Consolas', monospace";
const sans = "'Roboto Condensed', 'Arial Narrow', sans-serif";
const rc = v => v > 0 ? "#00ff88" : v < -10 ? "#ff4444" : "#ff9900";

// ── Markdown renderer ──
function Md({ text }) {
  if (!text) return null;
  const lines = text.split('\n');
  const els = [];
  let tbl = [];

  const inl = (s) => {
    const p = [];
    let rem = s, k = 0;
    while (rem.length > 0) {
      const m = rem.match(/\*\*(.+?)\*\*/);
      if (m) {
        const idx = rem.indexOf(m[0]);
        if (idx > 0) p.push(<span key={k++}>{rem.slice(0, idx)}</span>);
        p.push(<strong key={k++} style={{ color: "#ffffff" }}>{m[1]}</strong>);
        rem = rem.slice(idx + m[0].length);
      } else {
        p.push(<span key={k++}>{rem}</span>);
        break;
      }
    }
    return p;
  };

  const flush = () => {
    if (tbl.length < 2) { tbl = []; return; }
    const hd = tbl[0].split('|').filter(c => c.trim()).map(c => c.trim());
    const rows = tbl.slice(2).filter(r => r.includes('|'));
    els.push(
      <div key={els.length} style={{ overflowX: "auto", margin: "2px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: mono, fontSize: 11 }}>
          <thead>
            <tr style={{ background: "#141400" }}>
              {hd.map((h, i) => (
                <th key={i} style={{ padding: "1px 4px", textAlign: "left", color: "#ff9900", fontWeight: 700, fontSize: 9, fontFamily: sans, letterSpacing: .5, borderBottom: "1px solid #333" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => {
              const cells = row.split('|').filter(c => c.trim()).map(c => c.trim());
              return (
                <tr key={ri} style={{ background: ri % 2 ? "#0c0c00" : "transparent" }}>
                  {cells.map((c, ci) => (
                    <td key={ci} style={{ padding: "1px 4px", borderBottom: "1px solid #1a1a00", color: c.match(/-\d/) ? "#ff4444" : c.match(/^\+?\d.*%/) ? "#00ff88" : "#cccc88" }}>{inl(c)}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
    tbl = [];
  };

  lines.forEach((ln, i) => {
    if (ln.startsWith('|')) { tbl.push(ln); return; }
    if (tbl.length) flush();
    if (ln.startsWith('### ')) {
      els.push(<div key={i} style={{ fontSize: 9, fontWeight: 700, color: "#ff9900", margin: "4px 0 1px", letterSpacing: .8, fontFamily: sans }}>{ln.slice(4)}</div>);
    } else if (ln.startsWith('## ')) {
      els.push(<div key={i} style={{ fontSize: 10, fontWeight: 700, color: "#ffcc00", margin: "3px 0 1px", fontFamily: sans }}>{ln.slice(3)}</div>);
    } else if (ln.startsWith('- ') || ln.startsWith('* ')) {
      els.push(<div key={i} style={{ display: "flex", gap: 3, margin: "1px 0" }}><span style={{ color: "#ff9900", fontSize: 9 }}>▸</span><span style={{ color: "#cccc88", lineHeight: 1.35 }}>{inl(ln.slice(2))}</span></div>);
    } else if (ln.includes('BOTTOM LINE')) {
      els.push(<div key={i} style={{ margin: "4px 0 1px", padding: "1px 4px", background: "#1a1a00", borderLeft: "2px solid #ff9900", color: "#ffcc00", fontWeight: 700, fontFamily: sans, fontSize: 10 }}>{inl(ln)}</div>);
    } else if (ln.trim()) {
      els.push(<div key={i} style={{ margin: "1px 0", color: "#cccc88", lineHeight: 1.35 }}>{inl(ln)}</div>);
    }
  });
  if (tbl.length) flush();
  return <div style={{ fontSize: 11, fontFamily: mono }}>{els}</div>;
}

// ── Window chrome ──
function WinBar({ title, color = "#ff9900", onClose, onMaximize, onMinimize, isMaximized }) {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "1px 3px", background: "#1c1c1c", borderBottom: `1px solid ${color}`, gap: 3, height: 16, fontFamily: sans, cursor: "default", flexShrink: 0 }}>
      <span style={{ fontSize: 9, fontWeight: 700, color, letterSpacing: .8, flex: 1, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{title}</span>
      <span onClick={onMinimize} style={{ fontSize: 10, color: "#666", cursor: "pointer", padding: "0 2px", lineHeight: 1 }} title="Minimize">—</span>
      <span onClick={onMaximize} style={{ fontSize: 9, color: "#666", cursor: "pointer", padding: "0 2px", lineHeight: 1 }} title={isMaximized ? "Restore" : "Maximize"}>{isMaximized ? "⊟" : "□"}</span>
      <span onClick={onClose} style={{ fontSize: 9, color: "#884444", cursor: "pointer", padding: "0 2px", lineHeight: 1, fontWeight: 700 }} title="Close">×</span>
    </div>
  );
}

// ── Main App ──
// ── Setup Modal — BYOK onboarding ──
function SetupModal({ provider: initProvider, apiKey: initKey, onSave, onClose, onClear }) {
  const [prov, setProv] = useState(initProvider || "anthropic");
  const [key, setKey] = useState(initKey || "");
  const [showKey, setShowKey] = useState(false);

  const valid = key.trim().length > 10;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.85)", fontFamily: "'Roboto Condensed', 'Arial Narrow', sans-serif" }}>
      <div style={{ background: "#111", border: "1px solid #ff9900", width: 480, maxWidth: "90vw", maxHeight: "90vh", overflow: "auto" }}>
        {/* Title bar */}
        <div style={{ display: "flex", alignItems: "center", padding: "4px 8px", background: "#1c1c1c", borderBottom: "1px solid #ff9900" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#ff9900", letterSpacing: 1, flex: 1 }}>API KEY SETUP</span>
          {initKey && <span onClick={onClose} style={{ fontSize: 10, color: "#884444", cursor: "pointer", fontWeight: 700 }}>×</span>}
        </div>

        <div style={{ padding: "16px 20px" }}>
          {/* Provider tabs */}
          <div style={{ fontSize: 9, color: "#888", marginBottom: 8, letterSpacing: .5 }}>SELECT PROVIDER</div>
          <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
            {[["anthropic", "Claude (Anthropic)"], ["openai", "ChatGPT (OpenAI)"]].map(([id, label]) => (
              <button key={id} onClick={() => { setProv(id); setKey(""); }}
                style={{
                  flex: 1, padding: "8px 12px", border: `1px solid ${prov === id ? "#ff9900" : "#333"}`,
                  background: prov === id ? "#1a1a00" : "transparent", color: prov === id ? "#ffcc00" : "#666",
                  fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                }}>
                {label}
              </button>
            ))}
          </div>

          {/* Instructions */}
          <div style={{ background: "#0a0a00", border: "1px solid #222", padding: "12px 14px", marginBottom: 16, fontSize: 11, lineHeight: 1.6, color: "#cccc88" }}>
            <div style={{ color: "#ff9900", fontWeight: 700, fontSize: 10, letterSpacing: .5, marginBottom: 8 }}>
              ▸ HOW TO GET YOUR {prov === "openai" ? "OPENAI" : "ANTHROPIC"} API KEY
            </div>
            {prov === "anthropic" ? (
              <div>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: "#ffcc00", fontWeight: 700 }}>1.</span> Go to{" "}
                  <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#ff9900", textDecoration: "underline" }}>console.anthropic.com</a>
                </div>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: "#ffcc00", fontWeight: 700 }}>2.</span> Sign up or log in
                </div>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: "#ffcc00", fontWeight: 700 }}>3.</span> Go to <span style={{ color: "#fff" }}>Settings → API Keys</span>
                </div>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: "#ffcc00", fontWeight: 700 }}>4.</span> Click <span style={{ color: "#fff" }}>Create Key</span> and copy it
                </div>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: "#ffcc00", fontWeight: 700 }}>5.</span> Add credit — $5 minimum gets you ~500+ queries
                </div>
                <div style={{ fontSize: 9, color: "#666", marginTop: 8 }}>
                  Key format: <span style={{ color: "#888", fontFamily: "'Share Tech Mono', monospace" }}>sk-ant-api03-...</span>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: "#ffcc00", fontWeight: 700 }}>1.</span> Go to{" "}
                  <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" style={{ color: "#ff9900", textDecoration: "underline" }}>platform.openai.com/api-keys</a>
                </div>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: "#ffcc00", fontWeight: 700 }}>2.</span> Sign up or log in
                </div>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: "#ffcc00", fontWeight: 700 }}>3.</span> Click <span style={{ color: "#fff" }}>Create new secret key</span>
                </div>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: "#ffcc00", fontWeight: 700 }}>4.</span> Copy the key immediately (it won't show again)
                </div>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: "#ffcc00", fontWeight: 700 }}>5.</span> Add credit at{" "}
                  <a href="https://platform.openai.com/settings/organization/billing" target="_blank" rel="noopener noreferrer" style={{ color: "#ff9900", textDecoration: "underline" }}>Billing</a>
                  {" "}— $5 gets you started
                </div>
                <div style={{ fontSize: 9, color: "#666", marginTop: 8 }}>
                  Key format: <span style={{ color: "#888", fontFamily: "'Share Tech Mono', monospace" }}>sk-proj-...</span>
                </div>
              </div>
            )}
          </div>

          {/* Key input */}
          <div style={{ fontSize: 9, color: "#888", marginBottom: 4, letterSpacing: .5 }}>PASTE YOUR API KEY</div>
          <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
            <input
              type={showKey ? "text" : "password"}
              value={key}
              onChange={e => setKey(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && valid) onSave(prov, key.trim()); }}
              placeholder={prov === "openai" ? "sk-proj-..." : "sk-ant-api03-..."}
              style={{ flex: 1, padding: "8px 10px", border: "1px solid #333", background: "#0a0a00", color: "#ffcc00", fontSize: 12, fontFamily: "'Share Tech Mono', monospace", outline: "none" }}
            />
            <button onClick={() => setShowKey(!showKey)} style={{ background: "#1a1a1a", border: "1px solid #333", color: "#888", padding: "0 10px", fontSize: 9, cursor: "pointer", fontFamily: "inherit" }}>
              {showKey ? "HIDE" : "SHOW"}
            </button>
          </div>

          {/* Security note */}
          <div style={{ fontSize: 9, color: "#555", marginBottom: 16, lineHeight: 1.5 }}>
            <span style={{ color: "#ff9900" }}>🔒</span> Your key is stored locally in your browser only. It is sent directly to {prov === "openai" ? "OpenAI" : "Anthropic"}'s API — never to our servers. We have no backend.
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: 6 }}>
            <button onClick={() => valid && onSave(prov, key.trim())} disabled={!valid}
              style={{
                flex: 1, padding: "8px", border: "none",
                background: valid ? "#ff9900" : "#222", color: valid ? "#000" : "#555",
                fontSize: 11, fontWeight: 700, cursor: valid ? "pointer" : "default",
                fontFamily: "inherit", letterSpacing: 1,
              }}>
              CONNECT
            </button>
            {initKey && (
              <button onClick={onClear} style={{ padding: "8px 16px", border: "1px solid #884444", background: "transparent", color: "#ff4444", fontSize: 10, cursor: "pointer", fontFamily: "inherit", fontWeight: 700 }}>
                DISCONNECT
              </button>
            )}
          </div>

          {/* Cost estimate */}
          <div style={{ marginTop: 12, padding: "8px 10px", background: "#0a0a00", border: "1px solid #1a1a00", fontSize: 9, color: "#888", lineHeight: 1.5 }}>
            <span style={{ color: "#ff9900", fontWeight: 700 }}>COST ESTIMATE:</span> Each query uses ~2K tokens ≈ ${prov === "openai" ? "~$0.01" : "~$0.01"} per query.
            {" "}$5 of credit gets you approximately 500+ queries.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selFund, setSelFund] = useState(null);
  const [gridSort, setGridSort] = useState("s");
  const [gridDir, setGridDir] = useState(-1);
  const [time, setTime] = useState(new Date());
  const [showSetup, setShowSetup] = useState(false);

  // BYOK — Bring Your Own Key
  const [provider, setProvider] = useState(() => {
    if (typeof window !== "undefined") return localStorage.getItem("cir_provider") || "anthropic";
    return "anthropic";
  });
  const [apiKey, setApiKey] = useState(() => {
    if (typeof window !== "undefined") return localStorage.getItem("cir_apikey") || "";
    return "";
  });


  const saveKey = (p, k) => {
    setProvider(p);
    setApiKey(k);
    localStorage.setItem("cir_provider", p);
    localStorage.setItem("cir_apikey", k);
    setShowSetup(false);
  };

  const clearKey = () => {
    setApiKey("");
    setProvider("anthropic");
    localStorage.removeItem("cir_apikey");
    localStorage.removeItem("cir_provider");
    setShowSetup(true);
  };

  // Window states: visible, maximized, minimized
  const [panels, setPanels] = useState({
    grid: { visible: true, maximized: false, minimized: false },
    query: { visible: true, maximized: false, minimized: false },
    scatter: { visible: true, maximized: false, minimized: false },
    sectors: { visible: true, maximized: false, minimized: false },
  });

  const chatEnd = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    chatEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, loading]);

  const sorted = useMemo(() => [...F].sort((a, b) => (a[gridSort] - b[gridSort]) * gridDir), [gridSort, gridDir]);
  const sel = selFund ? F.find(f => f.n === selFund) : null;

  const run = useCallback(async (text) => {
    const q = text || query;
    if (!q.trim() || loading) return;
    if (!apiKey) {
      setMsgs(p => [...p, { role: "user", text: q }, { role: "assistant", text: "⚠ No API key connected. Click the **⚠ NO KEY** button in the top-right corner to add your Claude or ChatGPT API key." }]);
      setQuery("");
      return;
    }

    setMsgs(p => [...p, { role: "user", text: q }]);
    setQuery("");
    setLoading(true);

    const conversationMsgs = [
      ...msgs.map(m => ({ role: m.role === "user" ? "user" : "assistant", content: m.text })),
      { role: "user", content: q }
    ];

    try {
      let reply;

      if (provider === "openai") {
        // ── OpenAI / ChatGPT ──
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o",
            max_tokens: 1000,
            messages: [
              { role: "system", content: SYS },
              ...conversationMsgs,
            ],
          }),
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error.message);
        reply = data.choices?.[0]?.message?.content || "NO DATA";

      } else {
        // ── Anthropic / Claude ──
        const res = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
            "anthropic-version": "2023-06-01",
            "anthropic-dangerous-direct-browser-access": "true",
          },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1000,
            system: SYS,
            messages: conversationMsgs,
          }),
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error.message);
        reply = data.content?.map(b => b.text || "").join("\n") || "NO DATA";
      }

      setMsgs(p => [...p, { role: "assistant", text: reply }]);
    } catch (e) {
      const errMsg = e.message.includes("401") || e.message.includes("invalid")
        ? "Invalid API key. Click the key icon in the top bar to update."
        : e.message;
      setMsgs(p => [...p, { role: "assistant", text: `⚠ ${errMsg}` }]);
    }
    setLoading(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [query, msgs, loading, apiKey, provider]);

  const togglePanel = (id, action) => {
    setPanels(p => {
      const cur = { ...p[id] };
      if (action === "close") cur.visible = false;
      else if (action === "maximize") {
        cur.maximized = !cur.maximized;
        cur.minimized = false;
      }
      else if (action === "minimize") {
        cur.minimized = !cur.minimized;
        cur.maximized = false;
      }
      return { ...p, [id]: cur };
    });
  };

  const restorePanel = (id) => {
    setPanels(p => ({ ...p, [id]: { visible: true, maximized: false, minimized: false } }));
  };

  const doSort = k => {
    if (gridSort === k) setGridDir(d => d * -1);
    else { setGridSort(k); setGridDir(-1); }
  };

  const scW = 280, scH = 180, scP = 22;
  const scX = v => scP + ((v - 40) / (85 - 40)) * (scW - scP * 2);
  const scY = v => scH - scP - ((v - 35) / (70 - 35)) * (scH - scP * 2);

  // Determine which panels are visible and not minimized for the grid layout
  const visiblePanels = Object.entries(panels).filter(([, v]) => v.visible);
  const maximizedPanel = visiblePanels.find(([, v]) => v.maximized);
  const activePanels = visiblePanels.filter(([, v]) => !v.minimized);
  const minimizedPanels = visiblePanels.filter(([, v]) => v.minimized);
  const closedPanels = Object.entries(panels).filter(([, v]) => !v.visible);

  // Dynamic grid layout
  let gridCols, gridRows;
  if (maximizedPanel) {
    gridCols = "1fr";
    gridRows = "1fr";
  } else if (activePanels.length === 1) {
    gridCols = "1fr";
    gridRows = "1fr";
  } else if (activePanels.length === 2) {
    gridCols = "1fr 1fr";
    gridRows = "1fr";
  } else if (activePanels.length === 3) {
    gridCols = "1fr 1fr";
    gridRows = "1fr 1fr";
  } else {
    gridCols = "1fr 1fr";
    gridRows = "1fr 1fr";
  }

  const PANEL_DEFS = {
    grid: {
      title: "FUND RANKINGS",
      color: "#ff9900",
      render: () => (
        <div style={{ flex: 1, overflowY: "auto", overflowX: "auto" }}>
          <table style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse", fontFamily: mono, fontSize: 11 }}>
            <thead>
              <tr style={{ background: "#111", position: "sticky", top: 0, zIndex: 2 }}>
                {[["n", "Fund"], ["a", "AUM"], ["c", "Cos"], ["s", "AIS"], ["d", "Dur"], ["o", "Opp"], ["r", "6M%"], ["rc", "CW%"]].map(([k, l]) => (
                  <th key={k} onClick={() => doSort(k)} style={{ padding: "1px 3px", textAlign: k === "n" ? "left" : "right", color: "#ff9900", fontWeight: 700, fontSize: 9, fontFamily: sans, letterSpacing: .3, borderBottom: "1px solid #444", cursor: "pointer", userSelect: "none", whiteSpace: "nowrap", lineHeight: "14px" }}>{l}{gridSort === k ? (gridDir > 0 ? "↑" : "↓") : ""}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((f, i) => (
                <tr key={f.n} onClick={() => setSelFund(f.n)} style={{ background: selFund === f.n ? "#1a1a00" : i % 2 ? "#080800" : "transparent", cursor: "pointer", height: 16 }} onMouseEnter={e => { if (selFund !== f.n) e.currentTarget.style.background = "#0f0f00" }} onMouseLeave={e => { if (selFund !== f.n) e.currentTarget.style.background = i % 2 ? "#080800" : "transparent" }}>
                  <td style={{ padding: "0 3px", color: selFund === f.n ? "#ffcc00" : "#cccc88", fontWeight: selFund === f.n ? 700 : 400, borderBottom: "1px solid #111", maxWidth: 90, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.n}</td>
                  <td style={{ padding: "0 3px", textAlign: "right", borderBottom: "1px solid #111", color: "#888" }}>{f.a > 0 ? f.a : ""}</td>
                  <td style={{ padding: "0 3px", textAlign: "right", borderBottom: "1px solid #111", color: "#888" }}>{f.c}</td>
                  <td style={{ padding: "0 3px", textAlign: "right", borderBottom: "1px solid #111", color: "#00ff88", fontWeight: 700 }}>{f.s.toFixed(1)}</td>
                  <td style={{ padding: "0 3px", textAlign: "right", borderBottom: "1px solid #111", color: "#4488ff" }}>{f.d.toFixed(1)}</td>
                  <td style={{ padding: "0 3px", textAlign: "right", borderBottom: "1px solid #111", color: "#aa88ff" }}>{f.o.toFixed(1)}</td>
                  <td style={{ padding: "0 3px", textAlign: "right", borderBottom: "1px solid #111", color: rc(f.r) }}>{f.r > 0 ? "+" : ""}{f.r}%</td>
                  <td style={{ padding: "0 3px", textAlign: "right", borderBottom: "1px solid #111", color: rc(f.rc) }}>{f.rc}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    },
    query: {
      title: "AI QUERY TERMINAL",
      color: "#00aa44",
      render: () => (
        <>
          <div style={{ flex: 1, overflowY: "auto", padding: "2px 4px" }}>
            {msgs.length === 0 && !loading && (
              <div style={{ padding: "4px 0" }}>
                <div style={{ color: "#888", fontSize: 10, marginBottom: 4, fontFamily: sans }}>Type a question and press Enter, or click a command.</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                  {CMDS.map((c, i) => (
                    <button key={i} onClick={() => run(c.q)} style={{ background: "transparent", border: "1px solid #1a1a00", padding: "2px 4px", textAlign: "left", cursor: "pointer", fontFamily: sans, fontSize: 9, color: "#888", lineHeight: 1.3 }} onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff9900"; e.currentTarget.style.color = "#ffcc00" }} onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a00"; e.currentTarget.style.color = "#888" }}>
                      <span style={{ color: "#ff9900", fontWeight: 700 }}>{c.k}</span> {c.q.slice(0, 50)}...
                    </button>
                  ))}
                </div>
              </div>
            )}
            {msgs.map((m, i) => (
              <div key={i} style={{ margin: "3px 0" }}>
                {m.role === "user" ? (
                  <div style={{ display: "flex", gap: 3 }}>
                    <span style={{ color: "#ff9900", fontWeight: 700, fontFamily: sans, fontSize: 10 }}>▶</span>
                    <span style={{ color: "#ffcc00", fontSize: 11 }}>{m.text}</span>
                  </div>
                ) : (
                  <div style={{ borderLeft: "2px solid #333", paddingLeft: 4, marginTop: 2 }}>
                    <Md text={m.text} />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", gap: 4, alignItems: "center", margin: "3px 0" }}>
                <span style={{ color: "#ff9900", fontFamily: sans, fontSize: 10, fontWeight: 700 }}>▶</span>
                <span style={{ color: "#ff9900", fontSize: 10 }}>PROCESSING</span>
                <span style={{ animation: "bl .5s step-end infinite", color: "#ff9900" }}>█</span>
                <style>{`@keyframes bl{50%{opacity:0}}`}</style>
              </div>
            )}
            <div ref={chatEnd} />
          </div>
          <div style={{ display: "flex", borderTop: "1px solid #ff9900", background: "#0a0a00", flexShrink: 0, height: 22, alignItems: "center" }}>
            <span style={{ color: "#ff9900", fontWeight: 700, padding: "0 4px", fontSize: 12, fontFamily: sans }}>▶</span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  run();
                }
              }}
              placeholder="Ask anything about the PE dataset..."
              disabled={loading}
              style={{ flex: 1, padding: 0, border: "none", background: "transparent", color: "#ffcc00", fontSize: 11, fontFamily: mono, outline: "none", caretColor: "#ff9900", height: 20, lineHeight: "20px" }}
            />
            <button onClick={() => run()} disabled={loading || !query.trim()} style={{ background: query.trim() && !loading ? "#ff9900" : "#222", border: "none", borderLeft: "1px solid #333", color: query.trim() && !loading ? "#000" : "#555", padding: "0 10px", fontWeight: 700, fontSize: 9, cursor: query.trim() && !loading ? "pointer" : "default", fontFamily: sans, letterSpacing: 1, height: 22 }}>{loading ? "···" : "RUN"}</button>
          </div>
        </>
      )
    },
    scatter: {
      title: sel ? `${sel.n} — DETAIL` : "STRATEGY MAP",
      color: "#4488ff",
      render: () => (
        <div style={{ flex: 1, overflow: "auto", padding: 3 }}>
          {sel ? (
            <div style={{ fontFamily: sans }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#ffcc00", fontFamily: mono }}>{sel.s.toFixed(1)}</span>
                <span style={{ fontSize: 11, color: sel.r > 0 ? "#00ff88" : "#ff4444", fontWeight: 700, fontFamily: mono }}>{sel.r > 0 ? "+" : ""}{sel.r}%</span>
                <span style={{ fontSize: 9, color: "#888" }}>AI SCORE</span>
                <span style={{ fontSize: 9, color: "#888" }}>AUM <span style={{ color: "#ffcc00", fontFamily: mono }}>${sel.a}B</span></span>
                <span style={{ fontSize: 9, color: "#888" }}>Cos <span style={{ color: "#ffcc00", fontFamily: mono }}>{sel.c}</span></span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, marginBottom: 4 }}>
                {[["Dur", sel.d.toFixed(1), "#4488ff"], ["Opp", sel.o.toFixed(1), "#aa88ff"], ["Min", sel.mn, "#888"], ["Max", sel.mx, "#00ff88"], ["6M", `${sel.r > 0 ? "+" : ""}${sel.r}%`, rc(sel.r)], ["CW", `${sel.rc}%`, rc(sel.rc)], ["HQ", sel.h || "—", "#888"], ["Type", sel.o >= 57 && sel.d < 58 ? "DISRUPT" : sel.d >= 65 && sel.o < 50 ? "FORTRESS" : sel.o >= 55 && sel.d >= 58 ? "BALANCED" : "MID", "#ff9900"]].map(([l, v, c], i) => (
                  <div key={i} style={{ background: "#0a0a00", padding: "2px 4px", borderLeft: `2px solid ${c}` }}>
                    <div style={{ fontSize: 8, color: "#555", letterSpacing: .5 }}>{l}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: c, fontFamily: mono }}>{v}</div>
                  </div>
                ))}
              </div>
              {[["AI Score", "s", "#00ff88"], ["Durability", "d", "#4488ff"], ["Opportunity", "o", "#aa88ff"]].map(([l, k, c]) => {
                const pct = Math.round(F.filter(f => f[k] < sel[k]).length / F.length * 100);
                return (
                  <div key={k} style={{ margin: "2px 0" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9 }}>
                      <span style={{ color: "#888" }}>{l}</span>
                      <span style={{ color: c, fontWeight: 700, fontFamily: mono }}>P{pct}</span>
                    </div>
                    <div style={{ height: 3, background: "#1a1a1a" }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: c }} />
                    </div>
                  </div>
                );
              })}
              <button onClick={() => setSelFund(null)} style={{ marginTop: 4, background: "transparent", border: "1px solid #333", color: "#888", padding: "1px 6px", fontSize: 9, cursor: "pointer", fontFamily: sans }}>← SCATTER</button>
            </div>
          ) : (
            <svg viewBox={`0 0 ${scW} ${scH}`} style={{ width: "100%", height: "100%" }}>
              <rect width={scW} height={scH} fill="#000" />
              {[45, 55, 65, 75].map(v => <line key={`gx${v}`} x1={scX(v)} y1={scP} x2={scX(v)} y2={scH - scP} stroke="#111" strokeWidth={.3} />)}
              {[40, 50, 60].map(v => <line key={`gy${v}`} x1={scP} y1={scY(v)} x2={scW - scP} y2={scY(v)} stroke="#111" strokeWidth={.3} />)}
              <line x1={scX(63)} y1={scP} x2={scX(63)} y2={scH - scP} stroke="#333" strokeDasharray="2,2" strokeWidth={.5} />
              <line x1={scP} y1={scY(52)} x2={scW - scP} y2={scY(52)} stroke="#333" strokeDasharray="2,2" strokeWidth={.5} />
              <text x={scW / 2} y={scH - 4} fontSize={8} fill="#555" textAnchor="middle" fontFamily={sans}>DURABILITY →</text>
              <text x={6} y={scH / 2} fontSize={8} fill="#555" textAnchor="middle" fontFamily={sans} transform={`rotate(-90,6,${scH / 2})`}>OPPORTUNITY →</text>
              {F.map((f, i) => {
                const cx = scX(f.d), cy = scY(f.o), r = Math.max(2.5, Math.min(7, Math.sqrt(f.a) * 0.3));
                const col = f.o >= 57 && f.d < 58 ? "#aa88ff" : f.d >= 65 && f.o < 50 ? "#4488ff" : f.o >= 55 && f.d >= 58 ? "#00ff88" : "#666";
                return (
                  <g key={i} onClick={() => setSelFund(f.n)} style={{ cursor: "pointer" }}>
                    <circle cx={cx} cy={cy} r={r} fill={col} fillOpacity={.5} stroke={col} strokeWidth={.5} />
                    {f.a > 120 && <text x={cx} y={cy - r - 2} fontSize={7} fill="#999" textAnchor="middle" fontFamily={sans}>{f.n}</text>}
                  </g>
                );
              })}
              {[["#aa88ff", "DISRUPT"], ["#00ff88", "BALANCED"], ["#4488ff", "FORTRESS"], ["#666", "MID"]].map(([c, l], i) => (
                <g key={l}><circle cx={scW - 50} cy={scP + 4 + i * 9} r={2.5} fill={c} /><text x={scW - 45} y={scP + 7 + i * 9} fontSize={7} fill={c} fontFamily={sans}>{l}</text></g>
              ))}
            </svg>
          )}
        </div>
      )
    },
    sectors: {
      title: "SECTORS / ALPHA TARGETS",
      color: "#aa88ff",
      render: () => (
        <div style={{ flex: 1, overflowY: "auto", padding: 3 }}>
          <div style={{ fontSize: 9, color: "#ff9900", fontWeight: 700, letterSpacing: .5, marginBottom: 1, fontFamily: sans }}>▸ SECTOR AI SCORES</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: mono, fontSize: 11, marginBottom: 6 }}>
            <thead><tr style={{ background: "#0a0a00" }}>{["Vertical", "N", "AI", "Dur", "Opp"].map(h => <th key={h} style={{ padding: "1px 3px", textAlign: h === "Vertical" ? "left" : "right", color: "#ff9900", fontSize: 9, fontWeight: 700, fontFamily: sans, borderBottom: "1px solid #222" }}>{h}</th>)}</tr></thead>
            <tbody>{V.map((v, i) => (
              <tr key={i} style={{ background: i % 2 ? "#050500" : "transparent", height: 15 }}>
                <td style={{ padding: "0 3px", borderBottom: "1px solid #0a0a00", color: "#cccc88", maxWidth: 85, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.v}</td>
                <td style={{ padding: "0 3px", textAlign: "right", borderBottom: "1px solid #0a0a00", color: "#666" }}>{v.n}</td>
                <td style={{ padding: "0 3px", textAlign: "right", borderBottom: "1px solid #0a0a00", color: "#00ff88", fontWeight: 700 }}>{v.ai}</td>
                <td style={{ padding: "0 3px", textAlign: "right", borderBottom: "1px solid #0a0a00", color: "#4488ff" }}>{v.du}</td>
                <td style={{ padding: "0 3px", textAlign: "right", borderBottom: "1px solid #0a0a00", color: "#aa88ff" }}>{v.op}</td>
              </tr>
            ))}</tbody>
          </table>
          <div style={{ fontSize: 9, color: "#ff9900", fontWeight: 700, letterSpacing: .5, marginBottom: 1, fontFamily: sans }}>▸ ALPHA TARGETS</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: mono, fontSize: 11 }}>
            <thead><tr style={{ background: "#0a0a00" }}>{["Company", "Fund", "Gap", "Opp", "Dur"].map(h => <th key={h} style={{ padding: "1px 3px", textAlign: h === "Company" || h === "Fund" ? "left" : "right", color: "#ff9900", fontSize: 9, fontWeight: 700, fontFamily: sans, borderBottom: "1px solid #222" }}>{h}</th>)}</tr></thead>
            <tbody>{AL.map((a, i) => (
              <tr key={i} style={{ background: i % 2 ? "#050500" : "transparent", height: 15 }}>
                <td style={{ padding: "0 3px", borderBottom: "1px solid #0a0a00", color: "#cccc88", fontWeight: 600 }}>{a.n}</td>
                <td style={{ padding: "0 3px", borderBottom: "1px solid #0a0a00", color: "#888" }}>{a.f}</td>
                <td style={{ padding: "0 3px", textAlign: "right", borderBottom: "1px solid #0a0a00" }}><span style={{ color: "#aa88ff", fontWeight: 700 }}>+{a.g}</span></td>
                <td style={{ padding: "0 3px", textAlign: "right", borderBottom: "1px solid #0a0a00", color: "#aa88ff" }}>{a.o}</td>
                <td style={{ padding: "0 3px", textAlign: "right", borderBottom: "1px solid #0a0a00", color: "#4488ff" }}>{a.d}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )
    }
  };

  const panelsToRender = maximizedPanel
    ? [maximizedPanel]
    : activePanels;

  return (
    <div style={{ fontFamily: mono, background: "#000", color: "#cccc88", height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", fontSize: 11, lineHeight: 1.3 }}>
      {/* fonts loaded in layout.js */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 999, background: "repeating-linear-gradient(0deg,rgba(0,0,0,0.03) 0px,rgba(0,0,0,0.03) 1px,transparent 1px,transparent 2px)" }} />

      {/* TOP BAR */}
      <div style={{ display: "flex", alignItems: "center", padding: "1px 4px", background: "#111", borderBottom: "2px solid #ff9900", gap: 6, flexShrink: 0, height: 18, fontFamily: sans }}>
        <span style={{ background: "#ff9900", color: "#000", padding: "0 6px", fontWeight: 700, fontSize: 10, letterSpacing: 1.5, lineHeight: "16px" }}>CIRIDAE</span>
        <span style={{ color: "#888", fontSize: 9 }}>TERMINAL</span>
        <div style={{ width: 1, height: 10, background: "#333" }} />
        {CMDS.map(c => (
          <button key={c.k} onClick={() => run(c.q)} style={{ background: "#1a1a1a", border: "1px solid #333", color: "#ff9900", padding: "0 5px", fontSize: 9, fontWeight: 700, cursor: "pointer", fontFamily: sans, letterSpacing: .5, lineHeight: "14px", height: 14 }} onMouseEnter={e => { e.currentTarget.style.background = "#2a2a00"; e.currentTarget.style.borderColor = "#ff9900" }} onMouseLeave={e => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.borderColor = "#333" }}>{c.k}</button>
        ))}
        <div style={{ flex: 1 }} />
        {/* Restore closed panels */}
        {closedPanels.map(([id]) => (
          <button key={id} onClick={() => restorePanel(id)} style={{ background: "#1a0000", border: "1px solid #884444", color: "#ff9900", padding: "0 5px", fontSize: 8, cursor: "pointer", fontFamily: sans, lineHeight: "14px", height: 14 }}>
            + {PANEL_DEFS[id].title.slice(0, 8)}
          </button>
        ))}
        <div style={{ width: 1, height: 10, background: "#333" }} />
        {/* API Key indicator */}
        <button onClick={() => setShowSetup(true)} style={{ background: apiKey ? "#0a1a0a" : "#1a0a00", border: `1px solid ${apiKey ? "#00aa44" : "#ff4444"}`, color: apiKey ? "#00aa44" : "#ff4444", padding: "0 6px", fontSize: 8, cursor: "pointer", fontFamily: sans, lineHeight: "14px", height: 14, fontWeight: 700, letterSpacing: .5 }}>
          {apiKey ? `🔑 ${provider === "openai" ? "GPT" : "CLAUDE"}` : "⚠ NO KEY"}
        </button>
        <span style={{ color: "#888", fontSize: 9 }}>{time.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase()}</span>
        <span style={{ color: "#ff9900", fontWeight: 700, fontSize: 10, fontFamily: mono }}>{time.toLocaleTimeString('en-US', { hour12: false })}</span>
      </div>

      {/* ── SETUP MODAL ── */}
      {showSetup && <SetupModal provider={provider} apiKey={apiKey} onSave={saveKey} onClose={() => apiKey && setShowSetup(false)} onClear={clearKey} />}

      {/* TICKER — clickable, scrolling fund scores. Pauses on hover for easy clicking */}
      <div
        className="ticker-wrap"
        style={{ display: "flex", borderBottom: "1px solid #222", flexShrink: 0, overflow: "hidden", height: 16, alignItems: "center", fontFamily: mono, background: "#060600" }}
      >
        <div className="ticker-track" style={{ display: "flex", animation: "tk 180s linear infinite", whiteSpace: "nowrap" }}>
          {[...[...F].sort((a, b) => b.s - a.s), ...[...F].sort((a, b) => b.s - a.s)].map((f, i) => (
            <span
              key={i}
              onClick={() => {
                setSelFund(f.n);
                if (!panels.scatter.visible) restorePanel("scatter");
                if (panels.scatter.minimized) togglePanel("scatter", "minimize");
              }}
              style={{ padding: "0 14px", borderRight: "1px solid #1a1a00", fontSize: 10, lineHeight: "16px", cursor: "pointer", transition: "background 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#1a1a00"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ""; }}
            >
              <span style={{ color: "#ffcc00", fontWeight: 600 }}>{f.n}</span>
              {" "}
              <span style={{ color: "#fff" }}>{f.s.toFixed(1)}</span>
              {" "}
              <span style={{ color: f.r > 0 ? "#00ff88" : "#ff4444" }}>{f.r > 0 ? "▲" : "▼"}{Math.abs(f.r)}%</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes tk { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .ticker-wrap:hover .ticker-track { animation-play-state: paused; }
        `}</style>
      </div>

      {/* Minimized panels bar */}
      {minimizedPanels.length > 0 && (
        <div style={{ display: "flex", gap: 1, padding: "1px 4px", background: "#0a0a00", borderBottom: "1px solid #222", flexShrink: 0 }}>
          {minimizedPanels.map(([id]) => (
            <button key={id} onClick={() => togglePanel(id, "minimize")} style={{ background: "#111", border: "1px solid #333", color: PANEL_DEFS[id].color, padding: "0 8px", fontSize: 9, cursor: "pointer", fontFamily: sans, lineHeight: "14px", height: 14, fontWeight: 700 }}>
              {PANEL_DEFS[id].title} ↑
            </button>
          ))}
        </div>
      )}

      {/* MAIN GRID */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: gridCols, gridTemplateRows: gridRows, gap: 1, background: "#333", overflow: "hidden", minHeight: 0 }}>
        {panelsToRender.map(([id, state]) => {
          const def = PANEL_DEFS[id];
          if (!def) return null;
          return (
            <div key={id} style={{ background: "#000", display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0, minHeight: 0 }}>
              <WinBar
                title={def.title}
                color={def.color}
                isMaximized={state.maximized}
                onClose={() => togglePanel(id, "close")}
                onMaximize={() => togglePanel(id, "maximize")}
                onMinimize={() => togglePanel(id, "minimize")}
              />
              {def.render()}
            </div>
          );
        })}
      </div>

      {/* STATUS BAR */}
      <div style={{ display: "flex", alignItems: "center", padding: "0 4px", background: "#111", borderTop: "1px solid #333", fontSize: 9, color: "#555", gap: 10, flexShrink: 0, height: 14, fontFamily: sans }}>
        <span style={{ color: "#ff9900" }}>CIRIDAE TERMINAL</span>
        <span>147 FUNDS</span>
        <span>5,426 PORTCOS</span>
        <span>27 VERTICALS</span>
        <span style={{ color: "#888" }}>{activePanels.length}/4 panels</span>
        <div style={{ flex: 1 }} />
        {apiKey ? (
          <span style={{ color: "#00aa44" }}>● {provider === "openai" ? "OPENAI GPT-4o" : "CLAUDE SONNET"}</span>
        ) : (
          <span style={{ color: "#ff4444", cursor: "pointer" }} onClick={() => setShowSetup(true)}>● NO API KEY — CLICK TO SETUP</span>
        )}
      </div>
    </div>
  );
}
