import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chats",
  description: "Alapon",
};

export default function ChatsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {children}
    </div>
  );
}
