"use client";

interface ProductSearchAndFilterProps {
  search: string;
  category: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export default function ProductSearchAndFilter({
  search,
  category,
  onSearchChange,
  onCategoryChange,
}: ProductSearchAndFilterProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
      <input
        className="w-full md:w-1/2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="Search products..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        className="w-full md:w-48 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="high">High Priority</option>
        <option value="low">Low Priority</option>
      </select>
    </div>
  );
}
