"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import SareeCard from "@/components/SareeCard";
import { SlidersHorizontal, X, Check } from "lucide-react";

export default function SareesPage() {
  const [activeFabric, setActiveFabric] = useState<string | null>(null);
  const [activeOccasion, setActiveOccasion] = useState<string | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Extract unique filters
  const fabrics = Array.from(new Set(products.map(p => p.fabric)));
  const occasions = Array.from(new Set(products.map(p => p.occasion)));

  const activeFilterCount = (activeFabric ? 1 : 0) + (activeOccasion ? 1 : 0);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchFabric = activeFabric ? p.fabric === activeFabric : true;
      const matchOccasion = activeOccasion ? p.occasion === activeOccasion : true;
      return matchFabric && matchOccasion;
    });
  }, [activeFabric, activeOccasion]);

  const clearFilters = () => {
    setActiveFabric(null);
    setActiveOccasion(null);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto min-h-screen">
      <div className="text-center mb-8 sm:mb-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-accent text-base sm:text-lg tracking-widest mb-2 sm:mb-4"
        >
          ✧ ❁ ✧
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-primary mb-3 sm:mb-4"
        >
          The <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Catalogue</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-16 sm:w-24 h-px bg-accent/40 mx-auto mb-4 sm:mb-6"
        />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-xs sm:text-base text-secondary max-w-2xl mx-auto"
        >
          Explore our complete collection of handwoven masterpieces. Filter by weave or occasion to find the perfect drape for your next milestone.
        </motion.p>
      </div>

      {/* Mobile Filter Toggle & Quick Bar */}
      <div className="md:hidden mb-6 flex items-center justify-between gap-3 border-b border-accent/20 pb-4">
        <button 
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-background font-sans text-xs uppercase tracking-wider rounded-sm min-h-[44px]"
          aria-label="Filter Sarees"
        >
          <SlidersHorizontal size={14} />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="w-5 h-5 bg-accent text-primary rounded-full text-[10px] font-bold flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>

        <div className="flex items-center gap-2">
          {activeFilterCount > 0 && (
            <button 
              onClick={clearFilters}
              className="text-xs font-sans text-accent uppercase tracking-wider underline min-h-[44px] flex items-center"
            >
              Reset
            </button>
          )}
          <span className="text-xs font-sans text-secondary">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'saree' : 'sarees'}
          </span>
        </div>
      </div>

      {/* Mobile Filter Expandable Drawer/Panel */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-card border border-accent/30 p-4 mb-6 rounded-sm shadow-md"
          >
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-accent/20">
              <span className="font-serif text-lg text-primary">Filter By</span>
              <button 
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 text-secondary hover:text-primary min-w-[36px] min-h-[36px] flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mb-4">
              <span className="text-xs font-sans uppercase tracking-wider text-accent font-semibold block mb-2">Weave &amp; Fabric</span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setActiveFabric(null)}
                  className={`px-3 py-1.5 text-xs font-sans rounded-full border transition-colors ${activeFabric === null ? 'bg-primary text-background border-primary' : 'bg-background text-secondary border-black/15'}`}
                >
                  All Fabrics
                </button>
                {fabrics.map(fabric => (
                  <button
                    key={fabric}
                    onClick={() => setActiveFabric(activeFabric === fabric ? null : fabric)}
                    className={`px-3 py-1.5 text-xs font-sans rounded-full border transition-colors ${activeFabric === fabric ? 'bg-primary text-background border-primary' : 'bg-background text-secondary border-black/15'}`}
                  >
                    {fabric}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <span className="text-xs font-sans uppercase tracking-wider text-accent font-semibold block mb-2">Occasion</span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setActiveOccasion(null)}
                  className={`px-3 py-1.5 text-xs font-sans rounded-full border transition-colors ${activeOccasion === null ? 'bg-primary text-background border-primary' : 'bg-background text-secondary border-black/15'}`}
                >
                  All Occasions
                </button>
                {occasions.map(occ => (
                  <button
                    key={occ}
                    onClick={() => setActiveOccasion(activeOccasion === occ ? null : occ)}
                    className={`px-3 py-1.5 text-xs font-sans rounded-full border transition-colors ${activeOccasion === occ ? 'bg-primary text-background border-primary' : 'bg-background text-secondary border-black/15'}`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setMobileFilterOpen(false)}
              className="w-full py-2.5 bg-primary text-background text-xs font-sans uppercase tracking-widest rounded-sm font-medium mt-2 min-h-[44px]"
            >
              Apply Filters ({filteredProducts.length} Results)
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Desktop Filters Sidebar */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-32">
            <h2 className="font-sans text-xs uppercase tracking-widest text-primary mb-6 border-b border-accent/20 pb-4">Filters</h2>
            
            {/* Fabric Filter */}
            <div className="mb-8">
              <h3 className="font-serif text-xl text-primary mb-4">Weave <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>&amp;</span> Fabric</h3>
              <ul className="flex flex-col gap-3 font-sans text-sm">
                <li>
                  <button 
                    onClick={() => setActiveFabric(null)}
                    className={`text-left transition-colors hover:text-accent ${activeFabric === null ? 'text-accent font-medium' : 'text-secondary'}`}
                  >
                    All Fabrics
                  </button>
                </li>
                {fabrics.map(fabric => (
                  <li key={fabric}>
                    <button 
                      onClick={() => setActiveFabric(fabric)}
                      className={`text-left transition-colors hover:text-accent ${activeFabric === fabric ? 'text-accent font-medium' : 'text-secondary'}`}
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
                    className={`text-left transition-colors hover:text-accent ${activeOccasion === null ? 'text-accent font-medium' : 'text-secondary'}`}
                  >
                    All Occasions
                  </button>
                </li>
                {occasions.map(occ => (
                  <li key={occ}>
                    <button 
                      onClick={() => setActiveOccasion(occ)}
                      className={`text-left transition-colors hover:text-accent ${activeOccasion === occ ? 'text-accent font-medium' : 'text-secondary'}`}
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
          <div className="hidden md:flex mb-6 justify-between items-center text-sm font-sans text-secondary">
            <span>Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'saree' : 'sarees'}</span>
            {activeFilterCount > 0 && (
              <button 
                onClick={clearFilters}
                className="text-xs font-sans text-accent uppercase tracking-wider hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
          
          <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 gap-y-6 sm:gap-y-12">
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
