"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Menu,
  Search,
  ShoppingCart
} from "lucide-react"

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative">

      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-indigo-600">
        ShopLogo
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">

        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>

        {/* Search */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            type="text"
            placeholder="Search products"
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
          />
          <Search size={16} className="text-gray-500" />
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <ShoppingCart size={18} className="text-indigo-600" />
          <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* Login */}
        <button className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        aria-label="Menu"
        onClick={() => setOpen(!open)}
        className="sm:hidden"
      >
        <Menu size={22} />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex flex-col gap-3 px-5 text-sm sm:hidden">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          <button className="px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
            Login
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
