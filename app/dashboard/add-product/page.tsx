"use client";

import RequireAuth from "@/components/RequireAuth";
import { FormEvent, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AddProductPage() {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        title: "",
        shortDescription: "",
        fullDescription: "",
        price: "",
        date: "",
        priority: "Normal",
        imageUrl: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL || process.env.BACKEND_URL}/products`, {
                ...form,
                price: Number(form.price),
            });
            toast.success("Product added!");
            setForm({
                title: "",
                shortDescription: "",
                fullDescription: "",
                price: "",
                date: "",
                priority: "Normal",
                imageUrl: "",
            });
        } catch (err) {
            console.error(err);
            toast.error("Failed to add product.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <RequireAuth>
            <div className="mx-auto max-w-3xl px-4 py-10 text-slate-200">
                <h1 className="text-2xl font-semibold mb-4 text-white">Add Product</h1>

                <form
                    onSubmit={handleSubmit}
                    className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4 shadow-md"
                >
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-300">Title</label>
                            <input
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                required
                                className="w-full border border-slate-700 bg-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-300">Short Description</label>
                            <input
                                name="shortDescription"
                                value={form.shortDescription}
                                onChange={handleChange}
                                required
                                className="w-full border border-slate-700 bg-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-300">Full Description</label>
                        <textarea
                            name="fullDescription"
                            value={form.fullDescription}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full border border-slate-700 bg-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-300">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                required
                                className="w-full border border-slate-700 bg-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-300">Date</label>
                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                required
                                className="w-full border border-slate-700 bg-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-300">Priority</label>
                            <select
                                name="priority"
                                value={form.priority}
                                onChange={handleChange}
                                className="w-full border border-slate-700 bg-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200"
                            >
                                <option>Low</option>
                                <option>Normal</option>
                                <option>High</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-300">Image URL (optional)</label>
                        <input
                            name="imageUrl"
                            value={form.imageUrl}
                            onChange={handleChange}
                            className="w-full border border-slate-700 bg-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <button
                        disabled={loading}
                        className="mt-2 px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 disabled:opacity-60"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </RequireAuth>
    );
}
