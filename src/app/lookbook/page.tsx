"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const lookbookCategories = [
  "All Editorials",
  "Royal Bridal",
  "Festive Palace",
  "The Tiger Shikargah",
  "Temple Sanctuary",
  "The Living Looms"
];

const lookbookItems = [
  {
    title: "The Royal Bengal Sanctuary",
    subtitle: "Marble Terrace & Imperial Motifs",
    category: "The Tiger Shikargah",
    image: "/images/heritage/tiger_royal_palace.jpg",
    aspect: "aspect-[16/9] md:col-span-2",
  },
  {
    title: "The Crimson Heirloom",
    subtitle: "Kadhwa Bridal Brocade with Pure Gold Zari",
    category: "Royal Bridal",
    image: "/images/sarees/saree-crimson-bridal.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Twilight in the Courtyard",
    subtitle: "Brass Diyas & Marigold Festive Celebration",
    category: "Festive Palace",
    image: "/images/heritage/festive-palace-evening.jpg",
    aspect: "aspect-[16/9] md:col-span-2",
  },
  {
    title: "Temple Sanctuary Drape",
    subtitle: "Korvai Interlocking Borders in Dravidian Stone Courtyard",
    category: "Temple Sanctuary",
    image: "/images/sarees/saree-peacock-teal.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    title: "The Hand of the Master",
    subtitle: "Warp and Weft at the Wooden Pit Loom of Varanasi",
    category: "The Living Looms",
    image: "/images/craftsmanship/weaver-pit-loom.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    title: "The Private Drawing Room",
    subtitle: "Teakwood Arches & Bespoke Bridal Trousseau Salons",
    category: "Royal Bridal",
    image: "/images/boutique/flagship-salon.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Luminous Champagne Tissue",
    subtitle: "Ethereal Metallic Silk Reflecting Palace Sunlight",
    category: "Festive Palace",
    image: "/images/sarees/saree-gold-tissue.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    title: "The Rani Pink Mor-Tota",
    subtitle: "Maharashtrian Royal Court Paithani with Peacock Pallu",
    category: "Royal Bridal",
    image: "/images/sarees/saree-rani-pink.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Modern Muse Heritage",
    subtitle: "Six Yards of Timeless Banarasi Elegance",
    category: "Royal Bridal",
    image: "/images/hero/hero-right.jpg",
    aspect: "aspect-[16/9] md:col-span-2",
  }
];

export default function LookbookPage() {
  const [activeCategory, setActiveCategory] = useState("All Editorials");

  const filteredItems = activeCategory === "All Editorials"
    ? lookbookItems
    : lookbookItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1440px] mx-auto min-h-screen bg-background">
      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <p className="font-sans text-accent uppercase tracking-[0.25em] text-xs mb-4">
          Seasonal Editorial Campaigns
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
          The <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Lookbook</span>
        </h1>
        <p className="font-sans text-lg text-secondary leading-relaxed">
          Six yards transformed into living poetry. Explore our high-fashion editorial chronicles capturing royal Bengal iconography, temple sanctums, and timeless Indian grandeur.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
        {lookbookCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 text-xs font-sans uppercase tracking-[0.15em] transition-all duration-300 ${
              activeCategory === cat
                ? "bg-primary text-[#FAF9F6] border border-primary shadow-sm"
                : "bg-transparent text-secondary border border-accent/30 hover:border-accent hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {filteredItems.map((item, idx) => (
          <div 
            key={idx} 
            className={`group relative overflow-hidden bg-secondary/10 shadow-[0_15px_35px_rgba(74,26,35,0.06)] ${item.aspect}`}
          >
            <Image 
              src={item.image} 
              alt={item.title} 
              fill 
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            
            <div className="absolute inset-x-0 bottom-0 p-8 text-[#FAF9F6] flex flex-col justify-end">
              <span className="text-accent text-[11px] font-sans uppercase tracking-[0.25em] mb-2 block">
                {item.category}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#FAF9F6] mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-[#FAF9F6]/80 font-light max-w-lg mb-4">
                {item.subtitle}
              </p>
              <Link 
                href="/sarees" 
                className="inline-flex items-center gap-2 text-accent text-xs font-sans uppercase tracking-widest hover:text-[#FAF9F6] transition-colors"
              >
                <span>View Collection Details</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Private Appointment Teaser */}
      <div className="mt-28 p-12 text-center border-t border-accent/20">
        <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
          Envision Your <span className="times-italic" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Heirloom</span>
        </h2>
        <p className="font-sans text-secondary max-w-xl mx-auto mb-8 text-sm leading-relaxed">
          Every piece featured in our editorial series is available for private viewing or bespoke commissioning by appointment.
        </p>
        <Link 
          href="/bespoke" 
          className="inline-block px-8 py-4 bg-primary text-[#FAF9F6] text-xs font-sans uppercase tracking-[0.2em] font-medium hover:bg-accent hover:text-[#1A0B0E] transition-colors"
        >
          Book A Trousseau Consultation
        </Link>
      </div>
    </div>
  );
}
