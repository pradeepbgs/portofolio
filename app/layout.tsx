import type { Metadata } from "next";
import "./globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { jura } from "@/fonts/jura";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { PostHogProvider } from "./providers";

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
        <MaxWidthWrapper>
          <Navbar />
          <PostHogProvider>{children}</PostHogProvider>
          <Footer />
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
