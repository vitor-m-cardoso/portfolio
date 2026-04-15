import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vitor Cardoso — Dev Backend',
  description: 'Desenvolvedor fullstack construindo sistemas inteligentes — transformando pesquisa em produtos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
