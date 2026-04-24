'use client'

import { useReveal } from '@/hooks/usePortfolio'
import { useLang } from '@/context/LanguageContext'

export default function Blog() {
  useReveal()
  const { t } = useLang()

  return (
    <section id="blog" className="grid-bg">
      <div className="container">
        <div className="sec-eyebrow">{t.blogLabel}</div>
        <div className="sec-title reveal">{t.blogTitle}</div>
        <div className="sec-sub reveal">{t.blogSub}</div>
        <div className="blog-grid">
          <a
            className="blog-card shimmer-card shimmer-purple reveal reveal-d1"
            href="https://medium.com/@vitorcaardoso1997/guia-pr%C3%A1tico-resumo-das-principais-refer%C3%AAncias-de-python-1b2e07c5c6cf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="blog-top">
              <span className="blog-badge">{t.blogBadge}</span>
              <span className="blog-arrow">↗</span>
            </div>
            <div className="blog-title">{t.blogPostTitle}</div>
            <div className="blog-desc">{t.blogPostDesc}</div>
            <div className="blog-meta">
              <span>Medium</span>
              <span>·</span>
              <span>{t.blogReadOn}</span>
            </div>
          </a>

          <div className="placeholder-card shimmer-card reveal reveal-d2" style={{ minHeight: 220 }}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            {t.projectPlaceholder}
          </div>
        </div>
      </div>
    </section>
  )
}
