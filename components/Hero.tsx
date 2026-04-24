'use client'

import { useTyping } from '@/hooks/usePortfolio'
import { useLang } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLang()
  const typed = useTyping(t.heroTyping, 45, 2400)

  return (
    <section id="hero">
      {/* Math equations background */}
      <div className="hero-math">
        <svg viewBox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <text x="40" y="100" fill="white" fontSize="15" fontFamily="serif">1 - (1/(n+2))ⁿ⁺¹</text>
          <text x="260" y="148" fill="white" fontSize="13" fontFamily="serif">∫₋ₐᵃ x²eᵃʸ dx = 1/a(x²eᵃʸ)</text>
          <text x="80" y="230" fill="white" fontSize="12" fontFamily="serif">∂f/∂x = lim(h→0) [f(x+h)-f(x)]/h</text>
          <text x="520" y="180" fill="white" fontSize="14" fontFamily="serif">ω = √(k/m)</text>
          <text x="820" y="110" fill="white" fontSize="12" fontFamily="serif">T = 2π√(l/g)</text>
          <text x="1100" y="160" fill="white" fontSize="11" fontFamily="serif">∇²φ = ρ/ε₀</text>
          <text x="140" y="420" fill="white" fontSize="11" fontFamily="serif">(-1)ⁿ⁺¹ + (-1)ⁿ = (4n+3)/(n+3)</text>
          <text x="480" y="350" fill="white" fontSize="14" fontFamily="serif">eⁱᵖ + 1 = 0</text>
          <text x="750" y="310" fill="white" fontSize="12" fontFamily="serif">S = ∫dt(½mv² - V(x))</text>
          <text x="1000" y="380" fill="white" fontSize="13" fontFamily="serif">±1 = cos(nπ)</text>
          <text x="60" y="620" fill="white" fontSize="11" fontFamily="serif">F = ma = -∇V(x)</text>
          <text x="350" y="560" fill="white" fontSize="12" fontFamily="serif">Σ(n=1→∞) 1/n² = π²/6</text>
          <text x="700" y="500" fill="white" fontSize="11" fontFamily="serif">P(A|B) = P(B|A)·P(A) / P(B)</text>
          <text x="1050" y="520" fill="white" fontSize="12" fontFamily="serif">λ = h/mv</text>
          <text x="200" y="760" fill="white" fontSize="13" fontFamily="serif">det(A) = Σ aᵢⱼ Cᵢⱼ</text>
          <text x="600" y="720" fill="white" fontSize="11" fontFamily="serif">∮ E·dA = Q/ε₀</text>
          <text x="900" y="680" fill="white" fontSize="12" fontFamily="serif">ΔE·Δt ≥ ℏ/2</text>
          <text x="1150" y="760" fill="white" fontSize="11" fontFamily="serif">c = λf</text>
          <line x1="130" y1="60" x2="130" y2="800" stroke="white" strokeWidth="0.4" opacity="0.4"/>
          <line x1="0" y1="190" x2="240" y2="190" stroke="white" strokeWidth="0.4" opacity="0.4"/>
          <line x1="470" y1="130" x2="470" y2="600" stroke="white" strokeWidth="0.3" opacity="0.3"/>
        </svg>
      </div>

      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-glow2" />

      <div className="hero-content">
        <div className="hero-name">
          <span className="name-white">Vitor </span>
          <span className="name-grad">Cardoso</span>
        </div>
        <div className="hero-handle">vitor-m-cardoso</div>
        <div className="hero-typing">
          {typed}
          <span className="hero-cursor" />
        </div>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">{t.heroBtns[0]}</a>
          <a href="#contact" className="btn-outline">{t.heroBtns[1]}</a>
          <a
            href="https://github.com/vitor-m-cardoso"
            className="btn-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="scroll-hint">
        {t.scroll}
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  )
}
