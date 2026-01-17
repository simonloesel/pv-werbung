import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '../components/site/Header'
import { Footer } from '../components/site/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PV-Anlagen entwickeln und Strom direkt abnehmen',
  description: 'Wir entwickeln PV-Anlagen auf Gewerbeflächen und liefern den erzeugten Strom direkt an den Standort (Onsite/PPA).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
