import type { Metadata } from "next";
import { Bebas_Neue, Inter, Space_Grotesk, Monoton, Outfit } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const monoton = Monoton({
  variable: "--font-monoton",
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oporto Dancehall 2.0 — Estamos de volta",
  description:
    "A festa de dancehall do Porto está de regresso. 11 anos de história, novo capítulo.",
  openGraph: {
    title: "Oporto Dancehall 2.0",
    description: "Estamos de volta.",
    locale: "pt_PT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      data-vibe="caribean"
      className={`${bebas.variable} ${inter.variable} ${spaceGrotesk.variable} ${monoton.variable} ${outfit.variable} h-full antialiased`}
      style={{
        // map next/font CSS vars into our design tokens via inline override per vibe
        // each vibe page will set data-vibe; default is caribean
      }}
    >
      <body className="min-h-full flex flex-col grain">{children}</body>
    </html>
  );
}
