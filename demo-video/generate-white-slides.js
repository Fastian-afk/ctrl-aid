const pptxgen = require('pptxgenjs');
const path = require('path');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Team Ctrl+Aid';
pptx.title = 'Ctrl+Aid — AI-Powered Emergency Information Platform';

// WHITE THEME — judge-friendly
const BG = 'FFFFFF';
const TITLE = '0F172A';    // slate-900
const BODY = '334155';     // slate-700
const MUTED = '64748B';    // slate-500
const TEAL = '0D9488';     // teal-600 accent
const TEAL_BG = 'F0FDFA';  // teal-50 card bg
const CARD_BG = 'F8FAFC';  // slate-50
const CARD_BORDER = 'E2E8F0'; // slate-200
const RED_ACCENT = 'DC2626';

const ssDir = path.join(__dirname, 'screenshots');

// ═══════════ SLIDE 1: TITLE ═══════════
let s1 = pptx.addSlide();
s1.background = { color: BG };
// Top accent bar
s1.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.06, fill: { color: TEAL } });

s1.addText('🛡️', { x: 5.5, y: 1.2, w: 2.3, h: 0.8, fontSize: 48, align: 'center' });
s1.addText('Ctrl+Aid', {
  x: 1.5, y: 2.0, w: 10.3, h: 1.2, align: 'center',
  fontSize: 64, fontFace: 'Arial', color: TEAL, bold: true,
});
s1.addText('AI-Powered Emergency Information Platform\nfor Pakistani Communities', {
  x: 2, y: 3.4, w: 9.3, h: 1.0, align: 'center',
  fontSize: 22, fontFace: 'Arial', color: BODY, lineSpacingMultiple: 1.4,
});
s1.addShape(pptx.ShapeType.rect, { x: 4, y: 4.7, w: 5.3, h: 0.02, fill: { color: 'E2E8F0' } });
s1.addText('AI for Civic Innovation Hackathon 2026', {
  x: 2, y: 5.0, w: 9.3, h: 0.4, align: 'center',
  fontSize: 14, fontFace: 'Arial', color: TEAL, bold: true,
});
s1.addText('Team Ctrl+Aid  •  Code for Pakistan', {
  x: 2, y: 5.5, w: 9.3, h: 0.4, align: 'center',
  fontSize: 13, fontFace: 'Arial', color: MUTED,
});
s1.addText('Next.js 16  •  TypeScript  •  Gemini AI  •  Tailwind CSS v4  •  React-Leaflet', {
  x: 1.5, y: 6.3, w: 10.3, h: 0.4, align: 'center',
  fontSize: 11, fontFace: 'Arial', color: MUTED,
});

// ═══════════ SLIDE 2: THE PROBLEM ═══════════
let s2 = pptx.addSlide();
s2.background = { color: BG };
s2.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.06, fill: { color: TEAL } });
s2.addText('THE PROBLEM', { x: 0.8, y: 0.4, w: 4, h: 0.4, fontSize: 12, fontFace: 'Arial', color: TEAL, bold: true });
s2.addText([
  { text: "Pakistan's 2022 floods displaced ", options: { color: TITLE } },
  { text: "33 million people", options: { color: RED_ACCENT, bold: true } },
], { x: 0.8, y: 0.9, w: 11.7, h: 0.7, fontSize: 32, fontFace: 'Arial', bold: true });
s2.addText('Communities lacked access to verified, timely emergency information', {
  x: 0.8, y: 1.6, w: 11, h: 0.4, fontSize: 16, fontFace: 'Arial', color: BODY,
});

const problems = [
  { icon: '📡', title: 'Fragmented Information', desc: 'No single source of verified emergency alerts — citizens relied on unverified WhatsApp forwards' },
  { icon: '🗺️', title: 'Inaccessible Shelter Data', desc: 'People could not locate nearby shelters or hospitals during the chaos of disaster events' },
  { icon: '📞', title: 'Scattered Helplines', desc: 'Critical emergency contacts buried across dozens of different government websites' },
  { icon: '🤖', title: 'No AI-Assisted Guidance', desc: 'No way to ask questions and receive personalized, context-aware safety advice instantly' },
];
problems.forEach((p, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = 0.8 + col * 6.1;
  const y = 2.5 + row * 2.2;
  s2.addShape(pptx.ShapeType.roundRect, { x, y, w: 5.7, h: 1.8, fill: { color: CARD_BG }, line: { color: CARD_BORDER, width: 1 }, rectRadius: 0.12 });
  s2.addText(p.icon + '  ' + p.title, { x: x + 0.3, y: y + 0.25, w: 5.1, h: 0.4, fontSize: 17, fontFace: 'Arial', color: TITLE, bold: true });
  s2.addText(p.desc, { x: x + 0.3, y: y + 0.8, w: 5.1, h: 0.7, fontSize: 13, fontFace: 'Arial', color: BODY });
});

// ═══════════ SLIDE 3: OUR SOLUTION ═══════════
let s3 = pptx.addSlide();
s3.background = { color: BG };
s3.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.06, fill: { color: TEAL } });
s3.addText('OUR SOLUTION', { x: 0.8, y: 0.4, w: 4, h: 0.4, fontSize: 12, fontFace: 'Arial', color: TEAL, bold: true });
s3.addText([
  { text: 'Ctrl+Aid ', options: { color: TEAL, bold: true } },
  { text: '— One Platform for All Emergency Needs', options: { color: TITLE } },
], { x: 0.8, y: 0.9, w: 11.7, h: 0.7, fontSize: 30, fontFace: 'Arial', bold: true });

const solutions = [
  { icon: '🔴', title: 'Live Emergency Updates', desc: 'Real-time verified alerts from NDMA, PDMA, PMD, and Rescue 1122 — categorized by type and severity' },
  { icon: '🗺️', title: 'Interactive Shelter Map', desc: '12+ verified locations across Islamabad, Rawalpindi, Lahore & Karachi with capacity and status' },
  { icon: '📞', title: 'Emergency Contacts', desc: 'Searchable directory with one-tap calling — Rescue 1122, Edhi 115, Police, Fire, NDMA' },
  { icon: '🤖', title: 'AI Emergency Assistant', desc: 'Context-aware AI trained with verified Pakistani emergency data — streaming real-time guidance' },
];
solutions.forEach((p, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = 0.8 + col * 6.1;
  const y = 2.0 + row * 2.4;
  s3.addShape(pptx.ShapeType.roundRect, { x, y, w: 5.7, h: 2.0, fill: { color: TEAL_BG }, line: { color: '99F6E4', width: 1 }, rectRadius: 0.12 });
  s3.addText(p.icon + '  ' + p.title, { x: x + 0.3, y: y + 0.25, w: 5.1, h: 0.45, fontSize: 18, fontFace: 'Arial', color: TITLE, bold: true });
  s3.addText(p.desc, { x: x + 0.3, y: y + 0.85, w: 5.1, h: 0.8, fontSize: 14, fontFace: 'Arial', color: BODY });
});

// ═══════════ SLIDES 4-8: DEMO SCREENSHOTS ═══════════
const demos = [
  { title: 'Landing Page', sub: 'Premium design with animated hero, feature showcase, and impact metrics', file: 'landing.png' },
  { title: 'Live Emergency Updates', sub: 'Real-time alerts from verified sources with severity badges and category filtering', file: 'alerts.png' },
  { title: 'Shelter & Resource Map', sub: 'Interactive map with color-coded markers — Shelters (blue), Hospitals (red), Relief Camps (green)', file: 'map.png' },
  { title: 'Emergency Contacts', sub: 'Searchable directory with one-tap calling and category filters', file: 'contacts.png' },
  { title: 'AI Emergency Assistant', sub: 'Context-aware streaming AI powered by verified Pakistani emergency data', file: 'ai_chat.png' },
];
demos.forEach(d => {
  let s = pptx.addSlide();
  s.background = { color: BG };
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.06, fill: { color: TEAL } });
  s.addText('LIVE DEMO', { x: 0.5, y: 0.2, w: 2, h: 0.3, fontSize: 10, fontFace: 'Arial', color: TEAL, bold: true });
  s.addText(d.title, { x: 0.5, y: 0.45, w: 12.3, h: 0.45, fontSize: 20, fontFace: 'Arial', color: TITLE, bold: true, align: 'center' });
  s.addText(d.sub, { x: 0.5, y: 0.9, w: 12.3, h: 0.3, fontSize: 12, fontFace: 'Arial', color: MUTED, align: 'center' });
  s.addImage({ path: path.join(ssDir, d.file), x: 0.5, y: 1.35, w: 12.3, h: 5.85 });
});

// ═══════════ SLIDE 9: HOW AI POWERS IT ═══════════
let s9 = pptx.addSlide();
s9.background = { color: BG };
s9.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.06, fill: { color: TEAL } });
s9.addText('HOW AI POWERS CTRL+AID', { x: 0.8, y: 0.4, w: 11, h: 0.4, fontSize: 12, fontFace: 'Arial', color: TEAL, bold: true });
s9.addText('Not a generic chatbot — a context-aware emergency specialist', {
  x: 0.8, y: 0.9, w: 11, h: 0.6, fontSize: 28, fontFace: 'Arial', color: TITLE, bold: true,
});

const aiPoints = [
  { title: 'Trained on Real Pakistani Data', desc: 'Shelter addresses, hospital capacities, NDMA/PDMA contacts, evacuation protocols — all verified' },
  { title: 'Streaming Architecture', desc: 'Sub-second response times using Vercel AI SDK v5 transport — critical when every second counts' },
  { title: 'Context-Constrained', desc: 'AI only cites verified sources (NDMA, Rescue 1122, PDMA) — no hallucinated emergency info' },
  { title: 'Quick-Action Prompts', desc: 'Pre-built queries like "nearest shelter" and "flood safety tips" for stressed users who can\'t type' },
];
aiPoints.forEach((p, i) => {
  const y = 1.8 + i * 1.3;
  s9.addShape(pptx.ShapeType.roundRect, { x: 0.8, y, w: 11.7, h: 1.05, fill: { color: i % 2 === 0 ? TEAL_BG : CARD_BG }, line: { color: CARD_BORDER, width: 1 }, rectRadius: 0.1 });
  s9.addText('✦  ' + p.title, { x: 1.1, y: y + 0.1, w: 10, h: 0.35, fontSize: 16, fontFace: 'Arial', color: TITLE, bold: true });
  s9.addText(p.desc, { x: 1.4, y: y + 0.5, w: 10, h: 0.35, fontSize: 13, fontFace: 'Arial', color: BODY });
});

// ═══════════ SLIDE 10: TECH STACK ═══════════
let s10 = pptx.addSlide();
s10.background = { color: BG };
s10.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.06, fill: { color: TEAL } });
s10.addText('TECHNOLOGY STACK', { x: 0.8, y: 0.4, w: 4, h: 0.4, fontSize: 12, fontFace: 'Arial', color: TEAL, bold: true });
s10.addText('Modern, Production-Ready Architecture', {
  x: 0.8, y: 0.9, w: 11, h: 0.6, fontSize: 28, fontFace: 'Arial', color: TITLE, bold: true,
});

const techs = [
  { name: 'Next.js 16', desc: 'Full-stack React\nApp Router + SSR' },
  { name: 'TypeScript', desc: 'Type-safe\nZero errors' },
  { name: 'Gemini AI', desc: 'Google Gemini\n2.0 Flash' },
  { name: 'Vercel AI SDK', desc: 'v5 Streaming\nTransport' },
  { name: 'Tailwind CSS', desc: 'v4 Dark Theme\nDesign System' },
  { name: 'Framer Motion', desc: 'Smooth\nAnimations' },
  { name: 'React-Leaflet', desc: 'Interactive\nDark Maps' },
  { name: 'Vercel', desc: 'Edge-Optimized\nDeployment' },
];
techs.forEach((t, i) => {
  const col = i % 4;
  const row = Math.floor(i / 4);
  const x = 0.8 + col * 3.1;
  const y = 2.0 + row * 2.5;
  s10.addShape(pptx.ShapeType.roundRect, { x, y, w: 2.8, h: 2.0, fill: { color: CARD_BG }, line: { color: CARD_BORDER, width: 1 }, rectRadius: 0.12 });
  s10.addText(t.name, { x, y: y + 0.35, w: 2.8, h: 0.4, fontSize: 16, fontFace: 'Arial', color: TEAL, bold: true, align: 'center' });
  s10.addText(t.desc, { x, y: y + 0.9, w: 2.8, h: 0.7, fontSize: 12, fontFace: 'Arial', color: BODY, align: 'center' });
});

// ═══════════ SLIDE 11: IMPACT & SCALABILITY ═══════════
let s11 = pptx.addSlide();
s11.background = { color: BG };
s11.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.06, fill: { color: TEAL } });
s11.addText('IMPACT & SCALABILITY', { x: 0.8, y: 0.4, w: 4, h: 0.4, fontSize: 12, fontFace: 'Arial', color: TEAL, bold: true });
s11.addText('From Prototype to Pakistan\'s Emergency Portal', {
  x: 0.8, y: 0.9, w: 11, h: 0.6, fontSize: 28, fontFace: 'Arial', color: TITLE, bold: true,
});

const roadmap = [
  { phase: 'Now', title: 'Working Prototype', items: '4 integrated modules • Verified data from 5+ sources • AI assistant with real shelter data • Deployed on Vercel' },
  { phase: 'Phase 1', title: 'Real-Time Integration', items: 'NDMA/PDMA live API feeds • PMD weather warnings • Automated alert ingestion' },
  { phase: 'Phase 2', title: 'Accessibility', items: 'Multi-language: Urdu, Sindhi, Pashto • Offline-first PWA • SMS fallback gateway' },
  { phase: 'Phase 3', title: 'Scale Nationwide', items: 'Community reporting with AI verification • Government partnership • All 4 provinces covered' },
];
roadmap.forEach((r, i) => {
  const x = 0.5 + i * 3.15;
  const isCurrent = i === 0;
  s11.addShape(pptx.ShapeType.roundRect, { x, y: 1.9, w: 2.9, h: 4.5, fill: { color: isCurrent ? TEAL_BG : CARD_BG }, line: { color: isCurrent ? TEAL : CARD_BORDER, width: isCurrent ? 2 : 1 }, rectRadius: 0.12 });
  s11.addText(r.phase, { x, y: 2.1, w: 2.9, h: 0.35, fontSize: 11, fontFace: 'Arial', color: TEAL, bold: true, align: 'center' });
  s11.addText(r.title, { x, y: 2.5, w: 2.9, h: 0.5, fontSize: 15, fontFace: 'Arial', color: TITLE, bold: true, align: 'center' });
  s11.addText(r.items.split(' • ').map(s => '• ' + s).join('\n'), { x: x + 0.2, y: 3.2, w: 2.5, h: 2.8, fontSize: 12, fontFace: 'Arial', color: BODY, lineSpacingMultiple: 1.6 });
});

// ═══════════ SLIDE 12: THANK YOU ═══════════
let s12 = pptx.addSlide();
s12.background = { color: BG };
s12.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.06, fill: { color: TEAL } });
s12.addText('🛡️', { x: 5.5, y: 1.0, w: 2.3, h: 0.8, fontSize: 48, align: 'center' });
s12.addText('Ctrl+Aid', {
  x: 1.5, y: 1.8, w: 10.3, h: 1.0, align: 'center',
  fontSize: 56, fontFace: 'Arial', color: TEAL, bold: true,
});
s12.addText('Because access to information saves lives.', {
  x: 2, y: 2.9, w: 9.3, h: 0.6, align: 'center',
  fontSize: 22, fontFace: 'Arial', color: BODY, italic: true,
});
s12.addShape(pptx.ShapeType.rect, { x: 4, y: 3.8, w: 5.3, h: 0.02, fill: { color: 'E2E8F0' } });
s12.addText('🔗  ctrl-aid.vercel.app', { x: 2, y: 4.2, w: 9.3, h: 0.4, fontSize: 18, fontFace: 'Arial', color: TEAL, align: 'center', bold: true });
s12.addText('📂  github.com/Fastian-afk/ctrl-aid', { x: 2, y: 4.7, w: 9.3, h: 0.4, fontSize: 16, fontFace: 'Arial', color: MUTED, align: 'center' });
s12.addText('Thank you!', { x: 2, y: 5.6, w: 9.3, h: 0.5, fontSize: 24, fontFace: 'Arial', color: TITLE, align: 'center', bold: true });
s12.addText('AI for Civic Innovation Hackathon 2026  •  Code for Pakistan', {
  x: 2, y: 6.3, w: 9.3, h: 0.3, align: 'center',
  fontSize: 12, fontFace: 'Arial', color: MUTED,
});

const outPath = path.join(__dirname, 'Ctrl_Aid_Finals_Presentation.pptx');
pptx.writeFile({ fileName: outPath }).then(() => {
  console.log(`✅ White-background PPTX saved: ${outPath}`);
  console.log(`   12 slides, judge-ready format`);
}).catch(err => console.error('Error:', err));
