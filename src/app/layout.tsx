import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import Metrika from '@/app/components/Metrika'

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
      <Suspense>
        <Metrika />
      </Suspense>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
