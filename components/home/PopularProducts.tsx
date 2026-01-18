"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  date: string;
  priority: string;
  imageUrl?: string;
}

export default function PopularProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 3));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Popular Products</h2>
        <Link href="/products" className="text-sm text-blue-400 hover:underline">
          View all
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {loading &&
          [1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-900 border border-slate-700 animate-pulse flex flex-col gap-2"
            >
              <div className="h-32 rounded-lg bg-slate-800"></div>
              <div className="h-4 bg-slate-800 rounded w-3/4"></div>
              <div className="h-3 bg-slate-800 rounded w-1/2"></div>
              <div className="h-4 bg-slate-800 rounded w-1/4 mt-2"></div>
            </div>
          ))}

        {!loading &&
          products.map((prod) => (
            <div
              key={prod.id}
              className="p-4 rounded-xl bg-slate-900 border border-slate-700 hover:shadow-sm transition flex flex-col gap-2"
            >
              <div className="h-40 rounded-lg bg-slate-800 overflow-hidden relative">
                {prod.imageUrl && (
                  <Image
                    src={prod.imageUrl}
                    alt={prod.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>

              <h3 className="font-semibold text-lg text-white line-clamp-1">
                {prod.title}
              </h3>

              <p className="text-sm text-slate-500 line-clamp-2">
                {prod.shortDescription}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-semibold text-white">
                  ${prod.price}
                </span>
                <Link
                  href={`/products/${prod._id}`}
                  className="text-sm px-3 py-1 rounded-full border border-blue-600 hover:bg-blue-600 text-slate-300"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
