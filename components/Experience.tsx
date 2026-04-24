'use client'

import { useReveal } from '@/hooks/usePortfolio'
import { useLang } from '@/context/LanguageContext'

const expTags = [
  ['Python', 'Node', 'TypeScript', 'AI', 'DataViz'],
  ['TypeScript', 'Docker', 'SQL', 'Node.js'],
]

const CalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

export default function Experience() {
  useReveal()
  const { t } = useLang()

  return (
    <section id="experience" className="grid-bg">
      <div className="container">
        <div className="sec-eyebrow">{t.expLabel}</div>
        <div className="sec-title reveal">{t.expTitle}</div>
        <div className="exp-timeline" style={{ marginTop: 64 }}>
          <div className="timeline-line" />
          {t.expItems.map((exp, i) => (
            <div key={i} className="exp-item">
              {i % 2 === 0 ? (
                <>
                  <div className={`exp-card shimmer-card reveal reveal-d${i + 1}`}>
                    <div className="exp-meta">
                      <CalIcon />
                      {exp.date}
                    </div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-desc">{exp.desc}</div>
                    <div className="tags">
                      {expTags[i].map((tag) => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                  </div>
                  <div className="exp-dot-col"><div className="exp-dot" /></div>
                  <div className="exp-empty" />
                </>
              ) : (
                <>
                  <div className="exp-empty" />
                  <div className="exp-dot-col"><div className="exp-dot" /></div>
                  <div className={`exp-card shimmer-card reveal reveal-d${i + 1}`}>
                    <div className="exp-meta">
                      <CalIcon />
                      {exp.date}
                    </div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-desc">{exp.desc}</div>
                    <div className="tags">
                      {expTags[i].map((tag) => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
