"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
    const { data: session } = useSession();
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
            <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between text-slate-200">
                <Link href="/" className="font-bold text-xl text-white">
                    NextTask<span className="text-blue-400">Shop</span>
                </Link>

                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/" className="hover:text-blue-400">Home</Link>
                    <Link href="/products" className="hover:text-blue-400">Products</Link>
                    <Link href="/#features" className="hover:text-blue-400">Features</Link>
                    <Link href="/#testimonials" className="hover:text-blue-400">Testimonials</Link>
                    <Link href="/#contact" className="hover:text-blue-400">Contact</Link>

                    {!session ? (
                        <div className="flex gap-3">
                            <Link
                                href="/login"
                                className="px-4 py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-slate-800"
                            >
                                Login / Register
                            </Link>
                        </div>
                    ) : (
                        <div className="relative">
                            <button
                                onClick={() => setOpen((o) => !o)}
                                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 flex items-center gap-2"
                            >
                                <span>{session.user?.name || session.user?.email}</span>
                                <span>▾</span>
                            </button>

                            {open && (
                                <div className="absolute right-0 mt-2 w-56 bg-slate-900 shadow-lg rounded-lg border border-slate-700 text-sm">
                                    <div className="px-4 py-3 border-b border-slate-700">
                                        <p className="font-semibold text-white">{session.user?.name}</p>
                                        <p className="text-xs text-slate-400">{session.user?.email}</p>
                                    </div>
                                    <div className="flex flex-col text-slate-200">
                                        <Link
                                            href="/dashboard/add-product"
                                            className="px-4 py-2 hover:bg-slate-800"
                                            onClick={() => setOpen(false)}
                                        >
                                            Add Product
                                        </Link>
                                        <Link
                                            href="/dashboard/manage-products"
                                            className="px-4 py-2 hover:bg-slate-800"
                                            onClick={() => setOpen(false)}
                                        >
                                            Manage Products
                                        </Link>
                                        <button
                                            onClick={() => signOut()}
                                            className="px-4 py-2 text-left hover:bg-slate-800 border-t border-slate-700 text-red-400"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Mobile */}
                <div className="md:hidden text-sm text-slate-300">
                    <Link href="/products" className="hover:text-blue-400">Menu</Link>
                </div>
            </nav>
        </header>
    );
}
