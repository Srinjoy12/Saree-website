"use client";
import { useState, useEffect } from "react";
import { Product } from "@/data/products";
import SareeCard from "@/components/SareeCard";
import { siteConfig } from "@/config/site";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function WishlistPage() {
  const [savedSarees, setSavedSarees] = useState<Product[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loadWishlist = () => {
      const saved = JSON.parse(localStorage.getItem("darsh_wishlist") || localStorage.getItem("manohara_wishlist") || "[]");
      setSavedSarees(saved);
    };
    
    loadWishlist();
    window.addEventListener("wishlistUpdated", loadWishlist);
    return () => window.removeEventListener("wishlistUpdated", loadWishlist);
  }, []);

  if (!mounted) return null;

  const handleShare = () => {
    if (savedSarees.length === 0) return;
    
    const itemsText = savedSarees.map(p => `- ${p.name} (${p.id})`).join("%0A");
    const message = `Hello Darsh Collections, I'm interested in the following sarees from my wishlist:%0A%0A${itemsText}%0A%0ACould you let me know their availability?`;
    
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto min-h-screen">
      <div className="text-center mb-8 sm:mb-16">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-primary mb-3 sm:mb-6">Saved Sarees</h1>
        <p className="font-sans text-xs sm:text-base text-secondary max-w-2xl mx-auto">
          Your personal curation of handwoven masterpieces.
        </p>
      </div>

      {savedSarees.length > 0 ? (
        <>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6 sm:mb-8 border-b border-accent/20 pb-4">
            <span className="font-sans text-xs sm:text-sm text-secondary">
              {savedSarees.length} {savedSarees.length === 1 ? 'item' : 'items'} saved
            </span>
            <button 
              onClick={handleShare}
              className="flex items-center justify-center gap-2 text-xs font-sans font-medium uppercase tracking-[0.1em] text-primary hover:text-accent transition-colors py-2.5 px-4 bg-primary/5 sm:bg-transparent rounded-sm min-h-[44px]"
            >
              <MessageCircle size={16} />
              Share List on WhatsApp
            </button>
          </div>

          <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 gap-y-6 sm:gap-y-12">
            <AnimatePresence>
              {savedSarees.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <SareeCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </>
      ) : (
        <div className="text-center py-24 border border-dashed border-accent/30 flex flex-col items-center justify-center">
          <p className="font-serif text-2xl text-primary mb-4">Your curation is empty</p>
          <p className="font-sans text-secondary mb-8">Save your favorite weaves to view them here.</p>
          <Link 
            href="/sarees" 
            className="inline-block px-8 py-3 bg-primary text-background font-sans text-xs uppercase tracking-widest hover:bg-accent transition-colors"
          >
            Explore the Catalogue
          </Link>
        </div>
      )}
    </div>
  );
}
