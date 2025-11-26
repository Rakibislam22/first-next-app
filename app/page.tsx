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

      {/* Section 2 – Items preview */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Popular Products</h2>
          <Link href="/products" className="text-sm text-blue-600 hover:underline">
            View all
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white border hover:shadow-sm transition flex flex-col gap-2"
            >
              <div className="h-32 rounded-lg bg-slate-100"></div>
              <h3 className="font-semibold">Sample Product {i}</h3>
              <p className="text-xs text-slate-500">Short one-line description for product {i}...</p>
              <p className="font-semibold">$99</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 – Testimonials */}
      <section id="testimonials" className="space-y-6">
        <h2 className="text-2xl font-semibold">What Users Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-5 rounded-xl bg-white border">
              <p className="text-sm text-slate-600 mb-3">
                “This dashboard helped me manage my tiny store with ease.”
              </p>
              <p className="text-sm font-semibold">User {i}</p>
              <p className="text-xs text-slate-500">Small Business Owner</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 – Banner */}
      <section className="rounded-2xl border bg-blue-600 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Ready to manage your products?</h2>
          <p className="text-sm text-blue-100">
            Login now and start adding or managing your inventory in a protected dashboard.
          </p>
        </div>
        <Link
          href="/login"
          className="px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:bg-blue-50"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t pt-8 pb-6 text-sm text-slate-500">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} NextTask Shop. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-600">
              Privacy
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Terms
            </Link>
            <Link href="#" className="hover:text-blue-600">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
