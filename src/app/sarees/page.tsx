"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import SareeCard from "@/components/SareeCard";

export default function SareesPage() {
  const [activeFabric, setActiveFabric] = useState<string | null>(null);
  const [activeOccasion, setActiveOccasion] = useState<string | null>(null);

  // Extract unique filters
  const fabrics = Array.from(new Set(products.map(p => p.fabric)));
  const occasions = Array.from(new Set(products.map(p => p.occasion)));

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchFabric = activeFabric ? p.fabric === activeFabric : true;
      const matchOccasion = activeOccasion ? p.occasion === activeOccasion : true;
      return matchFabric && matchOccasion;
    });
  }, [activeFabric, activeOccasion]);

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1440px] mx-auto min-h-screen">
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-accent text-lg tracking-widest mb-4"
        >
          ✧ ❁ ✧
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl text-primary mb-4"
        >
          The <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Catalogue</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-24 h-px bg-accent/40 mx-auto mb-6"
        />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-secondary max-w-2xl mx-auto"
        >
          Explore our complete collection of handwoven masterpieces. Filter by weave or occasion to find the perfect drape for your next milestone.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-32">
            <h2 className="font-sans text-xs uppercase tracking-widest text-primary mb-6 border-b border-accent/20 pb-4">Filters</h2>
            
            {/* Fabric Filter */}
            <div className="mb-8">
              <h3 className="font-serif text-xl text-primary mb-4">Weave & Fabric</h3>
              <ul className="flex flex-col gap-3 font-sans text-sm">
                <li>
                  <button 
                    onClick={() => setActiveFabric(null)}
                    className={`text-left transition-colors hover:text-accent ${activeFabric === null ? 'text-accent' : 'text-secondary'}`}
                  >
                    All Fabrics
                  </button>
                </li>
                {fabrics.map(fabric => (
                  <li key={fabric}>
                    <button 
                      onClick={() => setActiveFabric(fabric)}
                      className={`text-left transition-colors hover:text-accent ${activeFabric === fabric ? 'text-accent' : 'text-secondary'}`}
                    >
                      {fabric}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Occasion Filter */}
            <div>
              <h3 className="font-serif text-xl text-primary mb-4">Occasion</h3>
              <ul className="flex flex-col gap-3 font-sans text-sm">
                <li>
                  <button 
                    onClick={() => setActiveOccasion(null)}
                    className={`text-left transition-colors hover:text-accent ${activeOccasion === null ? 'text-accent' : 'text-secondary'}`}
                  >
                    All Occasions
                  </button>
                </li>
                {occasions.map(occ => (
                  <li key={occ}>
                    <button 
                      onClick={() => setActiveOccasion(occ)}
                      className={`text-left transition-colors hover:text-accent ${activeOccasion === occ ? 'text-accent' : 'text-secondary'}`}
                    >
                      {occ}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-center text-sm font-sans text-secondary">
            <span>Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'saree' : 'sarees'}</span>
          </div>
          
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map(product => (
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-24 text-secondary font-sans">
              No sarees found matching your criteria. Try adjusting the filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
