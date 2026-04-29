'use client'

import { useReveal } from '@/hooks/usePortfolio'
import { useLang } from '@/context/LanguageContext'

export default function Projects() {
  useReveal()
  const { t } = useLang()

  return (
    <section id="projects" className="grid-bg">
      <div className="container">
        <div className="sec-eyebrow">{t.projectsLabel}</div>
        <div className="sec-title reveal">{t.projectsTitle}</div>
        <div className="sec-sub reveal">{t.projectsSub}</div>
        <div className="projects-grid">
          {/* MarketPulse */}
          <div className="project-card shimmer-card reveal reveal-d1">
            <div className="project-top">
              <div className="project-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <a href="#" className="project-link-arrow">↗</a>
            </div>
            <div className="project-title">MarketPulse</div>
            <div className="project-desc">{t.projectDesc}</div>
            <div className="tags">
              {['React', 'Docker', 'Apache Spark', 'BigQuery', 'Airflow'].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* AI Reverse UI Lab */}
          <div className="project-card shimmer-card reveal reveal-d2">
            <div className="project-top">
              <div className="project-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <a href="#" className="project-link-arrow">↗</a>
            </div>
            <div className="project-title">AI Reverse UI Lab</div>
            <div className="project-desc">{t.aiLabDesc}</div>
            <div className="tags">
              {['Next.js', 'NestJS', 'Gemini 2.0', 'Three.js', 'GSAP', 'Playwright', 'Prisma', 'PostgreSQL'].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* AI Financial Assistant */}
          <div className="project-card shimmer-card reveal reveal-d3">
            <div className="project-top">
              <div className="project-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 7h15a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7z" />
                  <path d="M3 7a2 2 0 0 1 2-2h11" />
                  <circle cx="17" cy="13.5" r="1.25" fill="currentColor" />
                </svg>
              </div>
              <a href="#" className="project-link-arrow">↗</a>
            </div>
            <div className="project-title">AI Financial Assistant</div>
            <div className="project-desc">{t.aiFinancialDesc}</div>
            <div className="tags">
              {['Next.js', 'React', 'NestJS', 'Prisma', 'PostgreSQL', 'Groq', 'Gemini', 'Docker'].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Placeholder */}
          <div className="placeholder-card shimmer-card reveal reveal-d4">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            {t.projectPlaceholder}
          </div>
        </div>
      </div>
    </section>
  )
}
