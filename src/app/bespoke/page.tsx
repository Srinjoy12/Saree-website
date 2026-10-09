"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BespokePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Hero Section */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <p className="font-sans text-accent uppercase tracking-[0.25em] text-xs mb-4">
            Private Commissions &amp; Trousseau
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary mb-8 leading-tight">
            The Bespoke <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Experience</span>
          </h1>
          <p className="font-sans text-lg text-secondary leading-relaxed">
            For weddings and once-in-a-lifetime milestones, we commission custom handlooms directly with master weavers in Varanasi and Kanchipuram. Tailored zari counts, bespoke color baths, and woven family monograms.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div className="relative aspect-[4/5] w-full bg-secondary/10 shadow-[0_20px_40px_rgba(74,26,35,0.08)]">
            <Image 
              src="/images/boutique/flagship-salon.jpg" 
              alt="Darsh Private Bridal Styling Salon" 
              fill 
              className="object-cover" 
              priority
            />
          </div>

          <div>
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-sans mb-3 block">Personalized Curation</span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
              Bridal Trousseau <span className="times-italic" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Consultation</span>
            </h2>
            <p className="font-sans text-secondary leading-relaxed mb-6">
              Every bride deserves an heirloom that carries generational sentiment. During your private 90-minute consultation at our South Mumbai boutique, our senior textile curators present hand-selected drapes paired with family heirloom jewelry recommendations.
            </p>
            <div className="space-y-4 pt-4 border-t border-accent/20 mb-8 font-sans text-sm text-secondary">
              <div className="flex items-start gap-4">
                <span className="text-accent text-lg">✧</span>
                <div>
                  <strong className="text-primary block font-medium">Custom Loom Commissioning</strong>
                  <span>Direct collaboration with senior master weavers for rare warp structures and custom zari patterns.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent text-lg">✧</span>
                <div>
                  <strong className="text-primary block font-medium">Certified Pure Zari &amp; Silk Mark</strong>
                  <span>Each custom saree is delivered with third-party metallurgical certification verifying real silver and gold zari purity.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent text-lg">✧</span>
                <div>
                  <strong className="text-primary block font-medium">Heirloom Monogramming</strong>
                  <span>Discreet weaving of wedding dates, initials, or couple verses along the selvedge edge in antique gold thread.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Craft Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div className="order-2 lg:order-1">
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-sans mb-3 block">Patience of Craft</span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
              From Yarn to <span className="times-italic" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Heirloom</span>
            </h2>
            <p className="font-sans text-secondary leading-relaxed mb-6">
              A bespoke saree requires unhurried devotion. The process spans 12 to 24 weeks, beginning with pure mulberry silk yarn reel inspection, natural vegetable and vat dyeing baths, and painstaking jacquard graph tracing by traditional naqshabandis.
            </p>
            <p className="font-sans text-secondary leading-relaxed mb-8">
              Throughout the weaving cycle, we document your saree&apos;s creation with milestone archival photo and video dispatches directly from the pit loom.
            </p>
            <Link 
              href="/craftsmanship" 
              className="inline-block border-b border-accent pb-1 text-primary font-sans text-xs uppercase tracking-widest hover:text-accent transition-colors"
            >
              Explore Our Weaving Lineage →
            </Link>
          </div>

          <div className="order-1 lg:order-2 relative aspect-[4/3] w-full bg-secondary/10 shadow-[0_20px_40px_rgba(74,26,35,0.08)]">
            <Image 
              src="/images/craftsmanship/weaver-pit-loom.jpg" 
              alt="Master handloom weaver crafting pure zari silk saree" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>

        {/* Appointment Booking Card */}
        <div className="bg-[#1A0B0E] text-[#FAF9F6] p-8 md:p-16 max-w-4xl mx-auto border border-accent/30 relative">
          <div className="text-center mb-12">
            <p className="text-accent text-xs uppercase tracking-[0.3em] font-sans mb-2">Reserve Your Sanctuary</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Book a Private <span className="times-italic text-accent" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Viewing</span>
            </h2>
            <p className="text-[#FAF9F6]/70 text-sm font-sans max-w-lg mx-auto">
              Sessions are available by prior appointment only at our Colaba Flagship Salon or virtually via private video consultation.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <span className="text-accent text-4xl block mb-4">✧</span>
              <h3 className="font-serif text-2xl mb-2">Enquiry Received with Honor</h3>
              <p className="text-[#FAF9F6]/80 text-sm font-sans max-w-md mx-auto">
                Our Head of Private Client Concierge will contact you within 24 hours via telephone or WhatsApp to confirm your date and preferences.
              </p>
            </div>
          ) : (
            <form 
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#FAF9F6]/70 mb-2 font-sans">Full Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Maharani Gayatri Devi" 
                  className="w-full bg-transparent border border-accent/40 px-4 py-3 text-sm text-[#FAF9F6] placeholder:text-[#FAF9F6]/30 focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#FAF9F6]/70 mb-2 font-sans">Contact Number / WhatsApp *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+91 98200 00000" 
                  className="w-full bg-transparent border border-accent/40 px-4 py-3 text-sm text-[#FAF9F6] placeholder:text-[#FAF9F6]/30 focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#FAF9F6]/70 mb-2 font-sans">Preferred Date</label>
                <input 
                  type="date" 
                  className="w-full bg-transparent border border-accent/40 px-4 py-3 text-sm text-[#FAF9F6] focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#FAF9F6]/70 mb-2 font-sans">Occasion / Weave Preference</label>
                <select className="w-full bg-[#1A0B0E] border border-accent/40 px-4 py-3 text-sm text-[#FAF9F6] focus:border-accent focus:outline-none">
                  <option>Bridal Trousseau Curation</option>
                  <option>Royal Banarasi Commission</option>
                  <option>Antique Kanjivaram Korvai</option>
                  <option>Festive Milestone Gifting</option>
                  <option>Virtual Consultation</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-widest text-[#FAF9F6]/70 mb-2 font-sans">Personal Notes or Color Preferences</label>
                <textarea 
                  rows={3} 
                  placeholder="Tell us about the celebration, wedding dates, or specific heirloom patterns you cherish..." 
                  className="w-full bg-transparent border border-accent/40 px-4 py-3 text-sm text-[#FAF9F6] placeholder:text-[#FAF9F6]/30 focus:border-accent focus:outline-none"
                />
              </div>

              <div className="md:col-span-2 text-center pt-4">
                <button 
                  type="submit"
                  className="px-10 py-4 bg-accent text-[#1A0B0E] text-xs font-sans uppercase tracking-[0.2em] font-medium hover:bg-[#FAF9F6] transition-colors"
                >
                  Request Consultation Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
