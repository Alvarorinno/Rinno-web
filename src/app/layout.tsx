import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hostGrotesk = localFont({
  variable: "--font-host-grotesk",
  src: [
    {
      path: "./fonts/HostGrotesk-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/HostGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HostGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
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
      className={`${hostGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-rinno-dark text-rinno-cloud">
        {children}
      </body>
    </html>
  );
}
