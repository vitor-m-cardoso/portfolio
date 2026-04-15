export default function Blog() {
  return (
    <section id="blog" className="grid-bg">
      <div className="container">
        <div className="sec-label"><span>//</span> BLOG</div>
        <div className="sec-title reveal">Publicações e ideias</div>
        <div className="sec-sub reveal">
          Pensamentos sobre desenvolvimento de sistemas, inteligência artificial e construção de produtos.
        </div>
        <div className="blog-grid">
          <a
            className="blog-card reveal reveal-delay-1"
            href="https://medium.com/@vitorcaardoso1997/guia-pr%C3%A1tico-resumo-das-principais-refer%C3%AAncias-de-python-1b2e07c5c6cf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="blog-top">
              <span className="blog-badge">Python</span>
              <span className="blog-arrow">↗</span>
            </div>
            <div className="blog-title">Guia Prático — Resumo das Principais Referências de Python</div>
            <div className="blog-desc">
              Um guia prático completo com as principais referências e conceitos de Python para desenvolvedores iniciantes.
            </div>
            <div className="blog-meta">
              <span>Medium</span>
              <span className="blog-meta-item">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Ler no Medium
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
