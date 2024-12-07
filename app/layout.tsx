import type { Metadata } from 'next'
import { Roboto, Mountains_of_Christmas } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })
const mountainsOfChristmas = Mountains_of_Christmas({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mountains-of-christmas',
})

export const metadata: Metadata = {
  title: 'Colegio San Jose - Navidad',
  description: 'Celebrando la Navidad en Colegio San Jose de Barranquilla',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${mountainsOfChristmas.variable}`}>
      <body className={`${roboto.className} snow-bg`}>
        {children}
      </body>
    </html>
  )
}

