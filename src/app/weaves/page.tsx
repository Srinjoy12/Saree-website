"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const weaves = [
  {
    name: "The Royal Bengal Shikargah",
    origin: "Bengal & Varanasi Court Lineage",
    image: "/images/heritage/tiger_royal_palace.jpg",
    accent: "Royal Bengal Tiger & Courtly Fauna Motifs",
    desc: "Among the most revered handloom textiles in world history. The Shikargah (hunting ground) weave depicts the Royal Bengal tiger, royal peacocks, and floral arabesques woven seamlessly into the silk field using microscopic pure gold zari jacquard graphs. A single piece requires up to six months of meticulous loom work.",
    slug: "shikargah"
  },
  {
    name: "Banarasi Katan Silk",
    origin: "Varanasi, Uttar Pradesh",
    image: "/images/sarees/saree-crimson-bridal.jpg",
    accent: "Kadhwa Hand-Twisted Zari Jaal",
    desc: "Woven in the sacred ghats of Varanasi, Banarasi silk is distinguished by its dense brocades, floral kadhwa jaal, and pure gold or silver zari work. Unlike commercial cutwork where threads float at the back, Kadhwa weaving locks each flower petal individually by hand shuttle.",
    slug: "banarasi"
  },
  {
    name: "Kanjivaram Korvai",
    origin: "Kanchipuram, Tamil Nadu",
    image: "/images/sarees/saree-peacock-teal.jpg",
    accent: "Dravidian Temple Interlock Borders",
    desc: "Renowned for its structural durability and dense mulberry silk, Kanjivaram is the undisputed queen of South Indian handlooms. The signature Korvai technique requires two weavers sitting side-by-side to interlock contrast temple borders (Gopuram motifs) with the body of the drape.",
    slug: "kanjivaram"
  },
  {
    name: "Royal Paithani",
    origin: "Paithan & Yeola, Maharashtra",
    image: "/images/sarees/saree-rani-pink.jpg",
    accent: "Mor-Tota (Peacock & Parrot) Tapestry",
    desc: "A hallmark of royal Maratha aristocracy. Handwoven on traditional tapestry looms, Paithani sarees feature brilliant natural jewel tones with oblique square designs and kaleidoscopic peacock-parrot (mor-tota) motifs rendered in untwisted silk and solid gold zari.",
    slug: "paithani"
  },
  {
    name: "Luminous Tissue & Chanderi",
    origin: "Chanderi, Madhya Pradesh",
    image: "/images/sarees/saree-gold-tissue.jpg",
    accent: "Gossamer Sheer & Molten Gold Luster",
    desc: "Revered since the Vedic period for its featherlight drape. Woven by interweaving pure silk warp with real gold zari weft, creating an ethereal translucent halo that glistens like liquid gold under royal evening chandeliers.",
    slug: "tissue"
  }
];

export default function WeavesPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="font-sans text-accent uppercase tracking-[0.25em] text-xs mb-4">
            Textile Encyclopedia
          </p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary mb-6"
          >
            Know Your <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Weaves</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-secondary text-lg max-w-2xl mx-auto leading-relaxed"
          >
            India&apos;s textile heritage is an unmatched civilizational achievement. Discover the geography, loom mechanics, and sacred iconography behind our signature master drapes.
          </motion.p>
        </div>

        {/* Master Artisan Loom Shot */}
        <div className="relative aspect-[21/9] min-h-[360px] w-full mb-32 border border-accent/40 shadow-xl overflow-hidden">
          <Image 
            src="/images/craftsmanship/weaver-pit-loom.jpg" 
            alt="Master handloom weaver working on a wooden pit loom" 
            fill 
            priority
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-black/60 flex items-center p-8 md:p-16">
            <div className="max-w-xl text-[#FAF9F6]">
              <span className="text-accent text-xs uppercase tracking-[0.3em] font-sans block mb-3">
                The Anatomy of the Loom
              </span>
              <h2 className="font-serif text-2xl md:text-4xl mb-4 leading-tight">
                Where Mathematics <br />
                Meets <span className="times-italic text-accent" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Devotion</span>
              </h2>
              <p className="font-sans text-sm text-[#FAF9F6]/85 font-light leading-relaxed">
                Before a single shuttle is thrown, weeks are spent designing naqsha graphs and setting thousands of individual warp threads on wooden reed frames.
              </p>
            </div>
          </div>
        </div>

        {/* The Weaves List */}
        <div className="flex flex-col gap-32">
          {weaves.map((weave, index) => (
            <div key={weave.name} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/5] w-full bg-secondary/10 shadow-[0_20px_40px_rgba(74,26,35,0.08)] border border-accent/20">
                  <Image 
                    src={weave.image}
                    alt={`${weave.name} weave detail`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-xs uppercase tracking-[0.25em] text-accent">
                    {weave.origin}
                  </span>
                  <span className="text-accent/60">•</span>
                  <span className="font-sans text-xs text-secondary italic">
                    {weave.accent}
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">{weave.name}</h2>
                <p className="font-sans text-secondary leading-relaxed mb-8 text-base">
                  {weave.desc}
                </p>
                <div className="flex gap-6 items-center">
                  <Link 
                    href={`/collections/${weave.slug}`}
                    className="inline-block border-b border-primary pb-1 text-primary font-sans text-xs uppercase tracking-widest hover:text-accent hover:border-accent transition-colors"
                  >
                    View {weave.name} Curations →
                  </Link>
                  <Link 
                    href="/bespoke" 
                    className="text-xs uppercase tracking-widest text-accent font-sans hover:text-primary transition-colors"
                  >
                    Commission Custom Loom
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Zari Verification Box */}
        <div className="mt-32 p-10 md:p-16 border border-accent/30 bg-[#1A0B0E] text-[#FAF9F6] max-w-4xl mx-auto text-center">
          <span className="text-accent text-xs uppercase tracking-[0.3em] font-sans block mb-3">The Connoisseur&apos;s Standard</span>
          <h3 className="font-serif text-3xl md:text-4xl mb-4">
            How to Test <span className="times-italic text-accent" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Real Zari</span>
          </h3>
          <p className="font-sans text-sm text-[#FAF9F6]/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Authentic zari uses real silver wound around pure silk and electroplated in 24k gold. When carefully burned, real silk smells of natural burnt hair and forms a crisp black bead that crushes to ash, while real silver leaves a fine metallic bead that will never melt like synthetic plastic lurex.
          </p>
          <Link 
            href="/care" 
            className="inline-block px-8 py-3.5 bg-accent text-[#1A0B0E] text-xs font-sans uppercase tracking-[0.2em] font-medium hover:bg-[#FAF9F6] transition-colors"
          >
            Read The Full Textile Care Guide
          </Link>
        </div>

      </div>
    </div>
  );
}
