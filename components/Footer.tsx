'use client'

import { useLang } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer>
      <span className="footer-copy">{t.footerCopy}</span>
      <div className="footer-links">
        <a href="https://github.com/vitor-m-cardoso" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/vitormcardoso/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://medium.com/@vitorcaardoso1997" className="footer-link" target="_blank" rel="noopener noreferrer">Medium</a>
      </div>
    </footer>
  )
}
