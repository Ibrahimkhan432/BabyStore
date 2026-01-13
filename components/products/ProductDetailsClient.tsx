'use client';

import { useCart } from '@/context/cart-context';
import Image from 'next/image';
import { Product } from '@/lib/types';

interface ProductDetailsClientProps {
  product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsClientProps) {
  const { cart, addToCart } = useCart();
  const cartCount = cart.find((item) => item.slug === product.slug)?.quantity || 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    alert(`${product.title} added to cart`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-16 mt-4">
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          <div className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer">
            <Image
              src={product.image}
              width={300} 
              height={300} 
              alt={`Thumbnail of ${product.title}`}
            />
          </div>
          <div className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer">
            <Image
              src={product.image}
              width={300}
              height={300}
              alt={`Thumbnail of ${product.title}`}
            />
          </div>
          <div className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer">
            <Image
              src={product.image}
              width={300}
              height={300}
              alt={`Thumbnail of ${product.title}`}
            />
          </div>
          <div className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer">
            <Image
              src={product.image}
              width={300}
              height={300}
              alt={`Thumbnail of ${product.title}`}
            />
          </div>
        </div>
        <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
          <Image
            src={product.image}
            width={300}
            height={300}
            alt={product.title}
          />
        </div>
      </div>
      <div className="text-sm w-full md:w-1/2">
        <h1 className="text-3xl font-medium">{product.title}</h1>
        <div className="mt-6">
          <p className="text-2xl font-medium">Rs: {product.price}</p>
          <span className="text-gray-500/70">(inclusive of all taxes)</span>
        </div>
        <p className="text-base font-medium mt-6">About Product</p>
        <ul className="list-disc ml-4 text-gray-500/70">
          <li>{product.description}</li>
        </ul>
        <div className="flex items-center mt-10 gap-4 text-base">
          <button
            onClick={handleAddToCart}
            className="w-full py-3.5 font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition cursor-pointer">
           {
            cart.some((item: Product) => item.id === product.id) ?
              `${cartCount} Items Added` :
              'Add to Cart'
           }
          </button>
          <button className="w-full py-3.5 font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition cursor-pointer">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}