import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image Crop Demo",
  description: "A demo of image cropping with React and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="pt-10 pb-5 max-w-7xl mx-auto">
          <h1 className="text-5xl text-center xl:text-7xl font-bold tracking-tighter">
            Image Crop Demo
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
