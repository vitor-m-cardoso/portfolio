export default function Skills() {
  return (
    <section id="skills" className="grid-bg">
      <div className="container">
        <div className="sec-label"><span>//</span> Habilidades</div>
        <div className="sec-title reveal">Tecnologias</div>
        <div className="sec-sub reveal">As ferramentas e tecnologias que uso diariamente.</div>
        <div className="skills-grid">
          <div className="skill-card reveal reveal-delay-1">
            <div className="skill-card-header">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span className="skill-card-title">Desenvolvimento Web</span>
            </div>
            {[
              { name: 'TypeScript', pct: 91 },
              { name: 'React / Next.js', pct: 75 },
              { name: 'Node.js', pct: 91 },
              { name: 'Python', pct: 95 },
            ].map((s) => (
              <div key={s.name} className="skill-item">
                <div className="skill-row">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-pct">{s.pct}%</span>
                </div>
                <div className="bar">
                  <div className="bar-fill" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="skill-card reveal reveal-delay-2">
            <div className="skill-card-header">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <span className="skill-card-title">Infra</span>
            </div>
            {[
              { name: 'Docker', pct: 89 },
              { name: 'Kubernetes', pct: 68 },
              { name: 'CI/CD', pct: 87 },
              { name: 'PostgreSQL', pct: 83 },
            ].map((s) => (
              <div key={s.name} className="skill-item">
                <div className="skill-row">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-pct">{s.pct}%</span>
                </div>
                <div className="bar">
                  <div className="bar-fill" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
