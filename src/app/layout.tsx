import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Footer } from "@/components/Footer";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agbam Kingsley Emeka | Full-Stack Developer",
  description: "Full-Stack Developer specializing in Next.js and Express.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30`}
      >
        <Navigation />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
