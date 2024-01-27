import type { Metadata } from 'next'
import { Heebo, Kalam } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const heebo = Heebo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heebo',
})

const kalam = Kalam({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kalam',
})

export const metadata: Metadata = {
  title: 'Melqui Sodre',
  description: 'Meu portifolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={`${heebo.variable} ${kalam.variable}`}>
      <body className="bg-surface-background font-heebo text-white scroll-smooth antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
