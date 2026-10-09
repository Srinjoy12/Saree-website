"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeritagePage() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <p className="font-sans text-accent uppercase tracking-[0.25em] text-xs mb-4">
            A Legacy of Six Yards
          </p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary mb-8 leading-tight"
          >
            Our <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Heritage</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg text-secondary leading-relaxed"
          >
            Rooted in the ancient weaving capitals of Varanasi, Kanchipuram, and Murshidabad, Darsh Collections was founded on a singular sacred conviction: that the handloom is India&apos;s greatest living museum.
          </motion.p>
        </div>

        {/* Feature 1: The Royal Bengal Tiger & Shikargah */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">
          <div className="lg:col-span-7 relative aspect-[16/9] w-full shadow-[0_25px_50px_rgba(74,26,35,0.08)]">
            <Image 
              src="/images/heritage/tiger_royal_palace.jpg" 
              alt="Royal Bengal Tiger in Marble Palace Terrace" 
              fill 
              priority
              className="object-cover" 
            />
          </div>

          <div className="lg:col-span-5">
            <span className="text-accent text-xs font-sans uppercase tracking-[0.25em] block mb-3">Royal Iconography</span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 leading-tight">
              The Sovereign <span className="times-italic" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Spirit</span> of Bengal
            </h2>
            <p className="font-sans text-secondary leading-relaxed mb-6">
              In traditional Indian royal aesthetics, the Royal Bengal Tiger symbolizes fearless dignity, untamed grace, and regal guardianship. Historical Mughal and Awadh royal courts celebrated this majesty through the legendary <em>Shikargah</em> brocade weaves.
            </p>
            <p className="font-sans text-secondary leading-relaxed">
              At Darsh, the tiger remains our eternal muse. We work closely with master hereditary weavers to revive these complex figurative motifs with pure gold zari and fine mulberry silk.
            </p>
          </div>
        </div>

        {/* Feature 2: Generational Pit Looms */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="text-accent text-xs font-sans uppercase tracking-[0.25em] block mb-3">Slow Craftsmanship</span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 leading-tight">
              Four Centuries of <span className="times-italic" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Living Memory</span>
            </h2>
            <p className="font-sans text-secondary leading-relaxed mb-6">
              A single authentic bridal saree can take up to six months of unhurried human devotion. Sitting at wooden pit looms submerged in earthen floors, master artisans manipulate thousands of silk warp strands with mathematical intuition.
            </p>
            <p className="font-sans text-secondary leading-relaxed mb-8">
              We eliminate intermediaries, guaranteeing that master artisans receive fair remuneration and that their families continue this invaluable cultural inheritance for generations to come.
            </p>
            <Link 
              href="/craftsmanship" 
              className="inline-block border-b border-primary pb-1 text-primary font-sans text-xs uppercase tracking-widest hover:text-accent hover:border-accent transition-colors"
            >
              Discover The Loom Process →
            </Link>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative aspect-[4/3] w-full shadow-[0_25px_50px_rgba(74,26,35,0.08)]">
            <Image 
              src="/images/craftsmanship/weaver-pit-loom.jpg" 
              alt="Elderly master handloom artisan weaving on wooden pit loom" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>

        {/* Feature 3: Festive Traditions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">
          <div className="lg:col-span-7 relative aspect-[16/9] w-full shadow-[0_25px_50px_rgba(74,26,35,0.08)]">
            <Image 
              src="/images/heritage/festive-palace-evening.jpg" 
              alt="Indian palace courtyard twilight celebration with brass diyas" 
              fill 
              className="object-cover" 
            />
          </div>

          <div className="lg:col-span-5">
            <span className="text-accent text-xs font-sans uppercase tracking-[0.25em] block mb-3">Festive Season Reverence</span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 leading-tight">
              Celebrations Born in <span className="times-italic" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Light &amp; Gold</span>
            </h2>
            <p className="font-sans text-secondary leading-relaxed mb-6">
              From Diwali twilight courtyards lit by brass oil lamps to sacred wedding mandaps surrounded by fresh tuberose and marigolds, Indian textiles have always been woven for moments of divine celebration.
            </p>
            <p className="font-sans text-secondary leading-relaxed">
              When draped in a Darsh weave, one steps into this eternal continuum of light, gratitude, and ceremonial celebration.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="py-24 border-y border-accent/20 text-center max-w-4xl mx-auto mb-24">
          <h3 
            className="text-2xl md:text-4xl text-primary leading-relaxed times-italic font-normal"
            style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}
          >
            &ldquo;We believe that true luxury lies not in the fleeting logo, but in the reverent hands that shaped the garment. Every Darsh saree is an unrepeatable six-yard canvas of human ingenuity.&rdquo;
          </h3>
          <span className="text-accent text-xs uppercase tracking-widest block mt-6 font-sans">
            — The Founding Principles of Darsh Collections
          </span>
        </div>

      </div>
    </div>
  );
}
