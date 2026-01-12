import { ProductData } from "@/data/data";
import ProductGrid from "./ProductGrid";
export default function Products() {
  return (
    <section className="py-12 container mx-auto">
      <div className="container mx-auto px-4">

        <h1 className="text-3xl font-medium text-slate-800 text-center mb-2">
          Latest Products
        </h1>
        <p className="text-slate-600 mb-10 text-center">
          Explore the latest additions to our collection.
        </p>

       <ProductGrid products={ProductData} />

      </div>
    </section>
  )
}
