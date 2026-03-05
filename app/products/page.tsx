import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products — SampleSite",
  description: "Browse our sample product catalog",
};

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
}

async function getProducts(): Promise<Product[]> {
  // In production this would be an absolute URL; for SSR in Next.js we can
  // import the data directly. Here we reuse the same data the API exposes.
  const { PRODUCTS } = await import("../api/products/data");
  return PRODUCTS;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Products</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          {products.length} products available &mdash; data served from{" "}
          <a
            href="/api/products"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 hover:underline font-mono text-sm"
          >
            /api/products
          </a>
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-3 rounded-2xl border border-zinc-200 dark:border-zinc-700 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                {product.category}
              </span>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  product.inStock
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <h2 className="text-base font-semibold">{product.name}</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 flex-1">
              {product.description}
            </p>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div>
        <Link
          href="/"
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
