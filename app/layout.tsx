import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R.K.AMDAHL | Portfolio",
  description:
    "Passionate frontend developer with a design background. Proficient in HTML, CSS, JavaScript, React, Tailwind CSS, and responsive design. Explore my diverse portfolio for captivating and responsive online solutions! Let's bring your ideas to life.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
