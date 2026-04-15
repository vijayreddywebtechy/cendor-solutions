import type { Metadata } from "next";
import { bodoniModa, manrope } from './fonts'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Cendor Solutions — Enterprise Strategy & Digital Transformation",
  description:
    "Premium B2B consulting, digital transformation, and data intelligence for enterprises that demand measurable outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${manrope.variable}`}>
      <body className="font-manrope antialiased">
        <Navbar />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
