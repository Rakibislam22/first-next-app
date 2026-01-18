"use client";

import { useMemo } from "react";
import ProductCard from "./ProductCard";

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

interface ProductListProps {
  products: Product[];
  search: string;
  category: string;
}

export default function ProductList({ products, search, category }: ProductListProps) {
  const filtered = useMemo(() => {
    let result = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== "all") {
      result = result.filter((p) => p.priority === category);
    }

    return result;
  }, [products, search, category]);

  if (filtered.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p className="text-lg">No products found</p>
        <p className="text-sm mt-2">Try adjusting your search or filter</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filtered.map((prod) => (
        <ProductCard key={prod._id} product={prod} />
      ))}
    </div>
  );
}
