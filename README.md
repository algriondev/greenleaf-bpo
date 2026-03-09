# Green Leaf Business Connect — Next.js Website

A modern, futuristic BPO website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Add your logo
Copy your logo file to the `/public` folder as `logo.webp`:
```
public/logo.webp
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
greenleaf-bpo/
├── app/
│   ├── layout.tsx        # Root layout with fonts & metadata
│   ├── page.tsx          # Main page assembly
│   └── globals.css       # Global styles & custom CSS
├── components/
│   ├── Background.tsx    # Animated aurora + grid background
│   ├── CTABanner.tsx     # Contact / CTA section
│   ├── Cursor.tsx        # Custom magnetic cursor
│   ├── Footer.tsx        # Full footer
│   ├── GlobalPresence.tsx # World map + global stats
│   ├── Hero.tsx          # Hero section with orbit globe
│   ├── Industries.tsx    # Scrollable industry pills
│   ├── Navbar.tsx        # Sticky navbar + mobile menu
│   ├── Process.tsx       # 4-step onboarding process
│   ├── ScrollTop.tsx     # Floating scroll-to-top button
│   ├── Services.tsx      # 6-service grid
│   ├── StatsStrip.tsx    # Animated counter stats
│   ├── Testimonials.tsx  # Client testimonial cards
│   ├── Ticker.tsx        # Scrolling ticker strip
│   └── WhyUs.tsx         # Why Green Leaf section
├── hooks/
│   └── useReveal.ts      # Intersection Observer reveal hook
├── public/
│   └── logo.webp         # ← Place your logo here
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🖼️ Image Placeholders

These are marked in the UI. Replace with real photos:

| Section | What to replace |
|---------|----------------|
| `WhyUs` | Photo of your Nairobi operations floor |
| `GlobalPresence` | Interactive world map (e.g. react-simple-maps) |
| Hero orbit | Logo already embedded |

---

## 🎨 Customization

### Colors (`tailwind.config.ts`)
```ts
colors: {
  g1: '#0a2e0a',   // darkest green
  g2: '#1a5c1a',   // dark green
  g3: '#2eb82e',   // primary green
  g4: '#5ce65c',   // light green
  g5: '#a8f5a8',   // lightest green
  dark: '#060f06', // background
}
```

### Content
All text content is co-located with its component — just edit the data arrays at the top of each component file.

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework |
| `react` | UI library |
| `tailwindcss` | Utility CSS |
| `lucide-react` | Icons |
| `framer-motion` | (optional) Enhanced animations |
| `next/font` | Google Fonts (Syne + DM Sans) |

---

## 📧 Contact

**Green Leaf Business Connect Ltd**  
Email: info@greenleafbusinessconnect.com  
Location: Nairobi, Kenya
