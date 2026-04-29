'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useNavScrolled, useScrollSpy } from '@/hooks/usePortfolio'
import { useLang } from '@/context/LanguageContext'

const NAV_IDS = ['about', 'projects', 'skills', 'experience', 'blog', 'contact']

export default function Nav() {
  const scrolled = useNavScrolled()
  const active = useScrollSpy(NAV_IDS)
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <Link href="#hero" className="nav-logo" onClick={() => setOpen(false)}>vitorcardosodev</Link>
        <button
          className={`nav-burger${open ? ' open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
        <div className={`nav-links${open ? ' open' : ''}`}>
          {t.nav.map((label, i) => (
            <a
              key={label}
              href={`#${NAV_IDS[i]}`}
              className={active === NAV_IDS[i] ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <button
            className="lang-toggle"
            onClick={() => { setLang(lang === 'pt' ? 'en' : 'pt'); setOpen(false) }}
          >
            {t.langToggle}
          </button>
        </div>
      </div>
    </nav>
  )
}
