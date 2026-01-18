import Link from "next/link";
import HeroCTA from "./HeroCTA";

export default function HeroSection() {
  return (
    <section className="pt-16 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Discover & Manage Your{" "}
          <span className="text-blue-400">Products</span> Easily
        </h1>
        <p className="text-slate-400 mb-6">
          Organize, track, and manage products with a clean dashboard powered by Next.js and secure authentication.
        </p>
        <HeroCTA />
      </div>

      <div className="rounded-2xl shadow h-64 md:h-80 flex items-center justify-center">
        <img
          className="rounded-2xl w-full h-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1720589103335-43589b70bd20"
          alt=""
        />
      </div>
    </section>
  );
}
