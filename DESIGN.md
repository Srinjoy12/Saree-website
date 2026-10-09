# Darsh Collections - Design Brief & Sitemap

## 1. Concept
**Quiet Luxury: A Museum of Textiles Meets a Refined Boutique.**  
The website serves as a premium digital catalogue and brand footprint rather than a transactional e-commerce store. It is designed to inspire awe, emphasize the rich heritage of Indian weaves, and seamlessly guide visitors toward personal enquiries via WhatsApp or a boutique visit. The UI remains quiet and understated, allowing the vibrant textiles and intricate craftsmanship to take center stage.

## 2. References & Inspirations
1. **Sabyasachi (Heritage & Atmosphere):** We borrow the rich, unapologetic celebration of Indian heritage. The generous use of editorial imagery, deep resonant colors, and confident serif typography to create a sense of timeless luxury.
2. **Raw Mango (Minimalist Focus):** We borrow the clean, uncluttered presentation of traditional garments. The focus is entirely on the drape, the texture, and the weave against muted, non-distracting backgrounds.
3. **The Row / Khaite (Digital Editorial Layouts):** We borrow the asymmetric, staggered scrolling experiences and high-contrast typographic scales typical of Western luxury fashion, applying them to Indian traditional wear to create a modern-traditional fusion.

## 3. Color Palette
The interface operates entirely on a **Light Theme** to maintain an airy, gallery-like feel.
- **Base / Background (`#FAF9F6`)**: Warm Ivory/Cream. Used for all main page backgrounds. Soft and museum-like, avoiding stark clinical white.
- **Surface (`#FFFFFF`)**: Pure White. Used sparingly for cards, elevated elements, or overlapping images to create subtle depth.
- **Primary Text & Accents (`#4A1A23`)**: Deep Maroon/Burgundy. Replaces harsh blacks for all primary typography, borders, and main CTA buttons, grounding the design in Indian tradition.
- **Secondary Text (`#8A7D78`)**: Warm Taupe/Gray. Used for body copy, meta-information, and subtle borders.
- **Highlight Accent (`#C5A059`)**: Antique Gold. Used highly sparingly for hover states, thin divider lines, and primary call-to-action emphasis.
- **Secondary Motif (`#1B3B42`)**: Deep Peacock Teal. Used for secondary tags, subtle badges, or specific collection highlights to provide a rich contrast to the maroon and gold.

## 4. Typography
- **Headings**: `Cormorant Garamond` (or similar high-contrast elegant serif). Large, confident, and editorial.
- **Body & UI**: `Jost` (or similar clean geometric sans-serif). Highly legible, modern, and unobtrusive.
- **Type Scale**:
  - `Display / Hero`: 5rem (80px) to 7rem (112px) - responsive, tight leading (1.1).
  - `H1 (Page Titles)`: 4rem (64px).
  - `H2 (Section Titles)`: 2.5rem (40px).
  - `H3 (Card/Saree Titles)`: 1.5rem (24px).
  - `Body Large`: 1.125rem (18px) - for intros and editorial text.
  - `Body Regular`: 1rem (16px) - 1.6 leading.
  - `Small / UI`: 0.875rem (14px) - uppercase, wide tracking (0.1em) for labels and buttons.

## 5. Spacing, Radius, and Shadows
- **Spacing Scale**: Based on an 8px grid, but heavily utilizing macro-spacing for an editorial feel (e.g., `80px`, `120px`, `160px` between sections).
- **Border Radius**: `0px` (Square). Sharp, tailored, and traditional. No modern bubbly curves.
- **Shadows**: Extremely subtle. Avoid heavy drop shadows. 
  - *Hover elevation*: `box-shadow: 0 20px 40px rgba(74, 26, 35, 0.08);`
  - *Subtle depth*: `box-shadow: 0 4px 12px rgba(74, 26, 35, 0.03);`
- **Motifs**: Thin 1px antique gold zari-lines (`#C5A059`) used as section dividers instead of standard borders.

## 6. Wow Moments & Signature Concepts
1. **The Brand Reveal (Intro)**: A sub-2-second, once-per-session animation where a thin gold line draws the logo against an ivory background, then lifts away seamlessly into the hero section.
2. **Editorial Hero**: Full-bleed 16:9 imagery with open space on one side. A refined, slow-fading headline and a single "Explore the Collection" CTA. Slow, subtle scaling (Ken Burns) on the image.
3. **Asymmetric Scroll Storytelling**: The homepage uses staggered reveals (using Framer Motion). Images and text blocks scroll at slightly different speeds, breaking the rigid grid.
4. **Saree Detail Experience**: A smooth image gallery with a custom cursor-follow zoom on the fabric. The primary action is a prominent "Enquire on WhatsApp" button that pre-fills a message with the saree's name and link.
5. **Know Your Weaves**: An immersive editorial page acting like a digital magazine, detailing the history and craftsmanship of each weave with full-width imagery and close-up textures.
6. **Micro-Details**: Skeletons that pulse in antique gold, refined hover states that don't shift layout, and a polished 404 page that maintains the brand's dignity.

## 7. Sitemap
- **`/`**: Home (Brand Intro, Featured Collections, Heritage Teaser, Visit Us Teaser)
- **`/sarees`**: All Sarees (Full digital catalogue with fabric/color/occasion filters)
- **`/collections`**: Collections Index (Browse by Weave or Occasion)
  - **`/collections/[slug]`**: Specific Collection (e.g., Kanjivaram, Bridal, Festive)
- **`/product/[slug]`**: Saree Detail Page (Gallery, Fabric details, WhatsApp Enquire)
- **`/new-arrivals`**: New Arrivals
- **`/lookbook`**: Lookbook & Gallery (Styled editorial shots)
- **`/heritage`**: About / Our Story
- **`/weaves`**: Know Your Weaves (Educational editorial)
- **`/care`**: Saree Care Guide
- **`/testimonials`**: Client Diaries
- **`/faq`**: Frequently Asked Questions
- **`/contact`**: Contact / Visit the Store
- **`/wishlist`**: Saved Sarees (Local storage based)
- **`/privacy`**: Privacy Policy
- **`/terms`**: Terms & Conditions
