import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Киселёв Максим | Web Developer',
  description:
    'Опытный веб-разработчик, специализирующийся на React, Node, Postgres.',
  keywords:
    'веб-разработка, React, Next, TypeScript, Node.js, Nest, Postgres, тестирование',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
