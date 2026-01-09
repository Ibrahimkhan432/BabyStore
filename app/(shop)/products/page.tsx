import ProductCrad from "@/components/products/ProductCrad";
import Link from "next/link";

const products = [
  {
    id: 1,
    price: 29,
    title: "Baby Onesie",
    description: "Soft and comfortable onesie for newborns",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    price: 35,
    title: "Baby Blanket",
    description: "Warm and cozy blanket for your little one",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    price: 19,
    title: "Baby Toys",
    description: "Safe and educational toys for infants",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    price: 45,
    title: "Baby Stroller",
    description: "Lightweight and easy to maneuver stroller",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    price: 22,
    title: "Baby Bottles",
    description: "BPA-free feeding bottles",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    price: 38,
    title: "Baby Carrier",
    description: "Ergonomic baby carrier for parents",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 7,
    price: 27,
    title: "Baby Bed",
    description: "Safe and comfortable crib for newborns",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 8,
    price: 15,
    title: "Baby Clothes",
    description: "Adorable clothing set for babies",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  }
];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
          
            <ProductCrad key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  )
}
