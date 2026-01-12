'use client';

import { useCart } from '@/context/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Bolt } from 'lucide-react';

interface ProductCardProps {
  product: {
    slug: string;
    image: string;
    title: string;
    description: string;
    price: number;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { cart, addToCart } = useCart();

  const cartCount = cart.find((item) => item.slug === product.slug)?.quantity || 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    alert(`${product.title} added to cart`);
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className="block group"
    >
      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
        {/* Product Image */}
        <div className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
            unoptimized
          />
        </div>

        {/* Product Info */}
        <div className="p-5 flex flex-col justify-between h-[220px] md:h-[240px]">
          <div className="space-y-2">
            <p className="text-indigo-600 font-semibold text-lg">${product.price.toFixed(2)}</p>
            <h3 className="text-gray-900 font-medium text-base md:text-lg line-clamp-2">
              {product.title}
            </h3>
            <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount ? `${cartCount} Added` : 'Add to Cart'}
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              <Bolt className="w-4 h-4" />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
