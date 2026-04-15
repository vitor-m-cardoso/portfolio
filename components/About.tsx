export default function About() {
  return (
    <section id="about" className="grid-bg">
      <div className="container">
        <div className="sec-label"><span>//</span> SOBRE</div>
        <div className="sec-title reveal">Construindo sistemas que entregam valor</div>
        <div className="sec-sub reveal">Não apenas pesquisa — sistemas em produção que escalam.</div>
        <div className="about-grid">
          <div className="reveal">
            <div className="about-img">
              <div style={{ width: '100%' }}>
                <div className="terminal-bar">
                  <span className="tb tb-r" />
                  <span className="tb tb-y" />
                  <span className="tb tb-g" />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#555', marginLeft: '8px' }}>
                    terminal
                  </span>
                </div>
                <div className="code-preview">
                  <div><span style={{ color: '#555' }}>$</span> <span className="fn">whoami</span></div>
                  <div><span style={{ color: '#555' }}>&gt;</span> vitor-m-cardoso</div>
                  <br />
                  <div><span style={{ color: '#555' }}>$</span> <span className="fn">cat</span> skills.txt</div>
                  <div><span style={{ color: '#555' }}>&gt;</span> python, typescript, nextjs,</div>
                  <div><span style={{ color: '#555' }}>&gt;</span> kubernetes, pytorch, langchain</div>
                  <div><span style={{ color: '#555' }}>&gt;</span> SQL, NoSQL, ML/AI</div>
                  <br />
                  <div><span style={{ color: '#555' }}>$</span> <span className="fn">echo</span> $STATUS</div>
                  <div><span style={{ color: '#555' }}>&gt;</span> <span className="str">codando o futuro</span></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="about-text reveal reveal-delay-1">
              <p>Sou Vitor Cardoso, um desenvolvedor fullstack. Tenho experiência na construção de sistemas de ponta a ponta.</p>
              <p>Meu trabalho abrange backend, frontend, banco de dados, segurança e todo fluxo que envolve a criação de um sistema. Acredito que o melhor sistema não é o mais complexo — é o que confiávelmente entrega valor aos usuários.</p>
            </div>
            <div className="stats-grid reveal reveal-delay-2">
              <div className="stat-card">
                <div className="stat-num">30+</div>
                <div className="stat-lbl">Projetos Entregues</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">2+</div>
                <div className="stat-lbl">Anos de Experiência</div>
              </div>
              <div className="stat-card" style={{ gridColumn: '1 / -1' }}>
                <div className="stat-num">∞</div>
                <div className="stat-lbl">Artigos Lidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
