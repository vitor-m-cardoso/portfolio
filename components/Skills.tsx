'use client'

import { useReveal, useSkillBars } from '@/hooks/usePortfolio'
import { useLang } from '@/context/LanguageContext'

const skillData = [
  [
    { name: 'Python', pct: 95 },
    { name: 'TypeScript', pct: 91 },
    { name: 'Node.js / Nest.js', pct: 91 },
    { name: 'React / Next.js', pct: 75 },
  ],
  [
    { name: 'Docker', pct: 89 },
    { name: 'CI/CD', pct: 87 },
    { name: 'PostgreSQL', pct: 83 },
    { name: 'Kubernetes', pct: 68 },
  ],
  [
    { name: 'Anthropic Claude', pct: 90 },
    { name: 'LangChain', pct: 80 },
    { name: 'PyTorch', pct: 78 },
    { name: 'pgvector', pct: 77 },
  ],
]

export default function Skills() {
  useReveal()
  useSkillBars()
  const { t } = useLang()

  return (
    <section id="skills" className="grid-bg">
      <div className="container">
        <div className="sec-eyebrow">{t.skillsLabel}</div>
        <div className="sec-title reveal">{t.skillsTitle}</div>
        <div className="sec-sub reveal">{t.skillsSub}</div>
        <div className="skills-grid">
          {skillData.map((skills, ci) => (
            <div key={ci} className={`skill-card shimmer-card shimmer-purple reveal reveal-d${ci + 1}`}>
              <div className="skill-card-hd">
                <div className="skill-ico">
                  {ci === 0 ? (
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  ) : ci === 1 ? (
                    <svg viewBox="0 0 24 24">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2V9.5A4 4 0 0 1 8 6a4 4 0 0 1 4-4z" />
                      <circle cx="9" cy="15" r="0.8" fill="currentColor" />
                      <circle cx="15" cy="15" r="0.8" fill="currentColor" />
                    </svg>
                  )}
                </div>
                <span className="skill-card-title">{t.skillCats[ci]}</span>
              </div>
              {skills.map((s) => (
                <div
                  key={s.name}
                  className="skill-item"
                  style={{ '--target-w': `${s.pct}%` } as React.CSSProperties}
                >
                  <div className="skill-row">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.pct}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
