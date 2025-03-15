import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/topNav";

const interMedium = Inter();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interMedium.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
