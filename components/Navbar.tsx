"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
    const { data: session } = useSession();
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b">
            <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl">
                    NextTask<span className="text-blue-600">Shop</span>
                </Link>

                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <Link href="/products" className="hover:text-blue-600">Products</Link>
                    <Link href="/#features" className="hover:text-blue-600">Features</Link>
                    <Link href="/#testimonials" className="hover:text-blue-600">Testimonials</Link>
                    <Link href="/#contact" className="hover:text-blue-600">Contact</Link>

                    {!session ? (
                        <div className="flex gap-3">
                            <Link
                                href="/login"
                                className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
                            >
                                Login / Register
                            </Link>
                        </div>
                    ) : (
                        <div className="relative">
                            <button
                                onClick={() => setOpen((o) => !o)}
                                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
                            >
                                <span>{session.user?.name || session.user?.email}</span>
                                <span>▾</span>
                            </button>
                            {open && (
                                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg border text-sm">
                                    <div className="px-4 py-3 border-b">
                                        <p className="font-semibold">{session.user?.name}</p>
                                        <p className="text-xs text-slate-500">{session.user?.email}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <Link
                                            href="/dashboard/add-product"
                                            className="px-4 py-2 hover:bg-slate-50"
                                            onClick={() => setOpen(false)}
                                        >
                                            Add Product
                                        </Link>
                                        <Link
                                            href="/dashboard/manage-products"
                                            className="px-4 py-2 hover:bg-slate-50"
                                            onClick={() => setOpen(false)}
                                        >
                                            Manage Products
                                        </Link>
                                        <button
                                            onClick={() => signOut()}
                                            className="px-4 py-2 text-left hover:bg-slate-50 border-t"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Mobile placeholder – you can improve with hamburger menu */}
                <div className="md:hidden text-sm">
                    <Link href="/products">Menu</Link>
                </div>
            </nav>
        </header>
    );
}
