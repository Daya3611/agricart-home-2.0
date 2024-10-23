import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Agricart",
  description: "Agricart Farmers Producer Company Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={bricolage_grotesque.className}>
      <Header/>
        {children}
      <Footer/>
        {/* <h1 className="text-center">This site is temporarily unavailable. Please check back later.</h1> */}
      </body>
    </html>
  );
}
