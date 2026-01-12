"use client"
import { ProductData } from "@/data/data";
import ProductCrad from "./ProductCrad";
import { useSearch } from "@/context/search-context";

export default function Products() {
const{search}=useSearch();
const filteredProducts = ProductData.filter((product) =>
  product.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <section className="py-12 container mx-auto">
      <div className="container mx-auto px-4">

        <h1 className="text-3xl font-medium text-slate-800 text-center mb-2">
          Latest Products
        </h1>
        <p className="text-slate-600 mb-10 text-center">
          Explore the latest additions to our collection.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length  ?(
            filteredProducts.map((product:any) => (
              <ProductCrad key={product.id} product={product} />
            ))
          ) : (
            <p className="text-slate-600 mb-10 text-center">
              No products found.
            </p>
          )}
        </div>

      </div>
    </section>
  )
}
