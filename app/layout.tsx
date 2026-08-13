import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colin Sanders",
  description: "Senior engineer at AWS building the software that qualifies every server entering EC2's fleet. Shipping products on the side.",
  metadataBase: new URL("https://colinsanders.dev"),
  openGraph: {
    title: "Colin Sanders",
    description: "Senior engineer at AWS building the software that qualifies every server entering EC2's fleet. Shipping products on the side.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colin Sanders",
    description: "Senior engineer at AWS building the software that qualifies every server entering EC2's fleet. Shipping products on the side.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
