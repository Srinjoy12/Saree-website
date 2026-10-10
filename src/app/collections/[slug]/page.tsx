import { notFound } from "next/navigation";
import { products } from "@/data/products";
import SareeCard from "@/components/SareeCard";

const collectionsList = [
  "kanjivaram", "banarasi", "bridal", "festive", "chanderi", "paithani", "tissue", "shikargah", "contemporary"
];

export async function generateStaticParams() {
  return collectionsList.map((slug) => ({
    slug: slug,
  }));
}

export default async function CollectionPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  
  // Format slug to name
  const collectionName = slug.charAt(0).toUpperCase() + slug.slice(1).replace("-", " ");
  
  // Filter products by collection
  const collectionProducts = products.filter(p => 
    p.fabric.toLowerCase().includes(slug) || 
    p.occasion.toLowerCase().includes(slug) ||
    p.description.toLowerCase().includes(slug) ||
    p.name.toLowerCase().includes(slug) ||
    (slug === 'shikargah' && (p.fabric.toLowerCase().includes('banarasi') || p.occasion === 'Bridal')) ||
    (slug === 'tissue' && (p.fabric.toLowerCase().includes('tissue') || p.fabric.toLowerCase().includes('chanderi'))) ||
    (slug === 'paithani' && p.fabric.toLowerCase().includes('paithani'))
  );

  const displayProducts = collectionProducts.length > 0 ? collectionProducts : products.slice(0, 8);

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto min-h-screen bg-background">
      <div className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto">
        <p className="font-sans text-accent uppercase tracking-[0.25em] text-[11px] sm:text-xs mb-2 sm:mb-3">Curated Curation</p>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-primary mb-3 sm:mb-6">
          {collectionName} <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Series</span>
        </h1>
        <p className="font-sans text-xs sm:text-base text-secondary">
          Explore our signature {collectionName.toLowerCase()} collection. Certified handwoven pure silk and authentic zari.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 gap-y-6 sm:gap-y-12">
        {displayProducts.map(product => (
          <SareeCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
