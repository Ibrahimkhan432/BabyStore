"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/services/api";
import { ProductCategory } from "@/lib/types";

const MOCK_CATEGORIES: ProductCategory[] = [
  {
    id: 1,
    slug: "electronics",
    name: "Electronics",
    description: "Explore our latest electronics category for all tech needs.",
    image: "https://static.pakwheels.com/2017/07/img.jpg",
    products: [],
  },
  {
    id: 2,
    slug: "clothes",
    name: "Clothes",
    description: "Explore our latest clothes category for fashion lovers.",
    image: "https://static.pakwheels.com/2017/07/img.jpg",
    products: [],
  },
  {
    id: 3,
    slug: "toys",
    name: "Toys",
    description: "Explore fun toys for kids of all ages.",
    image: "https://static.pakwheels.com/2017/07/img.jpg",
    products: [],
  },
  {
    id: 4,
    slug: "games",
    name: "Games",
    description: "Explore fun games for kids of all ages.",
    image: "https://static.pakwheels.com/2017/07/img.jpg",
    products: [],
  },
];

export default function Category() {
  const [categories, setCategories] =
    useState<ProductCategory[]>(MOCK_CATEGORIES);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api("/categories");

        if (res?.status && res?.data?.length) {
          setCategories(res.data);
        }
      } catch {
        console.warn("Using mock categories");
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="container mx-auto px-4 py-12 justify-center">
      <h1 className="text-3xl font-semibold text-center">
        Our Latest Categories
      </h1>

      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Explore our latest categories of products, each designed with care and
        attention to detail.
      </p>

      {/* GRID */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {categories.map((category) => (
          <Link href={`/products?category=${category.slug}`} key={category.id}>
            <div
              className="group relative h-[300px] rounded-xl overflow-hidden shadow hover:shadow-lg transition-all cursor-pointer"
            >
              {/* IMAGE */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-4 text-white">
                <h2 className="text-xl font-semibold">{category.name}</h2>
                <p className="text-sm mt-1 line-clamp-2">
                  {category.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
