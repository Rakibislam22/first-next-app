"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  date: string;
  priority: string;
  imageUrl?: string;
}

export default function HomePage() {
  const { data: session } = useSession();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Load real products
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 3)); // show only first 3 products
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 space-y-20 text-slate-200">
      {/* Hero */}
      <section className="pt-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Discover & Manage Your{" "}
            <span className="text-blue-400">Products</span> Easily
          </h1>
          <p className="text-slate-400 mb-6">
            Organize, track, and manage products with a clean dashboard powered by Next.js and secure authentication.
          </p>

          {/* Hide login buttons when logged in */}
          {!session && (
            <div className="flex gap-4">
              <Link
                href="/products"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
              >
                Browse Products
              </Link>
              <Link
                href="/login"
                className="px-6 py-3 rounded-lg border border-slate-600 hover:bg-slate-800"
              >
                Login to Add
              </Link>
            </div>
          )}

          {/* If logged in, show dashboard CTA */}
          {session && (
            <div className="flex gap-4">
              <Link
                href="/dashboard/manage-products"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
              >
                Go to Dashboard
              </Link>
            </div>
          )}
        </div>

        <div className="rounded-2xl shadow h-64 md:h-80 flex items-center justify-center">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1720589103335-43589b70bd20"
            alt=""
          />
        </div>
      </section>

      {/* Section 1 – Features */}
      <section id="features" className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">
          Why Next<span className="text-blue-400">Level</span> Shop?
        </h2>
        <p className="text-slate-400 max-w-2xl">
          A modern product management tool designed for simplicity, speed, and secure access.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-700 shadow-sm hover:-translate-y-1 hover:shadow-md transition">
            <h3 className="font-semibold mb-2 text-white">Secure Authentication</h3>
            <p className="text-sm text-slate-400">
              Your data stays protected with encrypted login and access control powered by NextAuth.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-700 shadow-sm hover:-translate-y-1 hover:shadow-md transition">
            <h3 className="font-semibold mb-2 text-white">Fast & Smooth Interface</h3>
            <p className="text-sm text-slate-400">
              Enjoy a responsive experience with optimized UI and instant navigation.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-700 shadow-sm hover:-translate-y-1 hover:shadow-md transition">
            <h3 className="font-semibold mb-2 text-white">Mobile Friendly</h3>
            <p className="text-sm text-slate-400">
              Manage and browse products easily on any device, from phone to desktop.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 – Items preview */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Popular Products</h2>
          <Link href="/products" className="text-sm text-blue-400 hover:underline">
            View all
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Loading Skeletons */}
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

          {/* Real Products */}
          {!loading &&
            products.map((prod) => (
              <div
                key={prod.id}
                className="p-4 rounded-xl bg-slate-900 border border-slate-700 hover:shadow-sm transition flex flex-col gap-2"
              >
                <div className="h-32 rounded-lg bg-slate-800 overflow-hidden">
                  {prod.imageUrl && (
                    <img
                      src={prod.imageUrl}
                      alt={prod.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <h3 className="font-semibold text-white line-clamp-1">{prod.title}</h3>

                <p className="text-xs text-slate-500 line-clamp-2">
                  {prod.shortDescription}
                </p>

                <p className="font-semibold text-white">${prod.price}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Section 3 – Testimonials */}
      <section id="testimonials" className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">What Users Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Managing inventory has never been easier.",
            "Clean interface and easy product updates.",
            "Perfect tool for small sellers like me.",
          ].map((text, i) => (
            <div key={i} className="p-5 rounded-xl bg-slate-900 border border-slate-700">
              <p className="text-sm text-slate-400 mb-3">“{text}”</p>
              <p className="text-sm font-semibold text-white">User {i + 1}</p>
              <p className="text-xs text-slate-500">Store Owner</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 – Banner */}
      {!session && (
        <section className="rounded-2xl border border-blue-700 bg-blue-700 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Ready to manage your products?</h2>
            <p className="text-sm text-blue-200">
              Create an account and start organizing your items in minutes.
            </p>
          </div>
          <Link
            href="/login"
            className="px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:bg-blue-100"
          >
            Get Started
          </Link>
        </section>
      )}

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-slate-700 pt-8 pb-6 text-sm text-slate-500"
      >
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Next<span className="text-blue-400">Level</span>{" "}
            Shop. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-400">
              Privacy
            </Link>
            <Link href="#" className="hover:text-blue-400">
              Terms
            </Link>
            <Link href="#" className="hover:text-blue-400">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
