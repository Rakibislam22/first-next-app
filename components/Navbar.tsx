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

                {/* Logo */}
                <Link href="/" className="font-bold text-xl text-white">
                    Next<span className="text-blue-400">Level</span> Shop
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/" className="hover:text-blue-400">Home</Link>
                    <Link href="/products" className="hover:text-blue-400">Products</Link>
                    <Link href="/#features" className="hover:text-blue-400">Features</Link>
                    <Link href="/#testimonials" className="hover:text-blue-400">Testimonials</Link>
                    <Link href="/#contact" className="hover:text-blue-400">Contact</Link>

                    {!session ? (
                        <Link
                            href="/login"
                            className="px-4 py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-slate-800"
                        >
                            Login / Register
                        </Link>
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
                                        >
                                            Add Product
                                        </Link>
                                        <Link
                                            href="/dashboard/manage-products"
                                            className="px-4 py-2 hover:bg-slate-800"
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

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            {open && (
                <div className="md:hidden bg-slate-900 border-t border-slate-700 text-slate-200 px-4 py-4 space-y-3">
                    <Link href="/" onClick={() => setOpen(false)} className="block hover:text-blue-400">Home</Link>
                    <Link href="/products" onClick={() => setOpen(false)} className="block hover:text-blue-400">Products</Link>
                    <Link href="/#features" onClick={() => setOpen(false)} className="block hover:text-blue-400">Features</Link>
                    <Link href="/#testimonials" onClick={() => setOpen(false)} className="block hover:text-blue-400">Testimonials</Link>
                    <Link href="/#contact" onClick={() => setOpen(false)} className="block hover:text-blue-400">Contact</Link>

                    {!session ? (
                        <Link
                            href="/login"
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2 rounded-lg border border-blue-500 text-blue-400 text-center hover:bg-slate-800 mt-2"
                        >
                            Login / Register
                        </Link>
                    ) : (
                        <>
                            <div className="pt-3 border-t border-slate-700 text-slate-400 text-sm">
                                Signed in as <br />
                                <span className="text-white font-medium">{session.user?.name}</span>
                            </div>

                            <Link
                                href="/dashboard/add-product"
                                onClick={() => setOpen(false)}
                                className="block px-4 py-2 hover:bg-slate-800"
                            >
                                Add Product
                            </Link>

                            <Link
                                href="/dashboard/manage-products"
                                onClick={() => setOpen(false)}
                                className="block px-4 py-2 hover:bg-slate-800"
                            >
                                Manage Products
                            </Link>

                            <button
                                onClick={() => {
                                    setOpen(false);
                                    signOut();
                                }}
                                className="block w-full text-left px-4 py-2 hover:bg-slate-800 text-red-400 border-t border-slate-700 mt-2"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            )}
        </header>
    );
}
