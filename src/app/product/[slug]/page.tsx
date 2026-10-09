import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductClient from "@/components/ProductClient";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
