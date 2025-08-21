import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const helvetica = localFont({
  variable: "--font-helvetica",
  display: "swap",
  src: [
    {
      path: "./fonts/helvetica/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    {
      path: "./fonts/inter/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/inter/Inter-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/inter/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/inter/Inter-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
});
const ppneuemontreal = localFont({
  variable: "--font-ppneuemontreal",
  display: "swap",
  src: [
    {
      path: "./fonts/pp-neu-emontreal/ppneuemontreal-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/pp-neu-emontreal/ppneuemontreal-semibolditalic.otf",
      weight: "600",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Ruttl - Best Design Feedback Tool",
  description: "A website feedback tool for live website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.variable} ${inter.variable} ${ppneuemontreal.variable} font-normal antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
