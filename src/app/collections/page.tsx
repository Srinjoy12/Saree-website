import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curated Collections | Darsh Collections",
  description: "Browse our curated collections of Indian heritage weaves.",
};

const collectionsList = [
  { 
    name: "Royal Bridal Trousseau", 
    slug: "bridal", 
    image: "/images/sarees/saree-crimson-bridal.jpg", 
    desc: "Heirloom crimson and gold brocades handwoven over six months for life's sacred vows." 
  },
  { 
    name: "Kanjivaram Temple Korvai", 
    slug: "kanjivaram", 
    image: "/images/sarees/saree-peacock-teal.jpg", 
    desc: "Ancient Dravidian interlocking borders and heavy pure gold zari temple pallus." 
  },
  { 
    name: "The Shikargah Heritage", 
    slug: "shikargah", 
    image: "/images/heritage/tiger_royal_palace.jpg", 
    desc: "Honoring the royal Bengal tiger and courtly animal motifs in pure zari tapestry." 
  },
  { 
    name: "Paithani Royal Mor-Tota", 
    slug: "paithani", 
    image: "/images/sarees/saree-rani-pink.jpg", 
    desc: "Vibrant rani pink silks with kaleidoscopic hand-embroidered peacock and parrot pallus." 
  },
  { 
    name: "Ethereal Champagne Tissue", 
    slug: "tissue", 
    image: "/images/sarees/saree-gold-tissue.jpg", 
    desc: "Luminous metallic warp silks reflecting soft candlelight like molten gold." 
  },
  { 
    name: "Festive Twilight Celebrations", 
    slug: "festive", 
    image: "/images/heritage/festive-palace-evening.jpg", 
    desc: "Ceremonial sarees designed for festive Diwali and royal celebratory evenings." 
  }
];

export default function CollectionsIndex() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1440px] mx-auto min-h-screen bg-background">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <p className="font-sans text-accent uppercase tracking-[0.25em] text-xs mb-4">
          Archival Curation
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
          Curated <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Collections</span>
        </h1>
        <p className="font-sans text-lg text-secondary leading-relaxed">
          Each curation represents a distinct chapter in Indian handloom civilization. Preserved in small batches with certified pure silk and authentic zari.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
        {collectionsList.map((collection) => (
          <Link 
            key={collection.slug} 
            href={`/collections/${collection.slug}`}
            className="group cursor-pointer block"
          >
            <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-secondary/10 shadow-sm group-hover:shadow-[0_20px_40px_rgba(74,26,35,0.08)] transition-all duration-500 border border-accent/20">
              <Image 
                src={collection.image}
                alt={collection.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-primary mb-2 group-hover:text-accent transition-colors">
              {collection.name}
            </h2>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              {collection.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
