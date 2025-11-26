import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 space-y-20">
      {/* Hero */}
      <section className="pt-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover & Manage Your <span className="text-blue-600">Products</span> Easily
          </h1>
          <p className="text-slate-600 mb-6">
            A clean Next.js + NextAuth powered product management dashboard with protected pages.
          </p>
          <div className="flex gap-4">
            <Link
              href="/products"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Browse Products
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 rounded-lg border border-slate-300 hover:bg-slate-100"
            >
              Login to Add
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border bg-white shadow h-64 md:h-80 flex items-center justify-center">
          <p className="text-slate-400">Hero Illustration / Screenshot</p>
        </div>
      </section>

      {/* Section 1 – Features */}
      <section id="features" className="space-y-6">
        <h2 className="text-2xl font-semibold">Why NextTask Shop?</h2>
        <p className="text-slate-600 max-w-2xl">
          Manage products with secure login, protected routes, and a simple UI.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {["Secure Auth", "Fast UI", "Responsive"].map((title) => (
            <div
              key={title}
              className="p-5 rounded-xl bg-white border shadow-sm hover:-translate-y-1 hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quasi.
              </p>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
}
