import type { Metadata } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './styles/globals.scss'
import Entete from './composants/entete'
import Footer from './composants/footer'

export const metadata: Metadata = {
  title: 'Moumy Ndiaye',
  description: 'Portfolio développer avec create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Entete />
          {children}
        <Footer />
        <SpeedInsights/>
      </body>
    </html>
  )
}
