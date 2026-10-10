"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, Star, Truck, ShieldCheck, RefreshCw, Headphones, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (id: string) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const categories = [
    { name: "Silk Sarees", subtitle: "Elegant & Rich", image: "/images/sarees/saree-crimson-bridal.jpg", slug: "banarasi" },
    { name: "Cotton Sarees", subtitle: "Comfort & Class", image: "/images/blue_saree.jpg", slug: "chanderi" },
    { name: "Georgette Sarees", subtitle: "Light & Graceful", image: "/images/sarees/saree-gold-tissue.jpg", slug: "tissue" },
    { name: "Kanjivaram Sarees", subtitle: "Royal Tradition", image: "/images/sarees/saree-peacock-teal.jpg", slug: "kanjivaram" },
    { name: "Party Wear Sarees", subtitle: "For Special Moments", image: "/images/hero/hero-right.jpg", slug: "festive" },
    { name: "Handloom Sarees", subtitle: "Pure & Authentic", image: "/images/sarees/saree-1.jpg", slug: "bridal" },
  ];

  const bestSellers = [
    {
      id: "bs-1",
      name: "Royal Purple Banarasi Silk Saree",
      price: "Rs. 8,500",
      rating: 5,
      reviews: 34,
      image: "/images/hero/hero-purple-saree.jpg",
      slug: "royal-crimson-bridal-banarasi"
    },
    {
      id: "bs-2",
      name: "Meenakari Kadhwa Silk Saree",
      price: "Rs. 6,999",
      rating: 5,
      reviews: 18,
      image: "/images/green_banarasi.jpg",
      slug: "emerald-heirloom-banarasi"
    },
    {
      id: "bs-3",
      name: "Soft Georgette Floral Saree",
      price: "Rs. 4,499",
      rating: 5,
      reviews: 32,
      image: "/images/sarees/saree-rani-pink.jpg",
      slug: "rani-pink-mor-tota-paithani"
    },
    {
      id: "bs-4",
      name: "Temple Sanctuary Silk Saree",
      price: "Rs. 2,999",
      rating: 5,
      reviews: 21,
      image: "/images/sarees/saree-peacock-teal.jpg",
      slug: "temple-sanctuary-peacock-teal-kanjivaram"
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#22101E] selection:bg-[#5C1A4A]/20 selection:text-[#5C1A4A]">
      
      {/* 1. HERO SECTION (Exact Reference Layout) */}
      <section className="relative h-[90vh] sm:h-[92vh] min-h-[580px] sm:min-h-[620px] w-full flex items-center overflow-hidden bg-[#2D1225]">
        {/* Background Editorial Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero/hero-purple-saree.jpg" 
            alt="Beautiful Indian woman in royal purple Banarasi silk saree on heritage palace veranda"
            fill
            priority
            className="object-cover object-[75%_center] md:object-[right_center]"
            sizes="100vw"
          />
          {/* Subtle gradient overlay to make typography pop */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent w-full md:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-12 pt-20 sm:pt-16">
          <div className="max-w-[580px]">
            <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#EADCC8] mb-3 sm:mb-4 font-semibold">
              TIMELESS ELEGANCE
            </p>

            <h1 className="font-serif text-[38px] sm:text-[56px] md:text-[72px] lg:text-[80px] leading-[1.08] text-[#FAF9F6] mb-4 sm:mb-6">
              Beautiful <span 
                className="times-italic text-[#EADCC8] font-normal"
                style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}
              >
                Sarees
              </span> <br />
              for Every Story
            </h1>

            <p className="font-sans text-xs sm:text-[15px] md:text-[16px] text-[#FAF9F6]/85 leading-relaxed mb-6 sm:mb-8 max-w-[440px] font-light">
              From traditional handloom to modern weaves, find the perfect saree for every occasion. Handcrafted by master artisans with pure silk and authentic zari.
            </p>

            <div>
              <Link 
                href="/sarees" 
                className="inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#5C1A4A] hover:bg-[#782361] text-[#FAF9F6] font-sans text-xs uppercase tracking-[0.18em] font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px]"
              >
                <span>Shop Now</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Left Pagination (01 — 02 03) */}
        <div className="absolute bottom-6 sm:bottom-8 left-5 sm:left-6 lg:left-12 z-10">
          <div className="flex items-center gap-4 sm:gap-5 font-sans text-[11px] sm:text-xs text-[#FAF9F6]/60 tracking-widest">
            <span className="text-[#FAF9F6] font-semibold">01</span>
            <div className="w-10 sm:w-12 h-[1.5px] bg-[#FAF9F6]/30">
              <div className="w-1/2 h-full bg-[#FAF9F6]" />
            </div>
            <span>02</span>
            <span>03</span>
          </div>
        </div>

        {/* Bottom Right Carousel Controls */}
        <div className="absolute bottom-8 right-6 lg:right-12 z-10 hidden sm:flex items-center gap-3">
          <button 
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full border border-white/30 text-[#FAF9F6] flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            aria-label="Next slide"
            className="w-10 h-10 rounded-full border border-white/30 text-[#FAF9F6] flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* 2. EXPLORE OUR COLLECTIONS / SHOP BY CATEGORY (Exact Reference Layout) */}
      <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-8 sm:mb-10">
          {/* Left Title Column */}
          <div className="lg:col-span-3">
            <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#5C1A4A] font-semibold mb-1.5 sm:mb-2">
              SHOP BY CATEGORY
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#22101E] mb-2 sm:mb-3 leading-tight">
              Explore Our <br className="hidden lg:block" />
              <span 
                className="times-italic text-[#5C1A4A]"
                style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}
              >
                Collections
              </span>
            </h2>
            <p className="font-sans text-xs text-[#6F5D6B] leading-relaxed mb-3 sm:mb-4 max-w-xs">
              Discover sarees for every mood, occasion and style.
            </p>
            <Link 
              href="/collections" 
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-[#22101E] font-semibold hover:text-[#5C1A4A] transition-colors py-1"
            >
              <span>View All</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Circular Categories List */}
          <div className="lg:col-span-9 overflow-x-auto no-scrollbar py-2 -mx-5 px-5 lg:mx-0 lg:px-0">
            <div className="flex gap-4 sm:gap-8 min-w-max lg:min-w-0 justify-between">
              {categories.map((cat) => (
                <Link 
                  key={cat.name} 
                  href={`/collections/${cat.slug}`}
                  className="flex flex-col items-center group text-center w-24 sm:w-32 shrink-0"
                >
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-2.5 sm:mb-3 border-2 border-transparent group-hover:border-[#5C1A4A] p-0.5 transition-all duration-300 shadow-sm">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image 
                        src={cat.image} 
                        alt={cat.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                  </div>
                  <h3 className="font-serif text-xs sm:text-sm text-[#22101E] font-medium group-hover:text-[#5C1A4A] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="font-sans text-[9px] sm:text-[10px] text-[#6F5D6B] mt-0.5">
                    {cat.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. DUAL FEATURED BANNERS (Exact Reference Layout) */}
      <section className="py-6 sm:py-10 px-5 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Card 1: Traditional Handloom Sarees */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] min-h-[260px] sm:min-h-[300px] rounded-sm overflow-hidden shadow-md group">
            <Image 
              src="/images/hero/hero-right.jpg" 
              alt="Model in Traditional Handloom Saree" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent flex items-center p-6 sm:p-12">
              <div className="max-w-xs text-[#FAF9F6]">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#EADCC8] font-sans font-semibold mb-1.5 sm:mb-2">
                  FEATURED COLLECTION
                </p>
                <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl leading-tight mb-1.5 sm:mb-2">
                  Traditional <br />
                  <span 
                    className="times-italic text-[#EADCC8]"
                    style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}
                  >
                    Handloom
                  </span> Sarees
                </h3>
                <p className="font-sans text-xs text-[#FAF9F6]/80 mb-4 sm:mb-6 font-light">
                  Pure weaves. Timeless beauty.
                </p>
                <Link 
                  href="/collections/banarasi"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 bg-[#5C1A4A] hover:bg-[#782361] text-[#FAF9F6] text-xs font-sans uppercase tracking-wider rounded-full transition-colors min-h-[40px]"
                >
                  <span>Shop Handloom</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Banarasi Sarees (Plum & Gold Zari Fabric) */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] min-h-[260px] sm:min-h-[300px] rounded-sm overflow-hidden shadow-md group bg-[#2A0F24]">
            <Image 
              src="/images/hero/purple-zari-macro.jpg" 
              alt="Luxurious folded royal purple Banarasi silk with gold zari" 
              fill 
              className="object-cover object-right group-hover:scale-105 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A0F24]/90 via-[#2A0F24]/60 to-transparent flex items-center p-6 sm:p-12">
              <div className="max-w-xs text-[#FAF9F6]">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#EADCC8] font-sans font-semibold mb-1.5 sm:mb-2">
                  TRENDING NOW
                </p>
                <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl leading-tight mb-1.5 sm:mb-2">
                  <span 
                    className="times-italic text-[#EADCC8]"
                    style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}
                  >
                    Banarasi
                  </span> Sarees
                </h3>
                <p className="font-sans text-xs text-[#FAF9F6]/80 mb-4 sm:mb-6 font-light">
                  Rich heritage. Modern elegance.
                </p>
                <Link 
                  href="/collections/banarasi"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 border border-[#FAF9F6]/80 hover:bg-[#FAF9F6] hover:text-[#2A0F24] text-[#FAF9F6] text-xs font-sans uppercase tracking-wider rounded-full transition-colors min-h-[40px]"
                >
                  <span>Shop Banarasi</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. BEST SELLERS / LOVED BY MANY (Exact Reference Layout) */}
      <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#5C1A4A] font-semibold mb-1">
              BEST SELLERS
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#22101E]">
              Loved by <span 
                className="times-italic text-[#5C1A4A]"
                style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}
              >
                Many
              </span>
            </h2>
            <p className="font-sans text-xs text-[#6F5D6B] mt-1">
              Our most popular sarees, handpicked for you.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button 
              aria-label="Previous best sellers" 
              className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center text-[#22101E] hover:border-[#5C1A4A] hover:text-[#5C1A4A] transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              aria-label="Next best sellers" 
              className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center text-[#22101E] hover:border-[#5C1A4A] hover:text-[#5C1A4A] transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* 4 Product Cards Grid - 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {bestSellers.map((item) => (
            <div key={item.id} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              {/* Product Image */}
              <div className="relative aspect-[3/4] w-full bg-secondary/10 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                {/* Wishlist Button */}
                <button 
                  onClick={() => toggleWishlist(item.id)}
                  aria-label="Add to wishlist"
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors shadow-sm"
                >
                  <Heart 
                    size={14} 
                    className={wishlist.includes(item.id) ? "fill-red-500 text-red-500" : ""} 
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xs sm:text-base text-[#22101E] mb-0.5 sm:mb-1 line-clamp-1 group-hover:text-[#5C1A4A] transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm font-semibold text-[#22101E] mb-1 sm:mb-2">
                    {item.price}
                  </p>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-amber-500 mb-2.5 sm:mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={10} fill="currentColor" />
                    ))}
                    <span className="text-gray-400 font-sans ml-0.5">({item.reviews})</span>
                  </div>
                </div>

                {/* Add to Cart / Enquire Button */}
                <Link 
                  href={`/product/${item.slug}`}
                  className="w-full py-2 sm:py-2.5 bg-[#2B1024] hover:bg-[#5C1A4A] text-white text-[10px] sm:text-xs font-sans uppercase tracking-wider rounded-sm text-center font-medium transition-colors block min-h-[36px] flex items-center justify-center"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SPECIAL OFFER RIBBON BANNER (Exact Reference Layout) */}
      <section className="py-6 sm:py-8 px-5 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="relative aspect-[21/8] sm:aspect-[21/6] min-h-[170px] md:min-h-[180px] rounded-sm overflow-hidden bg-[#240C1F] shadow-lg flex items-center">
          {/* Background Right Side Fabric Image */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-3/5">
            <Image 
              src="/images/hero/purple-zari-macro.jpg" 
              alt="Folded silk with jasmine blossoms" 
              fill 
              className="object-cover object-right" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#240C1F] via-[#240C1F]/60 to-transparent" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 px-5 sm:px-8 md:px-16 text-[#FAF9F6]">
            <p className="text-[9px] sm:text-xs uppercase tracking-[0.25em] text-[#EADCC8] font-sans font-semibold mb-1.5 sm:mb-2">
              SPECIAL OFFER
            </p>
            <h3 className="font-serif text-xl sm:text-2xl md:text-4xl text-[#FAF9F6] mb-3 sm:mb-4">
              Get 10<span className="font-sans font-normal">%</span> Off <br className="sm:hidden" />
              <span 
                className="times-italic text-[#EADCC8]"
                style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}
              >
                on your first order
              </span>
            </h3>
            <div className="inline-block px-3.5 sm:px-5 py-1.5 sm:py-2 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm text-[11px] sm:text-xs font-sans tracking-wider text-[#FAF9F6]">
              Use Code: <strong className="text-[#EADCC8] ml-1">WELCOME10</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRUST VALUE PROPOSITIONS STRIP (Exact Reference Layout) */}
      <section className="py-10 sm:py-16 px-5 sm:px-6 lg:px-12 max-w-[1440px] mx-auto border-t border-black/10 mt-8 sm:mt-12 bg-[#FAF8F5]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-12">
          
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-[#5C1A4A] shadow-sm shrink-0">
              <Truck strokeWidth={1.5} size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#22101E]">Free Shipping</h4>
              <p className="font-sans text-[10px] sm:text-xs text-[#6F5D6B]">Orders above ₹3,000</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-[#5C1A4A] shadow-sm shrink-0">
              <ShieldCheck strokeWidth={1.5} size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#22101E]">Secure Payments</h4>
              <p className="font-sans text-[10px] sm:text-xs text-[#6F5D6B]">100% safe &amp; trusted</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-[#5C1A4A] shadow-sm shrink-0">
              <RefreshCw strokeWidth={1.5} size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#22101E]">Easy Returns</h4>
              <p className="font-sans text-[10px] sm:text-xs text-[#6F5D6B]">Hassle-free 7 days</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-[#5C1A4A] shadow-sm shrink-0">
              <Headphones strokeWidth={1.5} size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#22101E]">Dedicated Concierge</h4>
              <p className="font-sans text-[10px] sm:text-xs text-[#6F5D6B]">We&apos;re here to help</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
