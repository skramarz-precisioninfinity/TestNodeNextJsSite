import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — SampleSite",
  description: "About this sample Next.js site",
};

const techStack = [
  { name: "Next.js 16", description: "React framework with App Router" },
  { name: "React 19", description: "UI component library" },
  { name: "TypeScript", description: "Typed JavaScript" },
  { name: "Tailwind CSS 4", description: "Utility-first CSS framework" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10 max-w-2xl">
      <section className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
          This is a sample Next.js site built to demonstrate the core features
          of the Next.js App Router: file-based routing, server components,
          API routes, and form handling.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">What&apos;s included</h2>
        <ul className="list-disc list-inside flex flex-col gap-2 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
          <li>A <strong>homepage</strong> with navigation cards linking to each section</li>
          <li>An <strong>About</strong> page (you are here)</li>
          <li>A <strong>Products</strong> page that fetches data from the sample API</li>
          <li>A <strong>Contact</strong> page with a fully functional form</li>
          <li>A sample <strong>REST API</strong> at <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 rounded">/api/products</code> and <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 rounded">/api/contact</code></li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {techStack.map(({ name, description }) => (
            <div
              key={name}
              className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-4"
            >
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

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
