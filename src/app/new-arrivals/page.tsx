import { products } from "@/data/products";
import SareeCard from "@/components/SareeCard";

export default function NewArrivalsPage() {
  const newSarees = products.filter(p => p.newArrival);

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1440px] mx-auto min-h-screen bg-background">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <p className="font-sans text-accent uppercase tracking-[0.25em] text-xs mb-3">Fresh Off The Wooden Loom</p>
        <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">
          New <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Arrivals</span>
        </h1>
        <p className="font-sans text-secondary leading-relaxed">
          The season&apos;s most recent completions from Varanasi, Kanchipuram, and Maharashtra. Hand-finished with Silk Mark certifications and pure gold zari borders.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
        {newSarees.map(product => (
          <SareeCard key={product.id} product={product} />
        ))}
      </div>
      
      {newSarees.length === 0 && (
        <div className="text-center py-24 text-secondary font-sans">
          Our artisans are currently crafting new masterpieces. Check back soon.
        </div>
      )}
    </div>
  );
}
