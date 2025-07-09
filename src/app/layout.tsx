// app/layout.tsx
import './globals.css'
import './styles/loader.css'

import { JetBrains_Mono as JetBrainsMono } from 'next/font/google'
import type { Metadata } from 'next'

import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import AuthProvider from '@/app/components/AuthProvider'

const jetMono = JetBrainsMono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-jet-mono'
})

export const metadata: Metadata = {
  title: 'Login Template',
  description: 'A simple login template using Next.js and NextAuth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col font-mono ${jetMono.variable}`} style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <AuthProvider>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
