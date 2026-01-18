import Footer from "@/components/Footer";
import ProductSearchPage from "@/components/products/ProductSearchPage";

interface Product {
  id: string;
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  date: string;
  priority: string;
  imageUrl?: string;
}

async function getProducts(): Promise<Product[]> {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "https://next-server-ashy.vercel.app";
    const res = await fetch(`${backendUrl}/products`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch products");
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-10 space-y-6 text-slate-200">
        <ProductSearchPage products={products} />
      </div>

      <div className="max-w-7xl mx-auto">
        <Footer />
      </div>
    </>
  );
}
