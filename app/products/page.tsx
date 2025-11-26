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

    console.log(process.env.BACKEND_URL)

    useEffect(() => {
        axios
            .get<Product[]>(`http://localhost:5000/products`)
            .then((res) => setProducts(res.data))
            .catch(console.error);
    }, []);

    const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold">All Products</h1>
                <p className="text-slate-600 text-sm">
                    Browse all available products. Use search & filters (UI only).
                </p>
            </div>

            {/* Search + category filter (UI only) */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <input
                    className="w-full md:w-1/2 rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="w-full md:w-48 rounded-lg border px-3 py-2 text-sm"
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
                {filtered.slice(0, 6).map((prod) => (
                    <div
                        key={prod.id}
                        className="rounded-xl bg-white border shadow-sm hover:shadow-md hover:-translate-y-1 transition flex flex-col"
                    >
                        <div className="h-32 bg-slate-100 rounded-t-xl overflow-hidden">
                            {prod.imageUrl && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={prod.imageUrl} alt={prod.title} className="w-full h-full object-cover" />
                            )}
                        </div>
                        <div className="p-4 flex flex-col gap-2 flex-1">
                            <h3 className="font-semibold text-sm line-clamp-1">{prod.title}</h3>
                            <p className="text-xs text-slate-500 line-clamp-2">
                                {prod.shortDescription}
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-sm font-semibold">${prod.price}</span>
                                <Link
                                    href={`/products/${prod.id}`}
                                    className="text-xs px-3 py-1 rounded-full border hover:bg-slate-50"
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
