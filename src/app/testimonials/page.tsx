import { Metadata } from "next";
import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Diaries & Patron Letters | Darsh Collections",
  description: "Notes and reflections from families who cherish Darsh heirlooms.",
};

const patronLetters = [
  {
    name: "Sunita Mukherji",
    location: "Kolkata & New Delhi",
    date: "November 2025",
    saree: "The Royal Crimson Bridal Banarasi",
    image: "/images/sarees/saree-crimson-bridal.jpg",
    text: "When my daughter wore the Kadhwa Banarasi for her pheras, the weight and natural sheen of the pure zari left everyone in awe. It did not feel like commercial wedding wear; it felt like wearing ancestral art. The team at Darsh treated us with unmatched reverence during our Colaba appointments.",
    type: "Bridal Family"
  },
  {
    name: "Dr. Ananya Ramanathan",
    location: "Chennai & London",
    date: "January 2026",
    saree: "Temple Sanctuary Peacock Teal Kanjivaram",
    image: "/images/sarees/saree-peacock-teal.jpg",
    text: "Finding an authentic Korvai Kanjivaram where the border is genuinely interlocked by two weavers has become nearly impossible today. Receiving the piece in London, packed in unbleached mulmul with the Silk Mark certificate, brought tears to my grandmother's eyes.",
    type: "Diaspora Patron"
  },
  {
    name: "Radhika Singhania",
    location: "South Mumbai",
    date: "February 2026",
    saree: "Champagne Gold Ethereal Tissue Silk",
    image: "/images/sarees/saree-gold-tissue.jpg",
    text: "The champagne tissue drape is unlike anything in my wardrobe. Under evening chandeliers, the metallic silk reflects ambient light with a quiet, liquid shimmer that never screams for attention. It defines quiet luxury.",
    type: "Private Salon Member"
  },
  {
    name: "Meera Deshmukh",
    location: "Pune",
    date: "March 2026",
    saree: "Rani Pink Mor-Tota Paithani",
    image: "/images/sarees/saree-rani-pink.jpg",
    text: "The peacock and parrot motifs on the pallu are hand-embroidered with such microscopic density. Wearing this for my son's thread ceremony was a tribute to my family's Maharashtrian roots. Truly a treasure.",
    type: "Heirloom Collector"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="font-sans text-accent uppercase tracking-[0.25em] text-xs mb-3">Patron Chronicles</p>
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">
            Client <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Diaries</span>
          </h1>
          <p className="font-sans text-secondary leading-relaxed">
            The truest reflection of our craftsmanship lives in the sacred celebrations and milestone vows where Darsh drapes are worn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {patronLetters.map((patron, idx) => (
            <div key={idx} className="bg-surface p-8 md:p-12 border border-accent/20 shadow-sm flex flex-col md:flex-row gap-8 items-start">
              <div className="relative w-28 h-36 flex-shrink-0 bg-secondary/10 border border-accent/30 overflow-hidden hidden sm:block">
                <Image 
                  src={patron.image} 
                  alt={patron.saree} 
                  fill 
                  className="object-cover" 
                />
              </div>

              <div className="flex-1">
                <Quote className="text-accent mb-4" size={28} opacity={0.5} />
                <p 
                  className="times-italic text-primary/90 text-base leading-relaxed mb-6 font-normal"
                  style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}
                >
                  &ldquo;{patron.text}&rdquo;
                </p>

                <div className="pt-4 border-t border-accent/20">
                  <h4 className="font-serif text-xl text-primary">{patron.name}</h4>
                  <p className="font-sans text-xs uppercase tracking-widest text-accent mt-0.5">
                    {patron.type} • {patron.location}
                  </p>
                  <p className="font-sans text-[11px] text-secondary mt-1">
                    Drape: {patron.saree} ({patron.date})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="text-center p-12 border border-accent/20 bg-card max-w-2xl mx-auto">
          <h3 className="font-serif text-3xl text-primary mb-3">
            Share Your <span className="times-italic" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Story</span>
          </h3>
          <p className="font-sans text-sm text-secondary mb-6 leading-relaxed">
            Were you draped in a Darsh handloom for your wedding or family celebration? We would be deeply honored to include your memories in our archival ledger.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-[#FAF9F6] text-xs font-sans uppercase tracking-widest hover:bg-accent hover:text-[#1A0B0E] transition-colors"
          >
            Dispatch Your Memoir
          </Link>
        </div>
      </div>
    </div>
  );
}
