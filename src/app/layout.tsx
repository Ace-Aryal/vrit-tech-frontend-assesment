import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Dipesh Aryal Assesment",
  description: "Home Assesment for frontend intersnhip role",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistSans.variable}antialiased`}
      >
        <div className="flex flex-col  max-w-screen min-h-screen">
          <Navbar />
          <main className="flex-1 h-full my-8 flex flex-col"> {children}</main>
        </div>
      </body>
    </html>
  );
}
