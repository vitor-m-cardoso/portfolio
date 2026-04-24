'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/usePortfolio'
import { useLang } from '@/context/LanguageContext'

export default function About() {
  useReveal()
  const { t, lang } = useLang()

  return (
    <section id="about" className="grid-bg">
      <div className="container">
        <div className="sec-eyebrow">{t.aboutLabel}</div>
        <div className="sec-title reveal">{t.aboutTitle}</div>
        <div className="sec-sub reveal">{t.aboutSub}</div>
        <div className="about-grid">
          {/* Left column: photo + terminal */}
          <div className="reveal">
            <div className="about-photo-wrap">
              <Image
                src="/about-photo.jpg"
                alt="Vitor Cardoso workspace"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="about-photo-overlay" />
              <span className="about-photo-label">~/workspace</span>
            </div>
            <div className="terminal-card">
              <div className="terminal-header">
                <span className="dot dot-r" />
                <span className="dot dot-y" />
                <span className="dot dot-g" />
                <span className="terminal-title">~/vitor-m-cardoso</span>
              </div>
              <div className="terminal-body">
                <div><span className="t-prompt">$ </span><span className="t-cmd">whoami</span></div>
                <div><span className="t-prompt">&gt; </span><span className="t-cyan">vitor-m-cardoso</span></div>
                <br />
                <div><span className="t-prompt">$ </span><span className="t-cmd">cat</span> skills.txt</div>
                <div><span className="t-prompt">&gt; </span><span className="t-out">python, typescript, nextjs,</span></div>
                <div><span className="t-prompt">&gt; </span><span className="t-out">kubernetes, pytorch, langchain</span></div>
                <div><span className="t-prompt">&gt; </span><span className="t-out">SQL, NoSQL, ML/AI</span></div>
                <br />
                <div><span className="t-prompt">$ </span><span className="t-cmd">echo</span> $STATUS</div>
                <div>
                  <span className="t-prompt">&gt; </span>
                  <span className="t-str">{t.terminalStatus}</span>
                </div>
                <br />
                <div>
                  <span className="t-prompt">$ </span>
                  <span className="t-out">_</span>
                  <span className="hero-cursor" />
                </div>
              </div>
            </div>
          </div>

          {/* Right column: text + stats */}
          <div>
            <div className="about-text">
              <p className="reveal reveal-d1" dangerouslySetInnerHTML={{ __html: t.aboutP1 }} />
              <p className="reveal reveal-d2" dangerouslySetInnerHTML={{ __html: t.aboutP2 }} />
              <p className="reveal reveal-d3" dangerouslySetInnerHTML={{ __html: t.aboutP3 }} />
            </div>
            <div className="stats reveal reveal-d2">
              {t.stats.map((s) => (
                <div key={s.num + s.lbl} className="stat">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
