"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CraftsmanshipPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="font-sans text-accent uppercase tracking-[0.25em] text-xs mb-4">
            Generational Lineage
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary mb-8 leading-tight">
            The Living <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Loom</span>
          </h1>
          <p className="font-sans text-lg text-secondary leading-relaxed">
            In Varanasi and Kanchipuram, weaving is not a trade; it is a sacred meditation passed down through four hundred years of father-to-son and mother-to-daughter oral transmission.
          </p>
        </div>

        {/* Feature Weaver Shot */}
        <div className="relative aspect-[16/9] w-full mb-24 shadow-[0_30px_60px_rgba(74,26,35,0.08)]">
          <Image 
            src="/images/craftsmanship/weaver-pit-loom.jpg" 
            alt="Master artisan handloom weaver at wooden pit loom" 
            fill 
            priority
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8 md:p-16">
            <div className="text-[#FAF9F6] max-w-2xl">
              <span className="text-accent text-xs uppercase tracking-widest block mb-2 font-sans">The Pit Loom of Varanasi</span>
              <h2 className="font-serif text-2xl md:text-4xl mb-4">
                Six Months of Human Breath, <br />One Masterpiece
              </h2>
              <p className="font-sans text-sm text-[#FAF9F6]/80 font-light leading-relaxed">
                A single complex Kadhwa Banarasi requires over 450 hours at the wooden pit loom. Each motif is individually locked by hand without any loose floating threads at the reverse.
              </p>
            </div>
          </div>
        </div>

        {/* Three Pillars of Craft */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="p-8 border-t border-accent/40 bg-card">
            <span className="text-accent font-serif text-2xl block mb-4">01</span>
            <h3 className="font-serif text-2xl text-primary mb-4">Pure Mulberry Silk</h3>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              We exclusively use grade-A mulberry silk sourced directly from government-regulated sericulture centers in Karnataka and Malda. Unadulterated, unweighted, with natural luminous tensile strength.
            </p>
          </div>

          <div className="p-8 border-t border-accent/40 bg-card">
            <span className="text-accent font-serif text-2xl block mb-4">02</span>
            <h3 className="font-serif text-2xl text-primary mb-4">Certified Real Zari</h3>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              Our gold zari is crafted by electroplating pure 24-karat gold over sterling silver threads wound around a fine silk core. Unlike plastic metallic lurex, real zari never tarnishes and patinas gracefully over decades.
            </p>
          </div>

          <div className="p-8 border-t border-accent/40 bg-card">
            <span className="text-accent font-serif text-2xl block mb-4">03</span>
            <h3 className="font-serif text-2xl text-primary mb-4">The Naqsha Cards</h3>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              Every intricate hunting motif, lotus bloom, and temple spire is drafted onto punch cards by master naqshabandis. These mechanical codes preserve mathematical poetry created long before the digital age.
            </p>
          </div>
        </div>

        {/* The Bengal Tiger Shikargah Narrative */}
        <div className="bg-[#1A0B0E] text-[#FAF9F6] p-10 md:p-20 border border-accent/30 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent text-xs uppercase tracking-[0.25em] font-sans block mb-4">Iconography &amp; Mythology</span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
              The Sacred <span className="times-italic text-accent" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Tiger</span> of Bengal
            </h2>
            <p className="font-sans text-[#FAF9F6]/80 text-base leading-relaxed mb-6 font-light">
              In the royal court tradition of ancient Bengal and Awadh, the tiger was the eternal symbol of regal courage, forest divinity, and sovereignty. Royal weavers immortalized the tiger into the famed &ldquo;Shikargah&rdquo; sarees — weaving tigers amidst wild lotus ponds, flowering palash trees, and royal gazelles.
            </p>
            <p className="font-sans text-[#FAF9F6]/80 text-base leading-relaxed mb-8 font-light">
              At Darsh, our signature bridal collections continue this tribute. Every tiger motif is rendered with microscopic zari precision, capturing the spirit of India&apos;s royal wilderness.
            </p>
            <Link 
              href="/sarees" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-[#1A0B0E] text-xs font-sans uppercase tracking-[0.2em] font-medium hover:bg-[#FAF9F6] transition-colors"
            >
              <span>Explore Shikargah Weaves</span>
              <span>→</span>
            </Link>
          </div>

          <div className="relative aspect-[4/3] w-full">
            <Image 
              src="/images/heritage/tiger_royal_palace.jpg" 
              alt="The Royal Bengal Tiger resting in palace terrace" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
