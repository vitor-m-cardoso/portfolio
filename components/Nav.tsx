'use client'

import Link from 'next/link'
import { useNavScrolled, useScrollSpy } from '@/hooks/usePortfolio'
import { useLang } from '@/context/LanguageContext'

const NAV_IDS = ['about', 'projects', 'skills', 'experience', 'blog', 'contact']

export default function Nav() {
  const scrolled = useNavScrolled()
  const active = useScrollSpy(NAV_IDS)
  const { t, lang, setLang } = useLang()

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <Link href="#hero" className="nav-logo">vitorcardosodev</Link>
        <div className="nav-links">
          {t.nav.map((label, i) => (
            <a key={label} href={`#${NAV_IDS[i]}`} className={active === NAV_IDS[i] ? 'active' : ''}>
              {label}
            </a>
          ))}
          <button className="lang-toggle" onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}>
            {t.langToggle}
          </button>
        </div>
      </div>
    </nav>
  )
}
