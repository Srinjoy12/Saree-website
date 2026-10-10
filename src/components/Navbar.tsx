"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Heart, User, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [collectionsDropdown, setCollectionsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#1E0D1B]/95 backdrop-blur-md py-2.5 sm:py-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)] border-b border-[#C5A059]/20"
            : "bg-gradient-to-b from-black/85 via-black/45 to-transparent py-3 sm:py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo with Lotus Motif & Subtitle */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <span className="text-[#C5A059] text-xl sm:text-2xl group-hover:scale-105 transition-transform duration-300">
              🪷
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl md:text-3xl font-medium tracking-[0.12em] text-[#FAF9F6]">
                DARSH
              </span>
              <span className="text-[8px] sm:text-[9px] font-sans tracking-[0.2em] sm:tracking-[0.25em] text-[#C5A059] uppercase -mt-0.5 sm:-mt-1">
                TRADITION IN EVERY DRAPE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            <Link
              href="/"
              className="text-[13px] font-sans uppercase tracking-[0.12em] text-[#FAF9F6] relative group font-medium"
            >
              <span>Home</span>
              <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#C5A059]"></span>
            </Link>

            {/* Shop Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShopDropdown(true)}
              onMouseLeave={() => setShopDropdown(false)}
            >
              <Link
                href="/sarees"
                className="text-[13px] font-sans uppercase tracking-[0.12em] text-[#FAF9F6]/85 hover:text-[#FAF9F6] transition-colors flex items-center gap-1 font-medium py-2"
              >
                <span>Shop</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${shopDropdown ? 'rotate-180' : ''}`} />
              </Link>
              
              <AnimatePresence>
                {shopDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-48 bg-[#1E0D1B] border border-[#C5A059]/30 shadow-xl py-3 z-50"
                  >
                    <Link href="/sarees" className="block px-5 py-2 text-xs font-sans text-[#FAF9F6]/80 hover:text-[#C5A059] hover:bg-white/5 uppercase tracking-wider">
                      All Sarees
                    </Link>
                    <Link href="/new-arrivals" className="block px-5 py-2 text-xs font-sans text-[#FAF9F6]/80 hover:text-[#C5A059] hover:bg-white/5 uppercase tracking-wider">
                      New Arrivals
                    </Link>
                    <Link href="/collections/bridal" className="block px-5 py-2 text-xs font-sans text-[#FAF9F6]/80 hover:text-[#C5A059] hover:bg-white/5 uppercase tracking-wider">
                      Bridal Trousseau
                    </Link>
                    <Link href="/bespoke" className="block px-5 py-2 text-xs font-sans text-[#FAF9F6]/80 hover:text-[#C5A059] hover:bg-white/5 uppercase tracking-wider">
                      Bespoke Styling
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Collections Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCollectionsDropdown(true)}
              onMouseLeave={() => setCollectionsDropdown(false)}
            >
              <Link
                href="/collections"
                className="text-[13px] font-sans uppercase tracking-[0.12em] text-[#FAF9F6]/85 hover:text-[#FAF9F6] transition-colors flex items-center gap-1 font-medium py-2"
              >
                <span>Collections</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${collectionsDropdown ? 'rotate-180' : ''}`} />
              </Link>

              <AnimatePresence>
                {collectionsDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-52 bg-[#1E0D1B] border border-[#C5A059]/30 shadow-xl py-3 z-50"
                  >
                    <Link href="/collections/banarasi" className="block px-5 py-2 text-xs font-sans text-[#FAF9F6]/80 hover:text-[#C5A059] hover:bg-white/5 uppercase tracking-wider">
                      Banarasi Silk
                    </Link>
                    <Link href="/collections/kanjivaram" className="block px-5 py-2 text-xs font-sans text-[#FAF9F6]/80 hover:text-[#C5A059] hover:bg-white/5 uppercase tracking-wider">
                      Kanjivaram Silk
                    </Link>
                    <Link href="/collections/paithani" className="block px-5 py-2 text-xs font-sans text-[#FAF9F6]/80 hover:text-[#C5A059] hover:bg-white/5 uppercase tracking-wider">
                      Paithani
                    </Link>
                    <Link href="/collections/chanderi" className="block px-5 py-2 text-xs font-sans text-[#FAF9F6]/80 hover:text-[#C5A059] hover:bg-white/5 uppercase tracking-wider">
                      Chanderi &amp; Tissue
                    </Link>
                    <Link href="/lookbook" className="block px-5 py-2 text-xs font-sans text-[#FAF9F6]/80 hover:text-[#C5A059] hover:bg-white/5 uppercase tracking-wider">
                      Lookbook Editorial
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/heritage"
              className="text-[13px] font-sans uppercase tracking-[0.12em] text-[#FAF9F6]/85 hover:text-[#FAF9F6] transition-colors font-medium"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-[13px] font-sans uppercase tracking-[0.12em] text-[#FAF9F6]/85 hover:text-[#FAF9F6] transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Right Utility Icons (Search, Profile, Wishlist, Cart) */}
          <div className="flex items-center gap-2 sm:gap-4 text-[#FAF9F6]/90">
            <Link 
              href="/sarees" 
              aria-label="Search Catalog" 
              className="w-10 h-10 flex items-center justify-center hover:text-[#C5A059] transition-colors rounded-full"
            >
              <Search strokeWidth={1.6} size={19} />
            </Link>
            <Link 
              href="/contact" 
              aria-label="Account" 
              className="w-10 h-10 hidden sm:flex items-center justify-center hover:text-[#C5A059] transition-colors rounded-full"
            >
              <User strokeWidth={1.6} size={19} />
            </Link>
            <Link 
              href="/wishlist" 
              aria-label="Wishlist" 
              className="w-10 h-10 flex items-center justify-center hover:text-[#C5A059] transition-colors relative rounded-full"
            >
              <Heart strokeWidth={1.6} size={19} />
            </Link>
            <Link 
              href="/sarees" 
              aria-label="Shopping Cart" 
              className="w-10 h-10 flex items-center justify-center hover:text-[#C5A059] transition-colors relative rounded-full"
            >
              <ShoppingBag strokeWidth={1.6} size={19} />
              <span className="absolute top-1.5 right-1.5 bg-[#C5A059] text-[#1E0D1B] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Trigger */}
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#FAF9F6] hover:text-[#C5A059] transition-colors ml-0.5 rounded-full"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu strokeWidth={1.8} size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[60] bg-[#190916]/98 backdrop-blur-xl text-[#FAF9F6] flex flex-col justify-between overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#C5A059]/20">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5">
                <span className="text-[#C5A059] text-xl">🪷</span>
                <span className="font-serif text-xl tracking-[0.12em] text-[#FAF9F6] font-medium">
                  DARSH
                </span>
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-[#FAF9F6] hover:text-[#C5A059] rounded-full border border-white/10"
                aria-label="Close menu"
              >
                <X strokeWidth={1.8} size={22} />
              </button>
            </div>

            {/* Drawer Links */}
            <nav className="flex flex-col px-6 py-6 gap-5">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)} 
                className="font-serif text-2xl text-[#FAF9F6] hover:text-[#C5A059] transition-colors py-1 flex items-center justify-between"
              >
                <span>Home</span>
                <span className="text-xs font-sans text-secondary tracking-widest uppercase">01</span>
              </Link>
              
              <Link 
                href="/sarees" 
                onClick={() => setMobileMenuOpen(false)} 
                className="font-serif text-2xl text-[#FAF9F6] hover:text-[#C5A059] transition-colors py-1 flex items-center justify-between"
              >
                <span>Shop All Sarees</span>
                <span className="text-xs font-sans text-secondary tracking-widest uppercase">02</span>
              </Link>

              {/* Quick Collection Shortcuts */}
              <div className="py-2 border-y border-white/10 my-1">
                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#C5A059] mb-3">
                  Signature Weaves
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-sans uppercase tracking-wider text-[#FAF9F6]/80">
                  <Link href="/collections/banarasi" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 bg-white/5 rounded-sm hover:text-[#C5A059]">
                    Banarasi
                  </Link>
                  <Link href="/collections/kanjivaram" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 bg-white/5 rounded-sm hover:text-[#C5A059]">
                    Kanjivaram
                  </Link>
                  <Link href="/collections/chanderi" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 bg-white/5 rounded-sm hover:text-[#C5A059]">
                    Tissue &amp; Chanderi
                  </Link>
                  <Link href="/collections/bridal" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 bg-white/5 rounded-sm hover:text-[#C5A059]">
                    Bridal Trousseau
                  </Link>
                </div>
              </div>

              <Link 
                href="/collections" 
                onClick={() => setMobileMenuOpen(false)} 
                className="font-serif text-2xl text-[#FAF9F6] hover:text-[#C5A059] transition-colors py-1 flex items-center justify-between"
              >
                <span>All Collections</span>
                <span className="text-xs font-sans text-secondary tracking-widest uppercase">03</span>
              </Link>

              <Link 
                href="/lookbook" 
                onClick={() => setMobileMenuOpen(false)} 
                className="font-serif text-2xl text-[#FAF9F6] hover:text-[#C5A059] transition-colors py-1 flex items-center justify-between"
              >
                <span>Lookbook</span>
                <span className="text-xs font-sans text-secondary tracking-widest uppercase">04</span>
              </Link>

              <Link 
                href="/heritage" 
                onClick={() => setMobileMenuOpen(false)} 
                className="font-serif text-2xl text-[#FAF9F6] hover:text-[#C5A059] transition-colors py-1 flex items-center justify-between"
              >
                <span>Our Heritage</span>
                <span className="text-xs font-sans text-secondary tracking-widest uppercase">05</span>
              </Link>

              <Link 
                href="/bespoke" 
                onClick={() => setMobileMenuOpen(false)} 
                className="font-serif text-2xl text-[#FAF9F6] hover:text-[#C5A059] transition-colors py-1 flex items-center justify-between"
              >
                <span>Bespoke Styling</span>
                <span className="text-xs font-sans text-secondary tracking-widest uppercase">06</span>
              </Link>

              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)} 
                className="font-serif text-2xl text-[#FAF9F6] hover:text-[#C5A059] transition-colors py-1 flex items-center justify-between"
              >
                <span>Contact <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>&amp;</span> Boutique</span>
                <span className="text-xs font-sans text-secondary tracking-widest uppercase">07</span>
              </Link>
            </nav>

            {/* Drawer Bottom Concierge */}
            <div className="px-6 py-6 border-t border-white/10 bg-black/20 flex flex-col gap-3">
              <a 
                href="https://wa.me/919876543210?text=Hello%20Darsh%20Collections,%20I%20would%20like%20to%20enquire%20about%20sarees"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#5C1A4A] hover:bg-[#782361] text-[#FAF9F6] font-sans text-xs uppercase tracking-widest text-center rounded-sm font-medium transition-colors min-h-[44px] flex items-center justify-center"
              >
                WhatsApp Concierge
              </a>
              <p className="text-[11px] font-sans text-center text-[#FAF9F6]/60">
                12 Heritage Lane, Silk District • 11 AM - 8 PM
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

