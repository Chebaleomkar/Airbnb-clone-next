import { Metadata } from "next";
import "./globals.css";
import {Nunito} from 'next/font/google'
import Navbar from "@/components/Navbar/Navbar";
import Modal from "@/components/modal/Modal";


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
        <Modal secondaryActionLabel="action" actionLabel="submit"  isOpen title="Hello Modal" />
        <Navbar />
        {children}
        </body>
    </html>
  );
}
