import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SessionWrapper from "../components/SessionWrapper";
// import { useEffect} from 'react';
// import { useSession} from "next-auth/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a chai!- Fund my projects.",
  description: "A website crowdfunding platform for Coders",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className="bg-black bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] text-white">
      <SessionWrapper>
        <Navbar />
        <div className="text-white min-h-screen bg-black bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">{children}</div>
       
        <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
