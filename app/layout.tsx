import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";

const outfitHeading = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Alapon",
  description: "Alapon, a Chating application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", spaceGrotesk.className, outfit.variable, outfitHeading.variable)}
    >
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
          </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
