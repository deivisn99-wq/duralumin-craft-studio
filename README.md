# Precision Craftsmanship Site

PROJECT

Build a premium, single-page marketing website for Duralumin Methoxha (Punime Duralumini • Ermal Met'hoxha), an aluminum window and door fabrication/installation business in Tiranë, Albania. This is a trust-and-lead-generation site for a skilled trades business — the design should feel premium, warm, and precise (like a high-end architecture or joinery studio), not like a generic SaaS landing page.

Business info:

Name: Duralumin Methoxha (Punime Duralumini)

Owner: Ermal Met'hoxha

Location: Rruga Teodor Keko 16, Tiranë, Albania

Phone: +355 69 377 5502

Hours:Opens 8 AM Mon (standard weekday hours — placeholder, confirm full schedule)

Existing domain: duraluminmethoxha.com

Google rating: 4.9★ (28 reviews)

Category: Aluminum window fabrication & installation

LANGUAGE

Bilingual site: Albanian (default) / English (toggle). Toggle lives in the top nav, top-right, small and unobtrusive (flag-free — use "AL / EN" text toggle, not flag icons). All copy below is provided in both languages — implement full content switching, not just nav labels.

DESIGN SYSTEM

Colors:

Beige (primary background): #EDE6D6

Dark beige (secondary background / section alternation): #D8CBB0

Brown (accent, CTAs, headings): #5C4630

Deep brown (text, hover states): #3A2C1E

White: #FFFFFF

Use white and beige as alternating section backgrounds for rhythm. Brown for CTAs, icons, and section dividers. Avoid pure black — use the deep brown for all body text instead, for warmth.

Typography:

Headings: Fraunces (serif, premium, slightly warm — Google Fonts) — used for H1/H2 only

Body & UI: Inter or Manrope (clean, modern sans) — for everything else

Generous line-height (1.6+ on body), generous letter-spacing on small caps/labels

Type should feel confident and quiet — no more than 2 font weights per section

Motion (critical — read carefully):

Use scroll-triggered fade-up + slight opacity reveals (translateY 20–30px, 400–600ms, ease-out) for section content entering the viewport — subtle, not bouncy.

Hero: a slow, gentle parallax on the hero image only (max 10–15% offset) — nothing else in the hero should move on scroll.

Sticky nav that shrinks/condenses on scroll (padding + logo size reduce smoothly).

Micro-interactions on buttons and cards (soft scale 1.02 + shadow lift on hover, ~150ms) — desktop only.

On mobile: reduce animation distance and duration by ~40%, disable parallax entirely (render static hero image), and respect prefers-reduced-motion globally — check for it and fall back to instant/no animation.

No more than one animated element entering at a time per scroll step — avoid simultaneous multi-element chaos.

SITE STRUCTURE (single page, anchor-linked nav)

1. NAVIGATION (sticky)

Logo/wordmark left, links center/right: Ballina · Rreth Nesh · Pse Ne · Shërbimet · Procesi · Kërko Ofertë — with AL/EN toggle and a persistent "Telefono Tani" (Call Now) button (brown, filled) linking tel:+355693775502.

2. HERO

Full-bleed image of an installed aluminum window/facade (placeholder: use a high-quality stock aluminum-window/architecture image until Ermal supplies real project photos — flag this clearly in the code comments as a placeholder to be swapped).

Overlay gradient (dark brown, bottom-up, subtle) for text legibility.

Headline (AL): "Dritare Alumini me Precizion. Punuar për të Zgjatur." (EN): "Precision Aluminum Windows. Built to Last."

Subheadline (AL): "Prodhim dhe montim profesional i dritareve dhe dyerve prej alumini në Tiranë — cilësi e lartë, korrektësi në punë, çmimet më konkurruese në treg." (EN): "Professional fabrication and installation of aluminum windows and doors in Tiranë — premium materials, honest workmanship, the most competitive prices in the market."

Primary CTA: "Kërko Ofertë Falas" / "Get a Free Quote" → scrolls to quote section

Secondary CTA (ghost/outline button): "Shiko Punët Tona" / "See Our Work" → scrolls to Why Us

Small trust row directly under CTAs: "★ 4.9/5 · 28 vlerësime në Google"

3. ABOUT

Two-column layout: image left (workshop/craftsman at work — placeholder), text right.

(AL) "Ermal Met'hoxha dhe ekipi i tij prodhojnë dhe montojnë dritare e dyer alumini në Tiranë prej vitesh, me një reputacion të ndërtuar mbi cilësinë e materialeve dhe korrektësinë në çdo projekt. Nga apartamente familjare deri te fasada komerciale, çdo punë kryhet me precizion dhe përkushtim ndaj detajit."

(EN) "Ermal Met'hoxha and his team have been fabricating and installing aluminum windows and doors in Tiranë for years, building a reputation on material quality and honest work on every project. From family apartments to commercial façades, every job is carried out with precision and attention to detail."

Include 3 small stat/trust badges beneath: "4.9★ Google Rating" · "28+ Klientë të Kënaqur" / "28+ Happy Clients" · "Çmimet Më Konkurruese" / "Most Competitive Pricing"

4. WHY US (trust + Google reviews)

Section background: dark beige.

Intro line: "Pse na zgjedhin klientët" / "Why clients choose us"

3–4 value pillars as icon cards (brown line icons):

Cilësi Materialesh / Material Quality — high-grade aluminum profiles

Korrektësi në Punë / Reliability & Honesty — on the reviews themselves, this is the recurring theme

Çmime Konkurruese / Competitive Pricing

Përvojë e Provuar / Proven Experience

Below the pillars, a Google Reviews carousel/grid (3 visible at once, swipeable on mobile) using this real data — do not fabricate additional reviews, only use what's below and leave the component built to pull more later:

★★★★★ Alex Laska (Local Guide) — "Very high quality of materials and excellent workmanship and correctness in the work they do, with the cheapest prices on the market."

★★★★★ Alberina Morina — "Very high quality work. Reliability and correctness in service."

Ervis Kamberaj — 🥳🤩🤩 (short/emoji review — display as a simple 5-star tag without forcing text)

Include an overall rating badge: "4.9 ★★★★★ (28 Google Reviews)" with a button "Shiko të Gjitha Vlerësimet" / "See All Reviews" linking out to the actual Google Business Profile (placeholder Google Maps place link — Ermal/you to supply the exact Place ID/URL).

5. SERVICES

Grid of service cards (white background), each with icon + short title + 1-line description:

Dritare Alumini / Aluminum Windows — "Prodhim me standarde evropiane, izolim termik dhe akustik."

Dyer Alumini / Aluminum Doors — "Dyer hyrëse dhe ballkoni, dizajn modern dhe funksional."

Fasada & Ballkone / Façades & Balconies — "Zgjidhje alumini për projekte rezidenciale dhe komerciale."

Montim Profesional / Professional Installation — "Ekip i specializuar për montim të shpejtë e të saktë."

Riparime & Mirëmbajtje / Repairs & Maintenance — "Shërbim pas-shitje për çdo problem apo rregullim."

6. PROCESS ("How we work")

Horizontal (desktop) / vertical (mobile) numbered step timeline, connected by a subtle brown line that draws in on scroll:

Konsultim / Consultation — "Na kontaktoni, diskutojmë nevojat tuaja dhe marrim masat."

Ofertë / Quote — "Ju dërgojmë një ofertë të detajuar dhe transparente, pa kosto të fshehura."

Prodhim / Fabrication — "Prodhojmë dritaret/dyert sipas specifikimeve tuaja me materiale cilësore."

Montim / Installation — "Ekipi ynë kryen montimin me precizion dhe pastërti në ambientin tuaj."

Garanci & Mbështetje / Warranty & Support — "Ofrojmë garanci dhe jemi të disponueshëm për çdo nevojë të mëvonshme."

7. GET A QUOTE

Section background: brown (dark), white text — this is the highest-contrast section on the page, intentional as the conversion anchor.

Headline: "Gati për Dritaret Tuaja të Reja?" / "Ready for Your New Windows?" Subline: "Na tregoni për projektin tuaj — ju kthejmë përgjigje brenda 24 orësh." / "Tell us about your project — we'll respond within 24 hours."

Form fields: Emri / Name · Telefoni / Phone · Email (optional) · Lloji i Projektit (dropdown: Dritare / Dyer / Fasadë / Tjetër) · Mesazh / Message (textarea) Submit button: "Dërgo Kërkesën" / "Send Request"

Below the form, two direct-contact alternatives side by side:

📞 Telefono: +355 69 377 5502 (tel: link)

💬 WhatsApp (wa.me link using the same number)

8. FOOTER

Beige background. Logo/wordmark, address (Rruga Teodor Keko 16, Tiranë), phone, a small embedded Google Map pin, quick nav links, and a line: "© [current year] Duralumin Methoxha. Të gjitha të drejtat e rezervuara." / "All rights reserved."

TECHNICAL NOTES

Mobile-first responsive build; test at 375px, 768px, 1440px.

All images: use high-quality placeholder stock (aluminum windows/architecture/craftsmanship) and clearly comment {/* PLACEHOLDER — replace with real project photography */} on every image slot — real photos of Ermal's actual installed work are the single highest-leverage upgrade to this site's credibility and should replace every placeholder before launch.

tel: and https://wa.me/355693775502 links must be real and tappable on mobile.

Respect prefers-reduced-motion: reduce globally.

Lighthouse mobile performance target: 90+. Lazy-load all below-the-fold images.

Language toggle should persist via state (no page reload) and default to Albanian (al) on first load.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/764303aa-d90a-4a69-9c5c-6a75df5a6579).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
