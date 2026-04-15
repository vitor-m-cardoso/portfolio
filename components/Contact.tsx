export default function Contact() {
  return (
    <section id="contact" className="grid-bg">
      <div className="container">
        <div className="sec-label"><span>//</span> CONTATO</div>
        <div className="sec-title reveal">Vamos nos conectar?</div>
        <div className="sec-sub reveal">Entre em contato comigo através do email ou redes sociais.</div>
        <div className="contact-box reveal">
          <a href="mailto:vitor.mauricioc@outlook.com" className="contact-email">
            vitor.mauricioc@outlook.com
          </a>
          <div className="contact-links">
            <a href="https://github.com/vitor-m-cardoso" className="contact-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/vitormcardoso/" className="contact-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
