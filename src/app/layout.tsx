import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PawPointments - Pet Care & Vet Appointments",
  description: "Book veterinary appointments for your pets with ease. Professional pet care services at your fingertips.",
  keywords: ["pet care", "veterinarian", "appointments", "pets", "animal health"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-paw-gray-100 text-paw-gray-900 antialiased`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}