"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";

export default function BoutiquePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="font-sans text-accent uppercase tracking-[0.25em] text-xs mb-4">
            The Flagship Sanctuary
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary mb-8 leading-tight">
            Visit Our <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Boutique</span>
          </h1>
          <p className="font-sans text-lg text-secondary leading-relaxed">
            Nestled within the historic heritage precinct of Colaba, Mumbai. An intimate retreat designed for slow appreciation of rare Indian textiles, bespoke draping trials, and quiet luxury.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full mb-24 shadow-[0_30px_60px_rgba(74,26,35,0.08)]">
          <Image 
            src="/images/boutique/flagship-salon.jpg" 
            alt="Darsh Collections Flagship Boutique Salon" 
            fill 
            priority
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8 md:p-16">
            <div className="text-[#FAF9F6]">
              <span className="text-accent text-xs uppercase tracking-widest block mb-2 font-sans">South Mumbai Flagship</span>
              <h2 className="font-serif text-2xl md:text-4xl">The Private Silk Drawing Room</h2>
            </div>
          </div>
        </div>

        {/* Boutique Details & Hours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="p-8 border border-accent/30 bg-card">
            <div className="flex items-center gap-4 text-accent mb-6">
              <MapPin size={24} strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-primary">Sanctuary Address</h3>
            </div>
            <p className="font-sans text-secondary leading-relaxed text-sm mb-4">
              Darsh Collections, 14 Heritage Walkway,<br />
              Near Royal Opera House, Colaba Crescent,<br />
              Mumbai, Maharashtra 400005
            </p>
            <p className="font-sans text-xs text-accent">Valet parking available for all private appointments.</p>
          </div>

          <div className="p-8 border border-accent/30 bg-card">
            <div className="flex items-center gap-4 text-accent mb-6">
              <Clock size={24} strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-primary">Visiting Hours</h3>
            </div>
            <div className="font-sans text-sm text-secondary space-y-2">
              <div className="flex justify-between">
                <span>Monday – Saturday:</span>
                <span className="text-primary font-medium">10:30 AM – 7:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-primary font-medium">12:00 PM – 6:00 PM</span>
              </div>
              <div className="pt-4 border-t border-accent/20 text-xs text-secondary">
                Private bridal salons after 8:00 PM available upon prior concierge request.
              </div>
            </div>
          </div>

          <div className="p-8 border border-accent/30 bg-card">
            <div className="flex items-center gap-4 text-accent mb-6">
              <Phone size={24} strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-primary">Private Concierge</h3>
            </div>
            <div className="font-sans text-sm text-secondary space-y-3">
              <p>Telephone: <span className="text-primary font-medium">+91 (022) 2284 9870</span></p>
              <p>WhatsApp Concierge: <span className="text-primary font-medium">+91 98201 44552</span></p>
              <p>Email: <span className="text-primary font-medium">concierge@darshcollections.com</span></p>
            </div>
          </div>
        </div>

        {/* Experience Philosophy */}
        <div className="bg-[#1A0B0E] text-[#FAF9F6] p-12 lg:p-20 border border-accent/30 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent text-xs uppercase tracking-[0.25em] font-sans block mb-4">Slow Luxury</span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
              A Museum Where <br />
              <span className="times-italic text-accent" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>You Are The Heir</span>
            </h2>
            <p className="font-sans text-[#FAF9F6]/80 text-base leading-relaxed mb-6 font-light">
              Unlike commercial showrooms with endless shelves, our salon displays only twenty-four curated drapes at any time. Each drape is presented with its artisan pedigree, loom origin certificate, and zari metallurgical purity dossier.
            </p>
            <p className="font-sans text-[#FAF9F6]/80 text-base leading-relaxed mb-8 font-light">
              Guests are invited to touch unbleached mulberry silk filaments, inspect the reverse weave of kadhwa brocades, and enjoy artisanal saffron Kahwa tea while being fitted.
            </p>
            <Link 
              href="/bespoke" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-[#1A0B0E] text-xs font-sans uppercase tracking-[0.2em] font-medium hover:bg-[#FAF9F6] transition-colors"
            >
              <span>Book A Viewing Session</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] w-full">
              <Image 
                src="/images/sarees/saree-crimson-bridal.jpg" 
                alt="Bridal drape on display" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="relative aspect-[3/4] w-full mt-8">
              <Image 
                src="/images/sarees/saree-peacock-teal.jpg" 
                alt="Temple Kanjivaram in salon" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
