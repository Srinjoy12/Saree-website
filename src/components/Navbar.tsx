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

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#1E0D1B]/95 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)] border-b border-[#C5A059]/20"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo with Lotus Motif & Subtitle */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-[#C5A059] text-2xl group-hover:scale-105 transition-transform duration-300">
              🪷
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-medium tracking-[0.12em] text-[#FAF9F6]">
                DARSH
              </span>
              <span className="text-[9px] font-sans tracking-[0.25em] text-[#C5A059] uppercase -mt-1">
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
          <div className="flex items-center gap-5 text-[#FAF9F6]/90">
            <button aria-label="Search" className="hover:text-[#C5A059] transition-colors">
              <Search strokeWidth={1.6} size={20} />
            </button>
            <Link href="/contact" aria-label="Account" className="hover:text-[#C5A059] transition-colors hidden sm:block">
              <User strokeWidth={1.6} size={20} />
            </Link>
            <Link href="/wishlist" aria-label="Wishlist" className="hover:text-[#C5A059] transition-colors relative">
              <Heart strokeWidth={1.6} size={20} />
            </Link>
            <Link href="/sarees" aria-label="Shopping Cart" className="hover:text-[#C5A059] transition-colors relative flex items-center">
              <ShoppingBag strokeWidth={1.6} size={20} />
              <span className="absolute -top-1.5 -right-2 bg-[#C5A059] text-[#1E0D1B] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Trigger */}
            <button 
              className="lg:hidden text-[#FAF9F6] hover:text-[#C5A059] transition-colors ml-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle Menu"
            >
              <Menu strokeWidth={1.8} size={24} />
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
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-[#1E0D1B] text-[#FAF9F6] flex flex-col pt-20 px-8"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#FAF9F6] hover:text-[#C5A059]"
              aria-label="Close menu"
            >
              <X strokeWidth={1.8} size={28} />
            </button>

            <nav className="flex flex-col gap-6 mt-6">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-[#FAF9F6]">
                Home
              </Link>
              <Link href="/sarees" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-[#FAF9F6]">
                Shop All Sarees
              </Link>
              <Link href="/collections" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-[#FAF9F6]">
                Collections
              </Link>
              <Link href="/lookbook" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-[#FAF9F6]">
                Lookbook
              </Link>
              <Link href="/heritage" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-[#FAF9F6]">
                About Our Heritage
              </Link>
              <Link href="/bespoke" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-[#FAF9F6]">
                Bespoke Bridal
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-[#FAF9F6]">
                Contact &amp; Boutique
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
