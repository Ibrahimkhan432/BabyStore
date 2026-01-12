"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-semibold mb-3">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">Looks like you haven’t added anything yet</p>
        <Link
          href="/products"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-14">
      <h1 className="text-3xl md:text-4xl font-semibold mb-10">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* CART ITEMS */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-gray-300 shadow-sm p-5"
            >
              <div className="flex gap-5">
                <div className="relative h-24 w-24 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <Link href={`/products/${item.slug}`}>
                    <h3 className="font-semibold text-lg hover:text-indigo-600 transition line-clamp-1">
                      {item.name}
                    </h3>
                  </Link>

                  <p className="text-sm  mt-1">
                    ${item.price.toFixed(2)} each
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-2 hover:bg-gray-100"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="px-4 font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-2 hover:bg-gray-100"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right font-semibold text-lg">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ORDER SUMMARY */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-xl border border-gray-300 shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-4 flex justify-between items-center mb-6">
              <span className="font-semibold text-lg">Total</span>
              <span className="font-semibold text-2xl text-indigo-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <Link
              href="/checkout"
              className="block text-center w-full py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/products"
              className="block text-center w-full py-3 mt-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
