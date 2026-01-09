'use client';

import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent } from 'react';

const ProductCrad = ({ product }: { product: any }) => {
    return (
        <Link href={`/products/${product.id}`} className="block">
            <div className="border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-lg">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                    unoptimized
                />

                <div className="p-4 text-sm">
                    <p className="text-slate-600">$ {product.price}.00</p>
                    <p className="text-slate-800 text-base font-medium my-1.5">
                        {product.title}
                    </p>
                    <p className="text-slate-500">
                        {product.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mt-4">
                        <button 
                            className="bg-slate-100 text-slate-600 py-2 rounded"
                            onClick={(e: MouseEvent) => e.stopPropagation()} 
                        >
                            Add to cart
                        </button>
                        <button 
                            className="bg-slate-800 text-white py-2 rounded"
                            onClick={(e: MouseEvent) => e.stopPropagation()} 
                        >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCrad