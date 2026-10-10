"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { siteConfig } from "@/config/site";
import { Heart, ChevronRight, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function ProductClient({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({ display: 'none', backgroundPosition: '0% 0%' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = JSON.parse(localStorage.getItem("darsh_wishlist") || localStorage.getItem("manohara_wishlist") || "[]");
    setIsSaved(saved.some((p: Product) => p.id === product.id));
  }, [product.id]);

  const toggleWishlist = () => {
    const saved = JSON.parse(localStorage.getItem("darsh_wishlist") || localStorage.getItem("manohara_wishlist") || "[]");
    if (isSaved) {
      const newSaved = saved.filter((p: Product) => p.id !== product.id);
      localStorage.setItem("darsh_wishlist", JSON.stringify(newSaved));
      setIsSaved(false);
    } else {
      saved.push(product);
      localStorage.setItem("darsh_wishlist", JSON.stringify(saved));
      setIsSaved(true);
    }
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomStyle({
      display: 'block',
      backgroundPosition: `${x}% ${y}%`
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none', backgroundPosition: '0% 0%' });
  };

  const whatsappMessage = encodeURIComponent(`Hello Darsh Collections, I am interested in the ${product.name} (${product.id}). Is this available?`);
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto min-h-screen">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[11px] sm:text-xs font-sans text-secondary uppercase tracking-widest mb-6 lg:mb-12 overflow-hidden text-ellipsis whitespace-nowrap">
        <Link href="/" className="hover:text-primary transition-colors shrink-0">Home</Link>
        <ChevronRight size={14} className="shrink-0 text-secondary/60" />
        <Link href="/sarees" className="hover:text-primary transition-colors shrink-0">Sarees</Link>
        <ChevronRight size={14} className="shrink-0 text-secondary/60" />
        <span className="text-primary truncate">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Gallery Section - relative on mobile, sticky only on desktop */}
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 relative lg:sticky lg:top-32">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-x-visible no-scrollbar shrink-0 py-1">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-16 sm:w-20 aspect-[3/4] border ${activeImage === idx ? 'border-primary ring-1 ring-primary' : 'border-black/10'} transition-all shrink-0`}
                aria-label={`View image ${idx + 1}`}
              >
                <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image with Zoom */}
          <div 
            className="relative w-full aspect-[3/4] bg-secondary/10 cursor-crosshair overflow-hidden group shadow-sm"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Image 
              src={product.images[activeImage]} 
              alt={product.name}
              fill
              priority
              className="object-cover transition-opacity duration-300 md:group-hover:opacity-0"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Zoom Layer (Desktop only) */}
            <div 
              className="hidden md:block absolute inset-0 bg-no-repeat pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                backgroundImage: `url(${product.images[activeImage]})`,
                backgroundSize: '250%',
                ...zoomStyle
              }}
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col max-w-lg w-full">
          <div className="flex justify-between items-start mb-3">
            <p className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-secondary">{product.fabric} • {product.color}</p>
            {mounted && (
              <button 
                onClick={toggleWishlist} 
                className="text-primary hover:text-accent transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2" 
                aria-label="Toggle wishlist"
              >
                <Heart size={22} className={isSaved ? "fill-accent text-accent" : ""} strokeWidth={1.4} />
              </button>
            )}
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6 leading-tight">
            {product.name}
          </h1>

          <div className="mb-6 sm:mb-8">
            <p className="font-sans text-xl text-primary mb-1">
              {siteConfig.priceDisplayMode === "show" 
                ? `₹${product.price.toLocaleString('en-IN')}` 
                : siteConfig.priceDisplayMode === "request" 
                  ? "Price on request" 
                  : ""}
            </p>
            <p 
              className="text-sm font-sans text-secondary times-italic"
              style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}
            >
              {product.availability}
            </p>
          </div>

          <p className="font-sans text-secondary text-sm sm:text-base leading-relaxed mb-8 sm:mb-12">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 mb-12 sm:mb-16">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-primary text-background py-3.5 sm:py-4 font-sans text-xs sm:text-sm uppercase tracking-widest hover:bg-accent transition-colors min-h-[48px]"
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
            </a>
            <a 
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-3 w-full border border-primary text-primary py-3.5 sm:py-4 font-sans text-xs sm:text-sm uppercase tracking-widest hover:bg-primary/5 transition-colors min-h-[48px]"
            >
              <Phone size={18} />
              Call the Store
            </a>
          </div>

          {/* Accordion Details */}
          <div className="border-t border-accent/20">
            <div className="py-6 border-b border-accent/20">
              <h3 className="font-serif text-xl text-primary mb-4">The Details</h3>
              <ul className="flex flex-col gap-2 font-sans text-sm text-secondary">
                <li className="grid grid-cols-3"><span className="text-primary">Fabric</span> <span>{product.fabric}</span></li>
                <li className="grid grid-cols-3"><span className="text-primary">Color</span> <span>{product.color}</span></li>
                <li className="grid grid-cols-3"><span className="text-primary">Length</span> <span>5.5 Meters</span></li>
                <li className="grid grid-cols-3"><span className="text-primary">Blouse Piece</span> <span>Included (0.8m)</span></li>
              </ul>
            </div>
            <div className="py-6 border-b border-accent/20">
              <h3 className="font-serif text-xl text-primary mb-4">Care Instructions</h3>
              <p className="font-sans text-sm text-secondary">{product.care}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
