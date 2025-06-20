import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const RobotoFont = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pet Parents Love Us",
  description: "Premium Natural Pet Food For Healthy, Happy Pets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${RobotoFont.variable}  antialiased bg-sky-50` }>{children}</body>
    </html>
  );
}
