import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — SampleSite",
  description: "Get in touch with us using the contact form",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
