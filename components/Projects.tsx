export default function Projects() {
  return (
    <section id="projects" className="grid-bg">
      <div className="container">
        <div className="sec-label"><span>//</span> PROJETOS</div>
        <div className="sec-title reveal">O que já construí</div>
        <div className="sec-sub reveal">Sistemas que entregam valor real.</div>
        <div className="projects-grid">
          <div className="project-card reveal reveal-delay-1">
            <div className="project-icon">
              <svg viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="project-title">MarketPulse</div>
            <div className="project-desc">
              Uma ferramenta para e-commerce que automatiza a análise de preços para produtos equivalentes,
              oferecendo sugestões de preço atualizadas com o uso de IA.
            </div>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">Docker</span>
              <span className="tag">Apache Spark</span>
              <span className="tag">BigQuery</span>
              <span className="tag">Airflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
