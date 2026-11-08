import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import LanguageSwitcher from "../components/LanguageSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Next.js Learning",
  description: "Learning Next.js step by step",
};

export default async function RootLayout({ params, children }) {
  const { lang } = await params;
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
      <body>
        <header>
          <h2>My Website</h2>
          <LanguageSwitcher />
        </header>

        {children}

        <footer>
          <p>Copyright 2026 My Website</p>
        </footer>
      </body>
    </html>
  );
}