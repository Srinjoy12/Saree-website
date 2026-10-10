"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { siteConfig } from "@/config/site";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function SareeCard({ product }: { product: Product }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("darsh_wishlist") || localStorage.getItem("manohara_wishlist") || "[]");
    setIsSaved(saved.some((p: Product) => p.id === product.id));
  }, [product.id]);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
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
    // Dispatch custom event for navbar badge update if needed
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Link href={`/product/${product.slug}`} className="group flex flex-col cursor-pointer">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-secondary/10 mb-3 sm:mb-4 shadow-sm group-hover:shadow-[0_20px_40px_rgba(74,26,35,0.08)] transition-all duration-500">
        <Image 
          src={product.images[0]} 
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
        />
        
        {product.newArrival && (
          <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-background/90 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-primary">
            New
          </div>
        )}

        <button 
          onClick={toggleWishlist}
          className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-background/90 backdrop-blur-sm text-primary hover:text-accent transition-colors opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 shadow-sm"
          aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={16} className={isSaved ? "fill-accent text-accent" : ""} strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex flex-col gap-0.5 sm:gap-1">
        <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-secondary">{product.fabric}</p>
        <h3 className="font-serif text-sm sm:text-xl text-primary group-hover:text-accent transition-colors line-clamp-1">{product.name}</h3>
        
        <div className="mt-0.5 sm:mt-1 flex items-center justify-between">
          <p className="font-sans text-xs sm:text-sm font-medium text-primary/90">
            {siteConfig.priceDisplayMode === "show" 
              ? formatPrice(product.price) 
              : siteConfig.priceDisplayMode === "request" 
                ? "Price on request" 
                : ""}
          </p>
          <span className="font-sans text-[11px] sm:text-xs text-accent">Enquire</span>
        </div>
      </div>
    </Link>
  );
}
