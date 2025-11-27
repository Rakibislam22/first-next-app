import Link from "next/link";

interface Product {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  date: string;
  priority: string;
  imageUrl?: string;
}

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  return res.json();
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center text-slate-200">
        <h1 className="text-2xl font-bold mb-4 text-white">Product Not Found</h1>
        <Link
          href="/products"
          className="px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 inline-block text-slate-200"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-6 text-slate-200">
      <Link
        href="/products"
        className="text-sm px-3 py-1 rounded-full border border-slate-700 hover:bg-slate-800 inline-block text-slate-300"
      >
        ← Back
      </Link>

      <div className="space-y-4">
        <div className="h-100 rounded-2xl bg-slate-800 overflow-hidden border border-slate-700">
          {product.imageUrl && (
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <h1 className="text-3xl font-semibold text-white">{product.title}</h1>

        <p className="text-sm text-slate-400">{product.fullDescription}</p>

        <div className="flex flex-wrap gap-4 text-sm">
          <span className="px-3 py-1 rounded-full bg-blue-900 text-blue-300 font-medium border border-blue-700">
            ${product.price}
          </span>

          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
            Date: {product.date}
          </span>

          <span className="px-3 py-1 rounded-full bg-emerald-900 text-emerald-300 border border-emerald-700">
            Priority: {product.priority}
          </span>
        </div>
      </div>
    </div>
  );
}
