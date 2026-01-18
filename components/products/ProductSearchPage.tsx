"use client";

import { useState } from "react";
import ProductsHeader from "./ProductsHeader";
import ProductSearchAndFilter from "./ProductSearchAndFilter";
import ProductList from "./ProductList";

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

interface ProductSearchPageProps {
  products: Product[];
}

export default function ProductSearchPage({ products }: ProductSearchPageProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <>
      <ProductsHeader />
      <ProductSearchAndFilter
        search={search}
        category={category}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
      />
      <ProductList products={products} search={search} category={category} />
    </>
  );
}
