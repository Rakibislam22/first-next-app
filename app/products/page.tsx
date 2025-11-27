"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

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

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [loading, setLoading] = useState(true); // ✅ added

    useEffect(() => {
        axios
            .get<Product[]>(`http://localhost:5000/products`)
            .then((res) => setProducts(res.data))
            .catch(console.error)
            .finally(() => setLoading(false)); // ✅ loading ends
    }, []);

    const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mx-auto max-w-6xl px-4 py-10 space-y-6 text-slate-200">

            {/* Loading screen */}
            {loading && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="animate-spin h-14 w-14 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                </div>
            )}

            {/* Hide actual content while loading */}
            {!loading && (
                <>
                    <div className="space-y-2">
                        <h1 className="text-3xl font-semibold text-white">All Products</h1>
                        <p className="text-slate-400 text-sm">
                            Browse all available products. Use search & filters.
                        </p>
                    </div>

                    {/* Search + category filter */}
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <input
                            className="w-full md:w-1/2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <select
                            className="w-full md:w-48 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            <option value="high">High Priority</option>
                            <option value="low">Low Priority</option>
                        </select>
                    </div>

                    {/* Grid of cards */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filtered.map((prod) => (
                            <div
                                key={prod._id}
                                className="rounded-xl bg-slate-900 border border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition flex flex-col"
                            >
                                <div className="h-32 bg-slate-800 rounded-t-xl overflow-hidden border-b border-slate-700">
                                    {prod.imageUrl && (
                                        <img
                                            src={prod.imageUrl}
                                            alt={prod.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>

                                <div className="p-4 flex flex-col gap-2 flex-1">
                                    <h3 className="font-semibold text-sm text-white line-clamp-1">
                                        {prod.title}
                                    </h3>
                                    <p className="text-xs text-slate-400 line-clamp-2">
                                        {prod.shortDescription}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-sm font-semibold text-white">
                                            ${prod.price}
                                        </span>
                                        <Link
                                            href={`/products/${prod._id}`}
                                            className="text-xs px-3 py-1 rounded-full border border-slate-700 hover:bg-slate-800 text-slate-300"
                                        >
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
