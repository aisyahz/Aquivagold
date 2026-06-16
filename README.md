# Aquiva Gold — Black Millenia Web Applet

A prestigious, premium React web application for Aquiva Gold’s exclusive **Black Millenia** wellness & spa therapy collection. Engineered with **React 18 + Vite + TypeScript + Tailwind CSS + Motion**, and adhering to high-contrast, editorial spa aesthetics inspired by world-class luxury houses such as Aesop, Dior Beauty, and Four Seasons Spas.

---

## 🏛️ Project Directory Structure

```bash
├── package.json               # Package declarations & bundler scripts (Vite, TSX compiler)
├── vite.config.ts             # Vite configuration with tailwindcss plugin
├── metadata.json              # Applet credentials, permissions (no camera/mic required), capabilities
├── src/
│   ├── main.tsx               # Main DOM rendering hook
│   ├── App.tsx                # Principal Application entrypoint (View Router, Lead Dialog overlay)
│   ├── index.css              # Custom font bindings, global CSS rules, and Tailwind configurations
│   ├── types.ts               # Shared TypeScript models and interface declarations
│   ├── data.ts                # Permanent product catalogs, FAQ records, and Malaysian geographic registers
│   ├── assets/                # Local graphic materials, logos, and high-resolution JPEG photography
│   └── components/            # Layout ornaments, modal frames, and sticky floating action states
│       ├── Header.tsx         # Uniform global navigation bar (Compact top-level, full drawer layout)
│       ├── Footer.tsx         # Structured corporate footnote container
│       ├── LeadPopup.tsx      # Comprehensive lead intake (Custom pre-check list, state fields & WhatsApp URL)
│       ├── StickyWhatsApp.tsx # Floating auxiliary support trigger matching spa colors
│       └── views/             # Full viewport screen renders (8 specialized sub-modules)
│           ├── HomeView.tsx           # Home ("Utama") - Hero, Bento features, summaries
│           ├── ProductsView.tsx       # Collection Grid ("Koleksi") - Dynamic detailed cards
│           ├── AdvantagesView.tsx     # Advantages ("Kelebihan") - Core botanical factors
│           ├── TestimonialsView.tsx   # Testimonials ("Testimoni") - Journey cards, video & chats
│           ├── CertificationsView.tsx # Integrity Documents ("Pensijilan & Bukti") - Filterable search
│           ├── EntrepreneursView.tsx # Partner Program ("Usahawan") - Tiers, calc & steps
│           ├── AboutView.tsx          # Brand ("Tentang Kami") - Origins, vision statement
│           └── FAQView.tsx            # Support ("FAQ") - Fully responsive category accordions
```

---

## 🔄 Core Architectural Mechanisms

### 1. View Routing & State-Based Path Syncing (SPA)
The application functions as a high-fidelity Single Page Application (SPA). To bypass unnecessary bundle overhead and ensure swift loadtimes inside sandbox iFrames, routing is maintained via explicit component switching in `src/App.tsx`.
* **State Hook:** `currentView: string`
* **Navigation Trigger:** `onNavigate(view: string)`
* **Browser Sandbox Sync:** Utilizes direct integration with `window.history.pushState` and `window.addEventListener("popstate")` allowing direct backward/forward browser button interactions.
* **Registered Views:** 
  - `"home"` ➡️ `HomeView`
  - `"koleksi"` ➡️ `ProductsView`
  - `"kelebihan"` ➡️ `AdvantagesView`
  - `"testimoni"` ➡️ `TestimonialsView`
  - `"pensijilan"` ➡️ `CertificationsView`
  - `"usahawan"` ➡️ `EntrepreneursView`
  - `"tentang-kami"` ➡️ `AboutView`
  - `"faq"` ➡️ `FAQView`

### 2. Header & Menu Drawer Logic (`src/components/Header.tsx`)
Adheres to a minimalist, uniform, responsive structure across all viewport screen dimensions.
* **Desktop & Mobile Consistency:** The full horizontal links bar is removed. The desktop, tablet, and mobile views all render a streamlined, upscale layout:
  * **Left:** Interactive *AQUIVAGOLD* typography branding linking back to `"home"`.
  * **Right:** A prominent *KONSULTASI* call-to-action button paired with a minimalist Hamburger Menu Icon (`☰`).
* **Drawer System:** Triggering the menu opens a smooth slide-out drawer from the right, constructed via `<AnimatePresence>` from `motion/react`. This drawer aggregates all 8 views in an accessible button list.
* **Accessibility features:** Supports keyboard triggers (`Escape` key event listener to close drawer) and incorporates explicit screen-reader bindings (`aria-label`, `role="dialog"`, `aria-modal="true"`).

### 3. Lead Capture & Direct WhatsApp API Intake (`src/components/LeadPopup.tsx`)
Rather than relying on remote backend datastores that can trigger security warnings, customer intake is managed via an elegant client-side multi-form dialog.
* **Workflow:**
  1. User selects either *Consultation* or is directed via *Direct Purchase* of a specific product (triggers preloading state for fields).
  2. Input variables gathered: `Full Name`, `Phone Number` (with active format validation), resident `Malaysian State` selection, `Age Cohort` (vital for 40+ audience filters), preselected product or customized combo, `Quantity`, estimated maximum `Budget Range`, and optional `Custom Notes`.
  3. Form submission automatically creates a secure, URL-encoded WhatsApp text payload directed to the official Aquiva Gold HQ number: `+601139900920`.
  4. Automatically opens in a secure browser environment using standard programmatic window handles without storing custom private data block arrays locally.

### 4. Interactive Document Center (`src/components/views/CertificationsView.tsx`)
A pristine integrity hub containing real compliance entries:
* **Search Context:** Real-time query matching against titles, certificate numbers, and metadata descriptions.
* **Category Filters:** Quick segmentation between `Halal & MeSTi`, `KKM / MOH`, and `Lab Reports / CoA`.
* **Lightbox Viewer:** Clicking any certificate card triggers an overlay containing high-resolution mock imagery, verified reference details, official registration timestamps, and a dedicated callback action allowing users to request physical PDF drafts in WhatsApp.

---

## 🎨 Visual Identity & Styling Guide

* **Color Coordinates:**
  * Background: Spa-inspired off-white and warm cream tint (`#F6F3EE`, `#FAF8F1`, `#EFEAE2`).
  * Typography: Rich charcoal black with high readability margins (`#1F1F1F`, `#2C2C2C`).
  * Embellishments & Highlights: Royal gold accent overlay tones (`#C8A75B`, hover states at `#D4B56C`).
* **Typography Hierarchy:**
  * Primary Sans (UI blocks, bodies): `Inter` - optimized for high-contrast legibility for customers aged 40+.
  * Display Serif (Headings, titles): Classic serif fonts configured with tight character tracking (`tracking-tight`) to evoke elite apothecary luxury.
  * Monotype Accents (Identifiers, state metrics): `Fira Code` / `JetBrains Mono` for metadata descriptors.
* **Mobile Hero Experience:** Specially designed to show the luxurious signature Black Millenia product imagery immediately over the top fold without scrolling (limiting top margins, setting logo, product illustration occupying 40% height viewport, followed by 2-line headline and touch-friendly CTA buttons).

---

## 📦 Typings (`src/types.ts`) & Structured Datastore (`src/data.ts`)

### `Product`
The definitive object model for the skincare catalog:
```typescript
export interface Product {
  id: string;               // Unique string identifier (e.g. 'millenia-spray')
  title: string;            // Official bold print retail naming
  category: string;         // Healing classifications (e.g. 'Semburan Penyegar Wajah & Badan')
  description: string;      // Premium product summary
  benefits: string[];       // Segmented botanical characteristics
  price: string;            // Standard ringgit pricing
  images: string[];         // Image array containing main photo and auxiliary hero background
  directions: string;       // Usage manual
  faqs: { question: string; answer: string }[]; // Nested specific FAQ questions
  reviews: { rating: number; text: string; author: string; date: string }[]; // Verified feedback
  bgClass: string;          // Individual container styling background color bindings
}
```

---

## 🚀 Build & Compile Pipeline

* **Development:** Starts local runtime container routing.
  ```bash
  npm run dev
  ```
* **Linting:** Scans source and executes standard `tsc` validation hooks to ensure total Type safety.
  ```bash
  npm run lint
  ```
* **Build:** Generates fully compiled, highly optimized client assets outputs within the `/dist` directory.
  ```bash
  npm run build
  ```
