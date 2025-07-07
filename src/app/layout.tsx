import type { Metadata } from "next";
import "./globals.css";
import "./styles/loader.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AuthProvider from "@/app/components/AuthProvider";

export const metadata: Metadata = {
  title: "Login Template",
  description: "A simple login template using Next.js and NextAuth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <AuthProvider>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
