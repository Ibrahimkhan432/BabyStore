"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useCart } from "@/context/cart-context"

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart()
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  })

  if (cart.length === 0) {
    router.push("/cart")
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const orderDetails = cart
      .map(
        (item) =>
          `${item.name} x${item.quantity} - Rs: ${(item.price * item.quantity).toFixed(2)}`
      )
      .join("\n")

    const message = `New Order from ${formData.name}

 Order Details:
${orderDetails}

 Total: Rs ${totalPrice.toFixed(2)}

Customer Information:
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
${formData.notes ? `\nNotes: ${formData.notes}` : ""}`

    const whatsappNumber = "3431223329"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    clearCart()
    window.open(whatsappUrl, "_blank")
    router.push("/")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-8">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* FORM */}
        <div className="lg:col-span-2">
          <div className="border border-gray-300 rounded-lg p-6">
            <h2 className="text-xl font-serif font-semibold mb-4">
              Delivery Information
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <input
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                  placeholder="3431234567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Delivery Address *
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                  placeholder="Street, City, ZIP"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Order Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                  placeholder="Any special instructions"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 cursor-pointer text-white py-3 rounded hover:bg-green-800 transition border border-gray-300"
              >
                Complete Order via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="lg:col-span-1">
          <div className="border border-gray-300 rounded-lg p-6 sticky top-20">
            <h2 className="text-xl font-serif font-semibold mb-4">
              Order Summary
            </h2>

            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="relative h-16 w-16 rounded overflow-hidden bg-gray-100">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium line-clamp-1">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × Rs{item.price.toFixed(2)}
                    </p>
                    <p className="text-sm font-semibold">
                      Rs {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-300 mt-6 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span>Rs {totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-300 pt-3">
                <span className="font-semibold text-lg">Total</span>
                <span className="font-serif font-semibold text-2xl text-slate-900">
                  Rs {totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
