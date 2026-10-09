export interface Product {
  id: string;
  name: string;
  slug: string;
  fabric: string;
  color: string;
  occasion: string;
  description: string;
  care: string;
  images: string[];
  featured: boolean;
  newArrival: boolean;
  price: number;
  availability: "Available in store" | "Enquire for availability";
}

const baseProducts: Product[] = [
  {
    id: "saree-1",
    name: "The Royal Crimson Bridal Banarasi",
    slug: "royal-crimson-bridal-banarasi",
    fabric: "Banarasi Katan Silk",
    color: "Crimson Red",
    occasion: "Bridal",
    description: "An heirloom bridal masterpiece handwoven in Varanasi over six months. Features pure gold zari kadhwa floral jaal, Shikargah animal motifs, and an opulent brocade pallu fit for a queen.",
    care: "Dry clean only. Store in a breathable cotton muslin bag. Air occasionally.",
    images: ["/images/sarees/saree-crimson-bridal.jpg", "/images/sarees/saree-1.jpg", "/images/editorial/bridal-crimson.jpg"],
    featured: true,
    newArrival: true,
    price: 68000,
    availability: "Available in store" as const,
  },
  {
    id: "saree-2",
    name: "Temple Sanctuary Peacock Teal Kanjivaram",
    slug: "temple-sanctuary-peacock-teal-kanjivaram",
    fabric: "Kanjivaram Silk",
    color: "Peacock Teal",
    occasion: "Festive",
    description: "Handwoven in Kanchipuram using ancient Korvai interlock technique. Pure mulberry silk in peacock teal with antique gold temple borders (gopuram motifs) and a ceremonial pallu.",
    care: "Dry clean only. Do not iron directly on zari. Roll on wooden spools.",
    images: ["/images/sarees/saree-peacock-teal.jpg", "/images/sarees/saree-2.jpg", "/images/editorial/peacock-teal.jpg"],
    featured: true,
    newArrival: true,
    price: 54000,
    availability: "Available in store" as const,
  },
  {
    id: "saree-3",
    name: "Champagne Gold Ethereal Tissue Silk",
    slug: "champagne-gold-ethereal-tissue-silk",
    fabric: "Tissue Silk",
    color: "Champagne Gold",
    occasion: "Festive",
    description: "A luminous tissue silk saree woven with real metallic warp and pure silk weft. Features delicate zardozi scalloped borders that reflect twilight candlelight like liquid gold.",
    care: "Dry clean only. Keep wrapped in unbleached mulmul cloth.",
    images: ["/images/sarees/saree-gold-tissue.jpg", "/images/hero/hero-3.jpg", "/images/sarees/saree-gold-tissue.jpg"],
    featured: true,
    newArrival: true,
    price: 48000,
    availability: "Available in store" as const,
  },
  {
    id: "saree-4",
    name: "Rani Pink Mor-Tota Paithani",
    slug: "rani-pink-mor-tota-paithani",
    fabric: "Paithani Silk",
    color: "Rani Pink",
    occasion: "Bridal",
    description: "The pride of Maharashtra handlooms. Vibrant rani pink body with gold zari coin butis and a signature kaleidoscopic pallu showcasing hand-embroidered peacock and parrot (mor-tota) motifs.",
    care: "Dry clean only. Refold along natural weaves every three months.",
    images: ["/images/sarees/saree-rani-pink.jpg", "/images/sarees/saree-3.jpg", "/images/sarees/saree-rani-pink.jpg"],
    featured: true,
    newArrival: false,
    price: 62000,
    availability: "Available in store" as const,
  },
  {
    id: "saree-5",
    name: "The Emerald Heirloom Banarasi",
    slug: "emerald-heirloom-banarasi",
    fabric: "Banarasi Silk",
    color: "Emerald Green",
    occasion: "Bridal",
    description: "A breathtaking pure silk Banarasi woven with intricate floral kadhwa jaal. The emerald green base provides a regal contrast to the antique gold zari, making it an undeniable statement piece for modern brides.",
    care: "Dry clean only. Store in a breathable cotton muslin bag. Air occasionally.",
    images: ["/images/sarees/saree-1.jpg", "/images/green_banarasi.jpg", "/images/sarees/saree-1.jpg"],
    featured: true,
    newArrival: false,
    price: 45000,
    availability: "Available in store" as const,
  },
  {
    id: "saree-6",
    name: "Midnight Indigo Kanjivaram",
    slug: "midnight-indigo-kanjivaram",
    fabric: "Kanjivaram",
    color: "Midnight Blue",
    occasion: "Festive",
    description: "Deep indigo silk interwoven with traditional temple motifs along the border. The heavy pure zari pallu tells a story of mythological grandeur, handwoven by master artisans in Kanchipuram.",
    care: "Dry clean only. Do not iron directly on zari.",
    images: ["/images/sarees/saree-2.jpg", "/images/blue_saree.jpg", "/images/sarees/saree-2.jpg"],
    featured: true,
    newArrival: false,
    price: 38000,
    availability: "Enquire for availability" as const,
  }
];

// Rich catalog of 24 unique luxury sarees
const sareeImagesPool = [
  "/images/sarees/saree-crimson-bridal.jpg",
  "/images/sarees/saree-peacock-teal.jpg",
  "/images/sarees/saree-gold-tissue.jpg",
  "/images/sarees/saree-rani-pink.jpg",
  "/images/sarees/saree-1.jpg",
  "/images/sarees/saree-2.jpg",
  "/images/sarees/saree-3.jpg",
  "/images/red_kanjivaram.jpg",
  "/images/blue_saree.jpg",
  "/images/green_banarasi.jpg"
];

const fabricNames = ["Banarasi Katan Silk", "Kanjivaram Silk", "Chanderi Silk", "Paithani Handloom", "Tussar Silk", "Organza Tissue"];
const colors = ["Deep Crimson", "Peacock Teal", "Champagne Gold", "Rani Pink", "Emerald Green", "Midnight Blue", "Ivory Cream", "Mustard Ochre"];
const occasions = ["Bridal", "Festive", "Bespoke", "Cocktail Heritage"];

export const products: Product[] = [
  ...baseProducts,
  ...Array.from({ length: 18 }).map((_, i) => {
    const index = i + 7;
    const fabric = fabricNames[i % fabricNames.length];
    const color = colors[i % colors.length];
    const occasion = occasions[i % occasions.length];
    const primaryImg = sareeImagesPool[(i + 3) % sareeImagesPool.length];
    const secondaryImg = sareeImagesPool[(i + 4) % sareeImagesPool.length];
    
    return {
      id: `saree-${index}`,
      name: `${color} ${fabric} Heirloom`,
      slug: `${color.toLowerCase().replace(" ", "-")}-${fabric.toLowerCase().replace(/[\s-]+/g, "-")}-${index}`,
      fabric: fabric,
      color: color,
      occasion: occasion,
      description: `An exquisite ${fabric} masterpiece draped in ${color.toLowerCase()}. Lovingly handcrafted over weeks by senior weavers, featuring certified pure silk marks and hand-twisted zari borders.`,
      care: "Dry clean only. Wrap in pristine unbleached muslin. Keep away from humidity.",
      images: [primaryImg, secondaryImg, primaryImg],
      featured: i % 4 === 0,
      newArrival: i % 3 === 0,
      price: 28000 + (i * 3500),
      availability: i % 4 === 0 ? "Enquire for availability" as const : "Available in store" as const,
    };
  })
];

export const getProductBySlug = (slug: string) => {
  return products.find(p => p.slug === slug);
};
