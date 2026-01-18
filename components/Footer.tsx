import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer
            id="contact"
            className="bg-slate-900 pt-12 pb-8 mt-12 px-5 rounded-t-3xl"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {/* Company Info */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">
                        Next<span className="text-blue-400">Level</span> Shop
                    </h3>
                    <p className="text-sm text-slate-400">
                        A modern product management platform designed to help you organize, track, and manage your inventory with ease.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <Link href="#" className="text-slate-500 hover:text-blue-400 transition" aria-label="Facebook">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </Link>
                        <Link href="#" className="text-slate-500 hover:text-blue-400 transition" aria-label="Twitter">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </Link>
                        <Link href="#" className="text-slate-500 hover:text-blue-400 transition" aria-label="LinkedIn">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </Link>
                        <Link href="#" className="text-slate-500 hover:text-blue-400 transition" aria-label="GitHub">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/products" className="text-sm text-slate-400 hover:text-blue-400 transition">
                                Browse Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/manage-products" className="text-sm text-slate-400 hover:text-blue-400 transition">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/login" className="text-sm text-slate-400 hover:text-blue-400 transition">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="#features" className="text-sm text-slate-400 hover:text-blue-400 transition">
                                Features
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Support</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition">
                                Help Center
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className="text-sm text-slate-400 hover:text-blue-400 transition">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition">
                                Documentation
                            </Link>
                        </li>
                        <li>
                            <Link href="#how-it-works" className="text-sm text-slate-400 hover:text-blue-400 transition">
                                How It Works
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Legal</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition">
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition">
                                Cookie Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition">
                                Refund Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700 pt-6 mt-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Next<span className="text-blue-400">Level</span> Shop. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-500">
                        Made with ❤️ for product managers
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;