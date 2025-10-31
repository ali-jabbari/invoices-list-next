import type { Metadata } from "next";
import "./globals.css";
import { iranYekan } from "@/utils/fonts";


export const metadata: Metadata = {
  title: "رامان | پنل تامین کننده"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranYekan.variable} font-iran-yekan antialiased`}>
         <div id="portal" />
        {children}
      </body>
    </html>
  );
}
