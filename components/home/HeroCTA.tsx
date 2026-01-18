"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function HeroCTA() {
  const { data: session } = useSession();

  if (!session) {
    return (
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
    );
  }

  return (
    <div className="flex gap-4">
      <Link
        href="/dashboard/manage-products"
        className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
