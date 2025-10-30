import type { Metadata } from "next";
import "./globals.css";
import { iranYekan } from "@/utils/fonts";


export const metadata: Metadata = {
  title: "رامان"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranYekan.variable} font-iran-yekan antialiased`}>
        {children}
      </body>
    </html>
  );
}
