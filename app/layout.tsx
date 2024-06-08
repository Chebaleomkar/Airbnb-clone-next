import { Metadata } from "next";
import "./globals.css";
import {Nunito} from 'next/font/google'
import Navbar from "@/components/Navbar/Navbar";


export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone Next App",
};

const font = Nunito({ subsets : ['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
