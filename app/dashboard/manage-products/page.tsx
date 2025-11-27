"use client";

import RequireAuth from "@/components/RequireAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import Swal from "sweetalert2"; // ✅ added

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

export default function ManageProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false); // ✅ added

    async function loadProducts() {
        setLoading(true);
        try {
            const res = await axios.get<Product[]>(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`
            );
            setProducts(res.data);
        } catch (err) {
            console.error(err);
            toast.error("Failed to load products.");
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(id: string) {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This product will be deleted permanently.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        });

        if (!result.isConfirmed) return;

        setDeleting(true); // ✅ show deleting overlay

        try {
            await axios.delete(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}`
            );
            toast.success("Product deleted.");
            await loadProducts();
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete product.");
        } finally {
            setDeleting(false);
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <RequireAuth>

            {/*FULL SCREEN LOADING OVERLAY */}
            {(loading || deleting) && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="animate-spin h-14 w-14 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                </div>
            )}

            <div className="mx-auto max-w-5xl px-4 py-10 space-y-4 text-slate-200">
                <h1 className="text-2xl font-semibold text-white">Manage Products</h1>
                <p className="text-sm text-slate-400">
                    View or delete products in a clean, responsive table layout.
                </p>

                <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-md overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-slate-800 border-b border-slate-700">
                            <tr>
                                <th className="text-left px-4 py-3 text-slate-300">Title</th>
                                <th className="text-left px-4 py-3 text-slate-300">Price</th>
                                <th className="text-left px-4 py-3 text-slate-300">Date</th>
                                <th className="text-left px-4 py-3 text-slate-300">Priority</th>
                                <th className="text-right px-4 py-3 text-slate-300">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {!loading && products.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-4 py-6 text-center text-slate-500">
                                        No products found.
                                    </td>
                                </tr>
                            ) : (
                                products.map((prod) => (
                                    <tr
                                        key={prod._id}
                                        className="border-t border-slate-700 hover:bg-slate-800 transition"
                                    >
                                        <td className="px-4 py-3 text-slate-200">{prod.title}</td>
                                        <td className="px-4 py-3 text-slate-300">${prod.price}</td>
                                        <td className="px-4 py-3 text-slate-400">{prod.date}</td>
                                        <td className="px-4 py-3 text-slate-300">{prod.priority}</td>
                                        <td className="px-4 py-3 text-right space-x-2">
                                            <Link
                                                href={`/products/${prod._id}`}
                                                className="px-3 py-1 rounded-full border border-slate-600 text-xs text-slate-300 hover:bg-slate-700"
                                            >
                                                View
                                            </Link>

                                            <button
                                                onClick={() => handleDelete(prod._id)}
                                                className="px-3 py-1 rounded-full bg-red-900/40 text-red-300 text-xs border border-red-700 hover:bg-red-800"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </RequireAuth>
    );
}
