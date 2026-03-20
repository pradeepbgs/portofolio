import type { Metadata } from "next";
import "./globals.css";
import { jura } from "@/fonts/jura";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export const metadata: Metadata = {
  title: "Pradeep Kumar",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jura.className} antialiased`}>
        <Background />
        <Navbar />
        <div
          className="relative max-w-4xl mx-auto px-5 pt-16"
          style={{ zIndex: 10 }}
        >
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
