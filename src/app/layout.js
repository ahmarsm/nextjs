import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Next.js Learning",
  description: "Learning Next.js step by step",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header>
          <h2>My Website</h2>
        </header>

        {children}

        <footer>
          <p>Copyright 2026 My Website</p>
        </footer>
      </body>
    </html>
  );
}