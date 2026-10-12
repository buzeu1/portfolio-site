import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://buzaucosmin.vercel.app"),
  title: "Buzau Cosmin-Ionut — AI Software Engineer",
  description:
    "Portfolio of Buzau Cosmin-Ionut — AI Software Engineer building LLM-powered products, machine-learning systems and production full-stack websites for real clients.",
  openGraph: {
    title: "Buzau Cosmin-Ionut — AI Software Engineer",
    description:
      "AI-powered apps, machine-learning systems and full-stack websites used in production every day.",
    url: "https://buzaucosmin.vercel.app",
    type: "website",
    images: ["/profile.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbfbfd] text-slate-900">{children}</body>
    </html>
  );
}
