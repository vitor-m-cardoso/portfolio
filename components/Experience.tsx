const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
)

export default function Experience() {
  return (
    <section id="experience" className="grid-bg">
      <div className="container">
        <div className="sec-label"><span>//</span> EXPERIÊNCIA</div>
        <div className="sec-title reveal">Onde já trabalhei</div>
        <div className="exp-timeline">
          <div className="timeline-line" />

          {/* CI&T — esquerda */}
          <div className="exp-item">
            <div className="exp-card reveal reveal-delay-1">
              <div className="exp-date"><BriefcaseIcon /> 2025 — Presente</div>
              <div className="exp-company">CI&amp;T</div>
              <div className="exp-role">Desenvolvedor backend</div>
              <div className="exp-desc">
                Participo do desenvolvimento de um sistema responsável pela análise de métricas relacionado à
                qualidade do uso de IA que suporta +8000 usuários.
              </div>
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">Node</span>
                <span className="tag">TypeScript</span>
                <span className="tag">AI</span>
                <span className="tag">DataViz</span>
              </div>
            </div>
            <div className="exp-dot-col"><div className="exp-dot" /></div>
            <div className="exp-empty" />
          </div>

          {/* Trybe — direita */}
          <div className="exp-item">
            <div className="exp-empty" />
            <div className="exp-dot-col"><div className="exp-dot" /></div>
            <div className="exp-card reveal reveal-delay-1">
              <div className="exp-date"><BriefcaseIcon /> 2022 — 2024</div>
              <div className="exp-company">Trybe</div>
              <div className="exp-role">Instrutor de Desenvolvimento Web</div>
              <div className="exp-desc">
                Responsável pela formação técnica em desenvolvimento web de mais de 2.000 estudantes
                distribuídos em 14 turmas.
              </div>
              <div className="tags">
                <span className="tag">TypeScript</span>
                <span className="tag">Docker</span>
                <span className="tag">SQL</span>
                <span className="tag">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
