const pptxgen = require('pptxgenjs');
const path = require('path');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5 inches
pptx.author = 'Team Ctrl+Aid';
pptx.title = 'Ctrl+Aid — AI-Powered Emergency Information Platform';
pptx.subject = 'AI for Civic Innovation Hackathon 2026';

const BG = '0A1628';
const TEAL = '2DD4BF';
const CYAN = '22D3EE';
const GRAY = '94A3B8';
const DARK_GRAY = '64748B';
const WHITE = 'FFFFFF';
const CARD_BG = '0F1D32';
const CARD_BORDER = '1E293B';

const ssDir = path.join(__dirname, 'screenshots');

// ═══════════ SLIDE 1: TITLE ═══════════
let s1 = pptx.addSlide();
s1.background = { color: BG };
s1.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: '100%', fill: { type: 'solid', color: BG } });

s1.addText('AI for Civic Innovation Hackathon 2026', {
  x: 2.5, y: 1.0, w: 8.3, h: 0.5, align: 'center',
  fontSize: 13, fontFace: 'Arial', color: TEAL, bold: true,
});
s1.addText('Ctrl+Aid', {
  x: 1.5, y: 1.8, w: 10.3, h: 1.5, align: 'center',
  fontSize: 72, fontFace: 'Arial', color: TEAL, bold: true,
});
s1.addText('AI-Powered Emergency Information Platform\nfor Pakistani Communities Facing Natural Disasters', {
  x: 2, y: 3.5, w: 9.3, h: 1.2, align: 'center',
  fontSize: 20, fontFace: 'Arial', color: GRAY, lineSpacingMultiple: 1.5,
});
s1.addText('Next.js 16  •  TypeScript  •  Google Gemini 2.0 Flash  •  Tailwind CSS v4  •  React-Leaflet  •  Vercel AI SDK v5', {
  x: 1.5, y: 5.0, w: 10.3, h: 0.5, align: 'center',
  fontSize: 11, fontFace: 'Arial', color: DARK_GRAY,
});
s1.addText('Built by Team Ctrl+Aid  •  Code for Pakistan', {
  x: 3, y: 6.2, w: 7.3, h: 0.4, align: 'center',
  fontSize: 12, fontFace: 'Arial', color: DARK_GRAY,
});

// ═══════════ SLIDE 2: THE PROBLEM ═══════════
let s2 = pptx.addSlide();
s2.background = { color: BG };
s2.addText('THE PROBLEM', { x: 0.8, y: 0.5, w: 11.7, h: 0.4, fontSize: 12, fontFace: 'Arial', color: TEAL, bold: true, letterSpacing: 3 });
s2.addText([
  { text: "During Pakistan's 2022 floods, ", options: { color: WHITE } },
  { text: "33 million people", options: { color: TEAL, bold: true } },
  { text: " were displaced", options: { color: WHITE } },
], { x: 0.8, y: 1.0, w: 11.7, h: 1.2, fontSize: 36, fontFace: 'Arial', bold: true });

const problems = [
  { icon: '📡', title: 'Fragmented Information', desc: 'No single source of verified emergency alerts during disaster events' },
  { icon: '🗺️', title: 'Inaccessible Shelter Data', desc: "People couldn't locate nearby shelters or hospitals during emergencies" },
  { icon: '📞', title: 'Scattered Contacts', desc: 'Critical helplines buried across different government websites' },
  { icon: '🤖', title: 'No AI Guidance', desc: 'No way to get personalized safety advice instantly' },
];
problems.forEach((p, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = 0.8 + col * 6.0;
  const y = 2.8 + row * 2.0;
  s2.addShape(pptx.ShapeType.roundRect, { x, y, w: 5.5, h: 1.6, fill: { color: CARD_BG }, line: { color: CARD_BORDER, width: 1 }, rectRadius: 0.15 });
  s2.addText(p.icon + '  ' + p.title, { x: x + 0.3, y: y + 0.2, w: 4.9, h: 0.4, fontSize: 16, fontFace: 'Arial', color: WHITE, bold: true });
  s2.addText(p.desc, { x: x + 0.3, y: y + 0.7, w: 4.9, h: 0.6, fontSize: 12, fontFace: 'Arial', color: DARK_GRAY });
});

// ═══════════ SLIDE 3: OUR SOLUTION ═══════════
let s3 = pptx.addSlide();
s3.background = { color: BG };
s3.addText('OUR SOLUTION', { x: 0.8, y: 0.5, w: 11.7, h: 0.4, fontSize: 12, fontFace: 'Arial', color: TEAL, bold: true, letterSpacing: 3 });
s3.addText([
  { text: 'Ctrl+Aid', options: { color: TEAL, bold: true } },
  { text: ' — Everything You Need in an Emergency', options: { color: WHITE } },
], { x: 0.8, y: 1.0, w: 11.7, h: 0.8, fontSize: 34, fontFace: 'Arial', bold: true });

const solutions = [
  { icon: '🔴', title: 'Live Emergency Updates', desc: 'Real-time verified alerts from NDMA, PDMA, PMD, Rescue 1122 with severity filtering' },
  { icon: '🗺️', title: 'Interactive Shelter Map', desc: '12+ locations across 4 cities with capacity, phone, and real-time status' },
  { icon: '📞', title: 'Emergency Contacts', desc: 'Searchable directory with one-tap calling — Rescue 1122, Edhi 115, Police 15, Fire 16' },
  { icon: '🤖', title: 'AI Emergency Assistant', desc: 'Gemini-powered streaming chat with verified shelter data and safety guidance' },
];
solutions.forEach((p, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = 0.8 + col * 6.0;
  const y = 2.2 + row * 2.2;
  s3.addShape(pptx.ShapeType.roundRect, { x, y, w: 5.5, h: 1.8, fill: { color: CARD_BG }, line: { color: CARD_BORDER, width: 1 }, rectRadius: 0.15 });
  s3.addText(p.icon + '  ' + p.title, { x: x + 0.3, y: y + 0.2, w: 4.9, h: 0.45, fontSize: 17, fontFace: 'Arial', color: WHITE, bold: true });
  s3.addText(p.desc, { x: x + 0.3, y: y + 0.75, w: 4.9, h: 0.8, fontSize: 13, fontFace: 'Arial', color: GRAY });
});

// ═══════════ SLIDE 4: DEMO - Landing Page ═══════════
let s4 = pptx.addSlide();
s4.background = { color: BG };
s4.addText('DEMO — Landing Page', { x: 0.5, y: 0.3, w: 12.3, h: 0.4, fontSize: 14, fontFace: 'Arial', color: TEAL, bold: true, align: 'center' });
s4.addText('Premium dark-themed hero with animated gradients and glassmorphism', { x: 0.5, y: 0.7, w: 12.3, h: 0.3, fontSize: 11, fontFace: 'Arial', color: DARK_GRAY, align: 'center' });
s4.addImage({ path: path.join(ssDir, 'landing.png'), x: 0.8, y: 1.2, w: 11.7, h: 5.85 });

// ═══════════ SLIDE 5: DEMO - Alerts Feed ═══════════
let s5 = pptx.addSlide();
s5.background = { color: BG };
s5.addText('DEMO — Live Emergency Updates', { x: 0.5, y: 0.3, w: 12.3, h: 0.4, fontSize: 14, fontFace: 'Arial', color: TEAL, bold: true, align: 'center' });
s5.addText('Real-time alerts from NDMA, PDMA, Rescue 1122 with severity badges and category filters', { x: 0.5, y: 0.7, w: 12.3, h: 0.3, fontSize: 11, fontFace: 'Arial', color: DARK_GRAY, align: 'center' });
s5.addImage({ path: path.join(ssDir, 'alerts.png'), x: 0.8, y: 1.2, w: 11.7, h: 5.85 });

// ═══════════ SLIDE 6: DEMO - Shelter Map ═══════════
let s6 = pptx.addSlide();
s6.background = { color: BG };
s6.addText('DEMO — Shelter & Resource Map', { x: 0.5, y: 0.3, w: 12.3, h: 0.4, fontSize: 14, fontFace: 'Arial', color: TEAL, bold: true, align: 'center' });
s6.addText('Interactive Leaflet map with color-coded markers — Shelters, Hospitals, Relief Camps', { x: 0.5, y: 0.7, w: 12.3, h: 0.3, fontSize: 11, fontFace: 'Arial', color: DARK_GRAY, align: 'center' });
s6.addImage({ path: path.join(ssDir, 'map.png'), x: 0.8, y: 1.2, w: 11.7, h: 5.85 });

// ═══════════ SLIDE 7: DEMO - Contacts ═══════════
let s7 = pptx.addSlide();
s7.background = { color: BG };
s7.addText('DEMO — Emergency Contacts', { x: 0.5, y: 0.3, w: 12.3, h: 0.4, fontSize: 14, fontFace: 'Arial', color: TEAL, bold: true, align: 'center' });
s7.addText('Searchable directory with one-tap calling and category filters', { x: 0.5, y: 0.7, w: 12.3, h: 0.3, fontSize: 11, fontFace: 'Arial', color: DARK_GRAY, align: 'center' });
s7.addImage({ path: path.join(ssDir, 'contacts.png'), x: 0.8, y: 1.2, w: 11.7, h: 5.85 });

// ═══════════ SLIDE 8: DEMO - AI Chat ═══════════
let s8 = pptx.addSlide();
s8.background = { color: BG };
s8.addText('DEMO — AI Emergency Assistant', { x: 0.5, y: 0.3, w: 12.3, h: 0.4, fontSize: 14, fontFace: 'Arial', color: TEAL, bold: true, align: 'center' });
s8.addText('Streaming Gemini AI chat with quick-action prompts and verified emergency data', { x: 0.5, y: 0.7, w: 12.3, h: 0.3, fontSize: 11, fontFace: 'Arial', color: DARK_GRAY, align: 'center' });
s8.addImage({ path: path.join(ssDir, 'ai_chat.png'), x: 0.8, y: 1.2, w: 11.7, h: 5.85 });

// ═══════════ SLIDE 9: TECH STACK ═══════════
let s9 = pptx.addSlide();
s9.background = { color: BG };
s9.addText('TECHNOLOGY STACK', { x: 0.8, y: 0.5, w: 11.7, h: 0.4, fontSize: 12, fontFace: 'Arial', color: TEAL, bold: true, letterSpacing: 3, align: 'center' });
s9.addText([
  { text: 'Built with ', options: { color: WHITE } },
  { text: 'Modern Tools', options: { color: TEAL } },
], { x: 0.8, y: 1.0, w: 11.7, h: 0.7, fontSize: 36, fontFace: 'Arial', bold: true, align: 'center' });

const techs = [
  { name: 'Next.js 16', desc: 'App Router + SSR' },
  { name: 'TypeScript', desc: 'Type-safe codebase' },
  { name: 'Gemini 2.0 Flash', desc: 'AI Assistant' },
  { name: 'Vercel AI SDK v5', desc: 'Streaming Chat' },
  { name: 'Tailwind CSS v4', desc: 'Dark Theme System' },
  { name: 'Framer Motion', desc: 'Micro-animations' },
  { name: 'React-Leaflet', desc: 'Interactive Maps' },
  { name: 'Vercel', desc: 'Edge Deployment' },
];
techs.forEach((t, i) => {
  const col = i % 4;
  const row = Math.floor(i / 4);
  const x = 0.8 + col * 3.0;
  const y = 2.2 + row * 2.2;
  s9.addShape(pptx.ShapeType.roundRect, { x, y, w: 2.7, h: 1.6, fill: { color: CARD_BG }, line: { color: CARD_BORDER, width: 1 }, rectRadius: 0.12 });
  s9.addText(t.name, { x, y: y + 0.3, w: 2.7, h: 0.4, fontSize: 15, fontFace: 'Arial', color: WHITE, bold: true, align: 'center' });
  s9.addText(t.desc, { x, y: y + 0.8, w: 2.7, h: 0.3, fontSize: 11, fontFace: 'Arial', color: DARK_GRAY, align: 'center' });
});
s9.addText('Data sourced from NDMA · PDMA · PMD · Rescue 1122', { x: 0.8, y: 6.6, w: 11.7, h: 0.3, fontSize: 11, fontFace: 'Arial', color: DARK_GRAY, align: 'center' });

// ═══════════ SLIDE 10: IMPACT ═══════════
let s10 = pptx.addSlide();
s10.background = { color: BG };
s10.addText('IMPACT & FUTURE', { x: 0.8, y: 0.5, w: 11.7, h: 0.4, fontSize: 12, fontFace: 'Arial', color: TEAL, bold: true, letterSpacing: 3, align: 'center' });
s10.addText([
  { text: 'Designed for ', options: { color: WHITE } },
  { text: 'Real Impact', options: { color: TEAL } },
], { x: 0.8, y: 1.0, w: 11.7, h: 0.7, fontSize: 36, fontFace: 'Arial', bold: true, align: 'center' });

const impacts = [
  { icon: '🌐', title: 'Multi-Language Support', desc: 'Urdu, Sindhi, Pashto for broader accessibility' },
  { icon: '📱', title: 'Offline-First PWA', desc: 'Cached shelter data — works without internet' },
  { icon: '💬', title: 'SMS Fallback', desc: 'Emergency info via SMS for low-connectivity areas' },
  { icon: '📊', title: 'Real-time APIs', desc: 'Live feeds from NDMA, PDMA, PMD' },
];
impacts.forEach((p, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = 1.8 + col * 5.5;
  const y = 2.4 + row * 2.2;
  s10.addShape(pptx.ShapeType.roundRect, { x, y, w: 4.8, h: 1.7, fill: { color: CARD_BG }, line: { color: CARD_BORDER, width: 1 }, rectRadius: 0.15 });
  s10.addText(p.icon + '  ' + p.title, { x: x + 0.3, y: y + 0.25, w: 4.2, h: 0.4, fontSize: 17, fontFace: 'Arial', color: WHITE, bold: true });
  s10.addText(p.desc, { x: x + 0.3, y: y + 0.8, w: 4.2, h: 0.5, fontSize: 13, fontFace: 'Arial', color: GRAY });
});

// ═══════════ SLIDE 11: THANK YOU ═══════════
let s11 = pptx.addSlide();
s11.background = { color: BG };
s11.addText('Thank You', { x: 0.8, y: 1.0, w: 11.7, h: 0.5, fontSize: 14, fontFace: 'Arial', color: TEAL, bold: true, align: 'center' });
s11.addText('Ctrl+Aid', { x: 0.8, y: 1.8, w: 11.7, h: 1.5, fontSize: 72, fontFace: 'Arial', color: TEAL, bold: true, align: 'center' });
s11.addText('Because access to information saves lives.', { x: 2, y: 3.5, w: 9.3, h: 0.7, fontSize: 22, fontFace: 'Arial', color: GRAY, align: 'center' });
s11.addText('🔗 Live Demo: ctrl-aid.vercel.app', { x: 2, y: 4.6, w: 9.3, h: 0.4, fontSize: 16, fontFace: 'Arial', color: GRAY, align: 'center' });
s11.addText('📂 GitHub: github.com/Fastian-afk/ctrl-aid', { x: 2, y: 5.1, w: 9.3, h: 0.4, fontSize: 16, fontFace: 'Arial', color: GRAY, align: 'center' });
s11.addText('AI for Civic Innovation Hackathon 2026 · Code for Pakistan', { x: 2, y: 6.2, w: 9.3, h: 0.4, fontSize: 12, fontFace: 'Arial', color: DARK_GRAY, align: 'center' });

// SAVE
const outPath = path.join(__dirname, 'Ctrl_Aid_Presentation.pptx');
pptx.writeFile({ fileName: outPath }).then(() => {
  console.log(`✅ PPTX saved: ${outPath}`);
}).catch(err => {
  console.error('Error:', err);
});
