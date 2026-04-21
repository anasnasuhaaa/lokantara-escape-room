import type { Metadata } from "next";
import { Geist, Geist_Mono, Creepster } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const getCreepster = Creepster({
//   variable: "--font-creepster",
//   subsets: ["latin"],
// });


export const metadata: Metadata = {
  title: "Lokantara Escape Room",
  description: "Interactive horror-themed quiz with 5 spine-chilling stages. Test your nerve if you dare...",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-black">{children}</body>
    </html>
  );
}
