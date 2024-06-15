import { Metadata } from "next";
import "./globals.css";
import {Nunito} from 'next/font/google'
import Navbar from "@/components/Navbar/Navbar";
import RegisterModal from "@/components/modal/RegisterModal";
import ToasterProvider from "@/providers/ToasterProvider";


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
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
        </body>
    </html>
  );
}
