import "./globals.css";
import { inter, quicksand } from "@/config/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vogue Vault",
  description: "Buy the best!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
