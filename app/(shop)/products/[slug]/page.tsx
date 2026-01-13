"use client"
import { ProductData } from "@/data/data";
import { Product } from "@/lib/types";
import { notFound } from "next/navigation";
import ProductDetailsClient from "@/components/products/ProductDetailsClient";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  console.log("Product Slug:", slug)
  const product = ProductData.find((product: Product) => product.slug === slug);
  console.log("Product:", product)
  if (!product) notFound();

  return (
    <div className="py-8 container mx-auto px-4 max-w-6xl">
      <ProductDetailsClient product={product} />
    </div>
  );
}
