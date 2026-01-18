"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function BannerSection() {
  const { data: session } = useSession();

  if (session) return null;

  return (
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
  );
}
