import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VEKSON® — Ideas digitales, hechas realidad",
  description:
    "Diseñamos y desarrollamos sitios web, tiendas online y productos digitales para marcas con ganas de ir más allá.",
  openGraph: {
    title: "VEKSON® — Ideas digitales, hechas realidad",
    description:
      "Estudio digital independiente. Estrategia, diseño y tecnología para marcas en movimiento.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
