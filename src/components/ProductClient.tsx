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
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1440px] mx-auto min-h-screen">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-sans text-secondary uppercase tracking-widest mb-12">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={14} />
        <Link href="/sarees" className="hover:text-primary transition-colors">Sarees</Link>
        <ChevronRight size={14} />
        <span className="text-primary truncate">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Gallery Section */}
        <div className="flex flex-col-reverse md:flex-row gap-6 sticky top-32">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-x-visible no-scrollbar shrink-0">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-20 aspect-[3/4] border ${activeImage === idx ? 'border-primary' : 'border-transparent'} transition-all`}
              >
                <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image with Zoom */}
          <div 
            className="relative w-full aspect-[3/4] bg-secondary/10 cursor-crosshair overflow-hidden group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Image 
              src={product.images[activeImage]} 
              alt={product.name}
              fill
              priority
              className="object-cover transition-opacity duration-300 group-hover:opacity-0"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Zoom Layer */}
            <div 
              className="absolute inset-0 bg-no-repeat pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                backgroundImage: `url(${product.images[activeImage]})`,
                backgroundSize: '250%',
                ...zoomStyle
              }}
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col max-w-lg">
          <div className="flex justify-between items-start mb-4">
            <p className="font-sans text-xs uppercase tracking-widest text-secondary">{product.fabric} • {product.color}</p>
            {mounted && (
              <button onClick={toggleWishlist} className="text-primary hover:text-accent transition-colors" aria-label="Toggle wishlist">
                <Heart size={24} className={isSaved ? "fill-accent text-accent" : ""} strokeWidth={1.2} />
              </button>
            )}
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">
            {product.name}
          </h1>

          <div className="mb-8">
            <p className="font-sans text-xl text-primary mb-2">
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

          <p className="font-sans text-secondary leading-relaxed mb-12">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 mb-16">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-primary text-background py-4 font-sans text-sm uppercase tracking-widest hover:bg-accent transition-colors"
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
            </a>
            <a 
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-3 w-full border border-primary text-primary py-4 font-sans text-sm uppercase tracking-widest hover:bg-primary/5 transition-colors"
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
