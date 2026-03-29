import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Alapon",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {children}
    </div>
  );
}
