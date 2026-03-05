import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sample Next.js Site",
  description: "A sample Next.js site with multiple pages and a sample API",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground">
        <header className="border-b border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
              SampleSite
            </Link>
            <ul className="flex gap-6">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-10">
          {children}
        </main>
        <footer className="border-t border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900">
          <div className="max-w-5xl mx-auto px-6 py-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} SampleSite. Built with Next.js.
          </div>
        </footer>
      </body>
    </html>
  );
}
