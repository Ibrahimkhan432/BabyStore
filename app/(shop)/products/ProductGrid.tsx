"use client"

import ProductCard from "@/components/products/ProductCrad"
import { useSearch } from "@/context/search-context"

export default function ProductGrid({ products }: { products: any[] }) {
  const { search } = useSearch()

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  if (filteredProducts.length === 0) {
    return (
      <p className="text-center text-slate-600">
        No products found.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
