import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import DialogflowChatbot from "@/components/DialogflowChatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenya College - Excellence in Education",
  description:
    "Join Kenya's leading college offering world-class education in science, technology, business, and the arts. Discover programs designed for your success.",
  openGraph: {
    title: "Kenya College - Excellence in Education",
    description:
      "Transform your future with quality education at Kenya College. Explore our diverse programs and vibrant campus community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
        <DialogflowChatbot />
      </body>
    </html>
  );
}
