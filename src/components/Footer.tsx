"use client";
import Link from "next/link";
import { ArrowUp, ArrowRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#140812] text-[#FAF9F6] pt-20 pb-12 px-6 lg:px-12 border-t border-[#C5A059]/20 relative">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
        
        {/* Brand Column */}
        <div className="lg:col-span-4 pr-0 lg:pr-8">
          <Link href="/" className="flex items-center gap-2 mb-4 group inline-block">
            <span className="text-[#C5A059] text-2xl">🪷</span>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.12em] text-[#FAF9F6]">
                DARSH
              </span>
              <span className="text-[8px] font-sans tracking-[0.25em] text-[#C5A059] uppercase -mt-1">
                TRADITION IN EVERY DRAPE
              </span>
            </div>
          </Link>
          <p className="text-[#FAF9F6]/65 text-xs font-sans leading-relaxed mb-6 max-w-sm">
            Timeless sarees. Modern you. Discover elegance, culture and craftsmanship in every drape. Handcrafted with certified pure silk and authentic zari.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3 text-sm">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-colors">
              <span>ig</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-colors">
              <span>fb</span>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-colors">
              <span>pin</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-colors">
              <span>yt</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="font-serif text-sm text-[#FAF9F6] tracking-wider uppercase mb-5">Quick Links</h4>
          <ul className="flex flex-col gap-2.5 font-sans text-xs text-[#FAF9F6]/65">
            <li><Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link></li>
            <li><Link href="/sarees" className="hover:text-[#C5A059] transition-colors">Shop</Link></li>
            <li><Link href="/collections" className="hover:text-[#C5A059] transition-colors">Collections</Link></li>
            <li><Link href="/heritage" className="hover:text-[#C5A059] transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#C5A059] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="lg:col-span-3">
          <h4 className="font-serif text-sm text-[#FAF9F6] tracking-wider uppercase mb-5">Customer Care</h4>
          <ul className="flex flex-col gap-2.5 font-sans text-xs text-[#FAF9F6]/65">
            <li><Link href="/care" className="hover:text-[#C5A059] transition-colors">Saree Care &amp; Preservation</Link></li>
            <li><Link href="/faq" className="hover:text-[#C5A059] transition-colors">Shipping &amp; Worldwide Delivery</Link></li>
            <li><Link href="/faq" className="hover:text-[#C5A059] transition-colors">Returns &amp; Exchange Policy</Link></li>
            <li><Link href="/weaves" className="hover:text-[#C5A059] transition-colors">Silk Mark Authentication</Link></li>
            <li><Link href="/faq" className="hover:text-[#C5A059] transition-colors">FAQs</Link></li>
            <li><Link href="/terms" className="hover:text-[#C5A059] transition-colors">Terms &amp; Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Join Our Newsletter */}
        <div className="lg:col-span-3">
          <h4 className="font-serif text-sm text-[#FAF9F6] tracking-wider uppercase mb-3">Join Our Newsletter</h4>
          <p className="text-[#FAF9F6]/65 text-xs font-sans leading-relaxed mb-4">
            Be the first to know about new arrivals, exclusive festive offers, and private salon viewings.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-white/5 border border-white/15 p-1 focus-within:border-[#C5A059] transition-colors">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-none outline-none flex-1 text-xs text-[#FAF9F6] px-3 py-2 placeholder:text-[#FAF9F6]/40 font-sans"
              required
            />
            <button 
              type="submit" 
              aria-label="Subscribe to newsletter"
              className="bg-[#5C1A4A] hover:bg-[#782361] text-[#FAF9F6] p-2 transition-colors flex items-center justify-center"
            >
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto pt-8 flex items-center justify-between text-xs font-sans text-[#FAF9F6]/50">
        <p>&copy; 2026 Darsh Collections. All rights reserved.</p>
        <button 
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#FAF9F6]/70 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
