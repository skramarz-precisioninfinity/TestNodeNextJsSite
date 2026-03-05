import Link from "next/link";

const pages = [
  {
    href: "/about",
    title: "About",
    description: "Learn more about this sample site and what it demonstrates.",
    icon: "ℹ️",
  },
  {
    href: "/products",
    title: "Products",
    description: "Browse a sample list of products fetched from our API.",
    icon: "🛍️",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Send us a message using the contact form.",
    icon: "✉️",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="flex flex-col gap-4 text-center py-12">
        <h1 className="text-5xl font-bold tracking-tight">
          Welcome to SampleSite
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
          A sample Next.js site featuring multiple pages, a contact form, and a
          REST API.
        </p>
        <div className="flex gap-4 justify-center mt-4">
          <Link
            href="/products"
            className="rounded-full bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 px-6 py-2.5 text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            Browse Products
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Page Cards */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Explore the Site</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pages.map(({ href, title, description, icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-3 rounded-2xl border border-zinc-200 dark:border-zinc-700 p-6 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-md transition-all"
            >
              <span className="text-3xl">{icon}</span>
              <h3 className="text-lg font-semibold group-hover:underline">
                {title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* API Info */}
      <section className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 p-6">
        <h2 className="text-2xl font-semibold mb-2">Sample API</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
          This site includes a sample REST API. Try these endpoints:
        </p>
        <ul className="flex flex-col gap-2 text-sm font-mono">
          <li>
            <a
              href="/api/products"
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GET /api/products
            </a>{" "}
            — List all products
          </li>
          <li>
            <span className="text-zinc-400">POST /api/contact</span> — Submit a
            contact form
          </li>
        </ul>
      </section>
    </div>
  );
}
