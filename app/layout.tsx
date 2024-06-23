import { Metadata } from "next";
import "./globals.css";
import {Nunito} from 'next/font/google'
import Navbar from "@/components/Navbar/Navbar";
import RegisterModal from "@/components/modal/RegisterModal";
import ToasterProvider from "@/providers/ToasterProvider";
import LoginModal from "@/components/modal/LoginModal";
import getCurrentUser from "@/actions/getCurrentuser";
import RentModal from "@/components/modal/RentModal";
import { safeUser } from "@/types";
import { User } from "@prisma/client";


export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone Next App",
};

const font = Nunito({ subsets : ['latin']})

export default  async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RentModal />
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser} />
        {children}
        </body>
    </html>
  );
}
