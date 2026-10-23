# Design System & Architectural Design Practices
**Project:** Cocoonmail — Customer Engagement & Commerce Operating Platform  
**Document:** Global Design Guidelines (`/public/design.md`)  
**Scope:** Universal frontend design practices, architectural conventions, tokens, and UX guidelines across the application.

---

## 1. Core Design Philosophy & First Principles

The application is built around **clarity, utility, and domain authenticity**. Every interface element serves a concrete functional purpose rather than acting as decorative filler.

### The Resolution Order of Design Decisions:
1. **Function & Interactivity:** Every interactive control has an active handler or explicit state transition. Dead clicks, fake placeholder buttons, and non-functional mock controls are prohibited.
2. **Legibility & Accessibility (WCAG AA):** High contrast ratios ($\ge 4.5:1$ for normal text, $\ge 3:1$ for large headings), visible focus rings (`focus-visible`), and touch targets $\ge 44\text{px}$ on mobile surfaces.
3. **Layout Integrity & Viewport Balance:** A desktop baseline container (`max-w-7xl` / $1280\text{px}$) ensures no unexpected horizontal overflow, clipping, or unconstrained full-width text lines.
4. **Spatial Math & Harmonic Radii:** Consistent padding rules, optical balance, and geometric radius nesting ($r_{\text{inner}} = r_{\text{outer}} - \text{padding}$).
5. **Anti-AI Slop Discipline:** Rejection of generic template cliches (excessive floating glow spheres, purple glassmorphism overload, redundant badge spam, and static pill enclosures).

---

## 2. Color Palette & Token Architecture

The color strategy uses a **light-first foundation** with deliberate high-contrast dark accents to anchor enterprise authority and channel authenticity (WhatsApp green, Meta blue, Razorpay electric cobalt).

### A. Primary Brand & Accent Palette
- **Primary Cobalt / Electric Blue:**
  - `blue-600` (`#2563EB`) — Primary actions, active highlights, key navigation indicators.
  - `blue-700` (`#1D4ED8`) — Hover states and emphasized text links.
  - `blue-50` (`#EFF6FF`) — Background tint for active badges, selection rings, and card highlights.
- **WhatsApp Channel Emerald:**
  - `emerald-600` (`#059669`) / `emerald-500` (`#10B981`) — WhatsApp Business API indicators, successful states, and chat accents.
  - `#075E54` & `#25D366` — Authentic WhatsApp brand header and primary chat CTA button colors.
  - `emerald-50` (`#ECFDF5`) — High-intent conversational badges and confirmed order tags.
- **Meta Ecosystem & Intelligence Violet:**
  - `violet-600` (`#7C3AED`) / `indigo-600` (`#4F46E5`) — AI agents, automated workflows, Meta ad integrations.
  - `indigo-50` (`#EEF2FF`) — Automation canvas backgrounds and analytical highlights.
- **Warning & Operational Amber:**
  - `amber-600` (`#D97706`) / `amber-500` (`#F59E0B`) — Inventory alerts, low-stock warnings, automation conditions.
- **Destructive & Error Rose:**
  - `rose-600` (`#E11D48`) — Out-of-stock indicators, form validations, deletion prompts.

### B. Neutral Surface Hierarchy
- **Canvas Base:** `#FFFFFF` (Pure crisp white) for primary reading spaces and data dashboards.
- **Secondary Canvas:** `bg-slate-50` (`#F8FAFC`) to visually separate feature sections, code blocks, and calculators.
- **Elevated Surfaces:** White cards with hairline borders (`border-slate-200/80` or `border-slate-100`).
- **Dark Anchor Surfaces:** `bg-slate-900` (`#0F172A`) and `bg-slate-950` (`#020617`) for the footer, system diagrams, and terminal preview cards.
- **Text Contrast Tokens:**
  - Dominant Headings: `text-slate-900` (`#0F172A`)
  - Body & Descriptions: `text-slate-600` (`#475569`)
  - Subdued / Secondary Metadata: `text-slate-500` (`#64748B`)
  - Inactive / Hairline Dividers: `border-slate-200` (`#E2E8F0`)

---

## 3. Typography & Hierarchy System

Typographic pairing balances modern geometric precision for marketing with monospace clarity for financial and technical data.

### Typography Stack
- **Primary Body & Display:** `"Plus Jakarta Sans", "Plus Jakarta Sans Fallback"` (weights: 400, 500, 600, 700, 800)
  - Features high x-height, open apertures, seamless fallback metric adjustment, and excellent legibility across all displays.
- **Technical & Financial Monospace:** `JetBrains Mono` (weights: 400, 500, 600)
  - Used for order templates, SKU inventories, currency calculations, API tokens, and webhook payloads.

### Type Scale & Hierarchy
| Level | Font Size | Weight | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | `text-4xl sm:text-5xl lg:text-6xl` | `font-extrabold` (800) | `tracking-tight` (-0.025em) | Page headlines & value statements |
| **Section Title** | `text-3xl sm:text-4xl` | `font-extrabold` (800) | `tracking-tight` | Major architectural and feature headers |
| **Card / Subhead** | `text-lg sm:text-xl` | `font-bold` (700) | `tracking-normal` | Bento grid cards, modal headers |
| **Lead Paragraph** | `text-base sm:text-lg` | `font-normal` (400) | `leading-relaxed` | Hero subheaders and narrative openers |
| **Standard Body** | `text-sm` (14px) / `text-xs` (12px) | `font-normal` / `font-medium` | `leading-normal` | Feature bullet points, explanations |
| **Fine Metadata** | `text-[11px]` / `text-[10px]` | `font-semibold` / `font-bold` | `tracking-wider uppercase` | Badges, status markers, timestamps |

---

## 4. Spatial Math, Containers & Layout Geometry

Harmonic spacing and predictable math ensure components feel solid and cohesive across viewport sizes.

### A. The 8px Spatial Grid
All paddings and margins derive from multiples of 4px / 8px:
- `p-2` (8px), `p-3` (12px), `p-4` (16px), `p-6` (24px), `p-8` (32px), `p-12` (48px), `py-20` (80px).
- Container outer padding is always greater than or equal to inner child padding:
  $$\text{Padding}_{\text{outer}} \ge \text{Padding}_{\text{inner}}$$

### B. Nested Radius Math
When placing a container inside another container, inner border radiuses prevent awkward gap distortion:
$$r_{\text{inner}} = r_{\text{outer}} - \text{padding}$$
- Outer Card: `rounded-2xl` ($16\text{px}$) with `p-4` ($16\text{px}$) $\longrightarrow$ Inner element: `rounded-lg` ($8\text{px}$) or `rounded-xl` ($12\text{px}$).

### C. Button Proportion Discipline
- Horizontal padding is approximately double vertical padding:
  - Standard Button: `py-2.5 px-5` or `py-3 px-6`
  - Compact CTA: `py-2 px-4`
  - Large Hero CTA: `py-4 px-8`
- Buttons feature tactile active micro-interactions: `transform active:scale-95` or `active:scale-98`.

---

## 5. Component Patterns & Anti-Slop Discipline

### A. Zero-Pill Rule for Static Metadata
- **Bad Practice:** Encasing every tag, date, category, and feature in colored, rounded pill boxes with 1px borders.
- **Good Practice:** Unboxed metadata using clean typography, subtle weight distinctions, and typographic separators (`·` or `/`).
- **Exception:** Interactive filter chips (which can be toggled) and active status indicators (e.g., live green pulsing dot) use restrained pill structures.

### B. Elevated Cards & Containers
- Clean, tactile card surfaces with hairline borders (`border border-slate-200/80`).
- Subtle multi-layered elevation (`shadow-xs` to `shadow-md`), avoiding muddy oversized blur drops.
- Hover states provide intentional feedback: border transitions to `border-slate-300` or `border-blue-500/80` with a smooth `duration-150`.

### C. Sticky Navigation & Glassmorphism
- Top navigation features semi-transparent white backing (`bg-white/95`) with `backdrop-blur-md` and a clean bottom border (`border-b border-slate-100`).
- Dropdown mega-menus employ structured column grids with category headings, concise feature descriptions, and distinctive featured cards.

### D. Modal Windows
- Modals appear above an accessible semi-transparent backdrop (`bg-slate-950/60 backdrop-blur-xs`).
- Modals include an explicit, labeled close action (`Esc` key and top-right `X` button), preventing click-trap traps.

---

## 6. Conversational Commerce & Domain-Specific Patterns

Because Cocoonmail bridges **Enterprise Marketing Automation** with **WhatsApp Conversational Commerce**, dedicated UI guidelines apply to domain-specific components:

### A. Authentic Chat Bubbles & Order Templates
- **WhatsApp Chrome:** Uses the genuine WhatsApp olive-green header (`#075E54`) and chat canvas tone (`#ECE5DD`).
- **Dynamic Order Templates:** Itemized calculations (`Subtotal`, `Discount`, `GST 18%`, `Total`) use aligned monospace numbers to simulate official business receipts.
- **Action Buttons:** In-chat actions (such as `[Pay Now]`) replicate authentic WhatsApp interactive message buttons (`bg-[#25D366]` with clear iconography).

### B. Sequential Journey Storylines
- Sequential multi-step funnels (e.g., the 8-Step Commerce Storyline) follow a clear narrative:
  $$\text{Connect} \longrightarrow \text{Get Paid} \longrightarrow \text{Configure} \longrightarrow \text{Bring Products} \longrightarrow \text{Sell} \longrightarrow \text{Manage} \longrightarrow \text{Acquire} \longrightarrow \text{Automate}$$
- Each step features a numeric badge, a customer outcome statement, concrete bullet capabilities, and an interactive inspector state.

### C. System Architecture & Flow Diagrams
- Multi-tier system maps (Customers $\leftrightarrow$ Cocoonmail Hub $\leftrightarrow$ Meta Ecosystem $\leftrightarrow$ Payment Gateways) use dark container panels (`bg-slate-900`) with directional indicators and modular sub-cards to demonstrate real-time bidirectional synchronization.

---

## 7. Motion, Transitions & Micro-Interactions

- **Speed:** Transitions use brief durations (`150ms` to `200ms`) with `ease-out` timing curves to feel snappy and responsive.
- **Scale Feedback:** Primary buttons and interactive card selectors use slight scale depression on click (`active:scale-95`).
- **Accessibility:** Animations respect user system preferences:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

---

## 8. Responsive Design & Viewport Strategy

- **Mobile First ($<640\text{px}$):**
  - Navigation collapses into a responsive sliding drawer menu with all platform categories.
  - Multi-column grids collapse to single columns (`grid-cols-1`).
  - Minimum touch targets are strictly $\ge 44\text{px}$.
- **Tablet ($640\text{px} - 1024\text{px}$):**
  - Two-column balanced grids (`sm:grid-cols-2`).
  - Sticky sub-bars wrap gracefully without text clipping.
- **Desktop ($\ge 1024\text{px}$):**
  - Full mega-menu dropdowns with hover intent delays.
  - Multi-column capability matrices (4 to 6 columns).
  - Content width contained within `max-w-7xl` ($1280\text{px}$) with optical side gutters (`px-6` to `px-8`).
