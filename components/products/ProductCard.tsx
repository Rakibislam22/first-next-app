import Link from "next/link";

interface Product {
  id: string;
  _id: string;
  title: string;
  shortDescription: string;
  price: number;
  imageUrl?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-xl bg-slate-900 border border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition flex flex-col">
      <div className="h-40 bg-slate-800 rounded-t-xl overflow-hidden border-b border-slate-700">
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-xl text-white line-clamp-1">
          {product.title}
        </h3>
        <p className="text-sm text-slate-400 line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-semibold text-white">
            ${product.price}
          </span>
          <Link
            href={`/products/${product._id}`}
            className="text-sm px-3 py-1 rounded-full border border-blue-600 hover:bg-blue-600 text-slate-300"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
