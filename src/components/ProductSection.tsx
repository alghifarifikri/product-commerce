import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ProductSectionProps } from "@/utils/interface";

export default function ProductSection({ products }: ProductSectionProps) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string | null>(null);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const filteredProducts = products
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    )
    .sort((a, b) => {
      if (!sortOrder) return 0;
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <section id="products" className="py-16 bg-gray-100 px-5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#013787]">
          Our Products
        </h2>

        <div className="mb-8 flex flex-wrap justify-between items-center gap-4">
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Filter by Category:
            </label>
            <select
              id="category"
              className="block w-full max-w-xs rounded-lg text-black p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={selectedCategory || ""}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="sortOrder"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Sort by Price:
            </label>
            <select
              id="sortOrder"
              className="block w-full max-w-xs text-black p-2 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={sortOrder || ""}
              onChange={(e) => setSortOrder(e.target.value || null)}
            >
              <option value="">Default</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-shadow p-4 cursor-pointer"
                onClick={() => router.push(`/product/${product.id}`)}
              >
                <div className="relative w-full h-52">
                  <Image
                    src={product.thumbnail || "/placeholder.jpg"}
                    alt={product.title || "Product Image"}
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div className="pt-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 min-h-[48px]">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 min-h-[60px]">
                      {product.description}
                    </p>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600 mb-4">
                      Rp. {product.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No products available.</p>
        )}
      </div>
    </section>
  );
}
