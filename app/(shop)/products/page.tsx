import { ProductData } from "@/data/data";
import ProductGrid from "./ProductGrid";

interface PageProps {
  searchParams?: {
    category?: string;
  };
}

export default function Products({ searchParams }: PageProps) {
  const category = searchParams?.category;
  
  const filteredProducts = category 
    ? ProductData.filter(product => product.category === category)
    : ProductData;
  
  const pageTitle = category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : 'Latest Products';
  
  return (
    <section className="py-12 container mx-auto">
      <div className="container mx-auto px-4">

        <h1 className="text-3xl font-medium text-slate-800 text-center mb-2">
          {pageTitle}
        </h1>
        <p className="text-slate-600 mb-10 text-center">
          Explore our selection of {category ? `${category} ` : ''}products.
        </p>

       <ProductGrid products={filteredProducts} />

      </div>
    </section>
  )
}