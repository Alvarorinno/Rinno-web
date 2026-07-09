import type { Metadata } from "next";
import { Roboto, DM_Sans } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rinno | Agencia Tecno Creativa – Potenciamos las marcas del futuro",
  description:
    "En Rinno creamos experiencias publicitarias de impacto en el punto de venta: trade digital, digital signage y espacios interactivos, combinando insights humanos con tecnología de punta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${roboto.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-rinno-dark text-rinno-cloud">
        {children}
      </body>
    </html>
  );
}
