import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kancharla Lakshmi Vyshnavi | Data Analyst & AI Enthusiast Portfolio",
  description: "Explore the portfolio of Kancharla Lakshmi Vyshnavi, B.Tech CSE (Artificial Intelligence) student at Narayana Engineering College. Specializing in Python, SQL, Machine Learning, and Interactive AI Interfaces.",
  keywords: ["Kancharla Lakshmi Vyshnavi", "Data Analyst", "AI Enthusiast", "Machine Learning Portfolio", "Python Developer", "SkillVerse-AI", "NovaX-AI"],
  authors: [{ name: "Kancharla Lakshmi Vyshnavi" }],
  creator: "Kancharla Lakshmi Vyshnavi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col relative selection:bg-cyber-cyan selection:text-black">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
