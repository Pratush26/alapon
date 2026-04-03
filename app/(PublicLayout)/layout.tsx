import Footer from "@/components/public/shared/Footer";
import Navbar from "@/components/public/shared/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
  description: "Alapon",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
