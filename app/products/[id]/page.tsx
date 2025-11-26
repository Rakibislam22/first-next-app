import axios from "axios";

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

async function getProduct(id: string): Promise<Product> {
  const res = await axios.get<Product>(
    `${process.env.BACKEND_URL}/products/${id}`
  );
  return res.data;
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-6">
      <button
        onClick={() => history.back()}
        className="text-sm px-3 py-1 rounded-full border hover:bg-slate-50"
      >
        ← Back
      </button>

      <div className="space-y-4">
        <div className="h-64 rounded-2xl bg-slate-100 overflow-hidden">
          {product.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <p className="text-sm text-slate-600">{product.fullDescription}</p>

        <div className="flex flex-wrap gap-4 text-sm">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">
            ${product.price}
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">
            Date: {product.date}
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
            Priority: {product.priority}
          </span>
        </div>
      </div>
    </div>
  );
}
