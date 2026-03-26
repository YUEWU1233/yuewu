import type { Metadata } from "next";
import { IBM_Plex_Mono, Source_Sans_3, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import HeaderNav from "./headernav";
import { Sidebar } from "./sidebar";
import SiteFooter from "./Footer";

const primarySans = Source_Sans_3({
  variable: "--font-literary-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const geistMono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const headingFont = Cormorant_Garamond({
  variable: "--font-literary-serif",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yue Wu's Page",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primarySans.variable} ${geistMono.variable} ${headingFont.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="sm:hidden">
          <HeaderNav />
        </div>
        <div className="grow flex max-w-screen">
          <div className="hidden sm:block">
            <Sidebar />
          </div>
          <div className="grow max-w-screen">
            <main className="">{children}</main>
            <footer className="opacity-50">
              
              <SiteFooter />
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
