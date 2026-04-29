'use client'

import { createContext, useContext, useState } from 'react'

type Lang = 'pt' | 'en'

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations['pt']
}

export const translations = {
  pt: {
    nav: ['Sobre', 'Projetos', 'Habilidades', 'Experiência', 'Blog', 'Contato'] as string[],
    langToggle: 'EN',
    heroTyping: [
      'Desenvolvedor fullstack construindo sistemas inteligentes.',
      'Transformando pesquisa em produtos que escalam.',
      'Backend, frontend, infra — do zero à produção.',
    ],
    heroBtns: ['Ver Projetos', 'Entre em Contato'],
    scroll: 'scroll',
    terminalStatus: 'codando o futuro 🚀',

    aboutLabel: 'SOBRE',
    aboutTitle: 'Construindo sistemas que entregam valor',
    aboutSub: 'Não apenas pesquisa — sistemas em produção que escalam.',
    aboutP1: { bold: 'Sou Vitor Cardoso', rest: ', um desenvolvedor fullstack. Tenho experiência na construção de sistemas de ponta a ponta.' },
    aboutP2: { bold: '', rest: 'Meu trabalho abrange backend, frontend, banco de dados, segurança e todo fluxo que envolve a criação de um sistema.' },
    aboutP3: { bold: '', rest: 'Acredito que o melhor sistema não é o mais complexo — é o que ', boldInline: 'agrega valor', rest2: ' aos usuários.' },
    stats: [
      { num: '30+', lbl: 'Projetos Entregues' },
      { num: '2+', lbl: 'Anos de Experiência' },
      { num: '∞', lbl: 'Artigos Lidos' },
    ],

    projectsLabel: 'PROJETOS',
    projectsTitle: 'O que já construí',
    projectsSub: 'Sistemas que entregam valor real.',
    projectPlaceholder: '+ em breve',
    projectDesc: 'Uma ferramenta para e-commerce que automatiza a análise de preços para produtos equivalentes, oferecendo sugestões de preço atualizadas com o uso de IA.',
    aiLabDesc: 'Ferramenta que recebe uma URL, extrai a estrutura visual da página e gera um Design System profissional e reutilizável via IA.',
    aiFinancialDesc: 'Dashboard financeiro pessoal com IA generativa para categorização automática de gastos e geração sob demanda de insights sobre padrões de consumo.',

    skillsLabel: 'HABILIDADES',
    skillsTitle: 'Tecnologias',
    skillsSub: 'As ferramentas e tecnologias que uso diariamente.',
    skillCats: ['Desenvolvimento Web', 'Infra', 'ML / AI'],

    expLabel: 'EXPERIÊNCIA',
    expTitle: 'Onde já trabalhei',
    expItems: [
      { date: '2025 — Presente', company: 'CI&T', role: 'Desenvolvedor Backend', desc: 'Participo do desenvolvimento de um sistema responsável pela análise de métricas relacionado à qualidade do uso de IA que suporta +8000 usuários.' },
      { date: '2022 — 2024', company: 'Trybe', role: 'Instrutor de Desenvolvimento Web', desc: 'Responsável pela formação técnica em desenvolvimento web de mais de 2.000 estudantes distribuídos em 14 turmas.' },
    ],

    blogLabel: 'BLOG',
    blogTitle: 'Publicações e ideias',
    blogSub: 'Pensamentos sobre desenvolvimento de sistemas, inteligência artificial e construção de produtos.',
    blogReadOn: 'Ler no Medium',
    blogBadge: 'Python',
    blogPostTitle: 'Guia Prático — Resumo das Principais Referências de Python',
    blogPostDesc: 'Um guia prático completo com as principais referências e conceitos de Python para desenvolvedores.',

    contactLabel: 'CONTATO',
    contactTitle: 'Vamos nos conectar?',
    contactSub: 'Entre em contato comigo através do email ou redes sociais.',
    contactDesc: 'Estou sempre aberto a novas oportunidades, colaborações ou simplesmente para trocar uma ideia.',
    footerCopy: '© 2026 Vitor Cardoso.',
  },
  en: {
    nav: ['About', 'Projects', 'Skills', 'Experience', 'Blog', 'Contact'] as string[],
    langToggle: 'PT',
    heroTyping: [
      'Fullstack developer building intelligent systems.',
      'Turning research into products that scale.',
      'Backend, frontend, infra — from zero to production.',
    ],
    heroBtns: ['View Projects', 'Get in Touch'],
    scroll: 'scroll',
    terminalStatus: 'coding the future 🚀',

    aboutLabel: 'ABOUT',
    aboutTitle: 'Building systems that deliver value',
    aboutSub: 'Not just research — production systems that scale.',
    aboutP1: { bold: "I'm Vitor Cardoso", rest: ', a fullstack developer with experience building end-to-end systems.' },
    aboutP2: { bold: '', rest: 'My work spans backend, frontend, databases, security, and the full flow involved in creating a system.' },
    aboutP3: { bold: '', rest: "I believe the best system is not the most complex — it's the one that ", boldInline: 'delivers value', rest2: ' to users.' },
    stats: [
      { num: '30+', lbl: 'Projects Delivered' },
      { num: '2+', lbl: 'Years of Experience' },
      { num: '∞', lbl: 'Articles Read' },
    ],

    projectsLabel: 'PROJECTS',
    projectsTitle: "What I've built",
    projectsSub: 'Systems that deliver real value.',
    projectPlaceholder: '+ coming soon',
    projectDesc: 'An e-commerce tool that automates price analysis for equivalent products, offering updated price suggestions using AI.',
    aiLabDesc: 'A tool that takes a URL, extracts the visual structure of the page, and generates a professional, reusable Design System via AI.',
    aiFinancialDesc: 'Personal finance dashboard with generative AI for automatic expense categorization and on-demand generation of insights into spending patterns.',

    skillsLabel: 'SKILLS',
    skillsTitle: 'Technologies',
    skillsSub: 'The tools and technologies I use daily.',
    skillCats: ['Web Development', 'Infrastructure', 'ML / AI'],

    expLabel: 'EXPERIENCE',
    expTitle: "Where I've worked",
    expItems: [
      { date: '2025 — Present', company: 'CI&T', role: 'Backend Developer', desc: 'Part of the development of a system responsible for AI quality metrics analysis supporting 8,000+ users.' },
      { date: '2022 — 2024', company: 'Trybe', role: 'Web Development Instructor', desc: 'Responsible for the technical training of 2,000+ students across 14 classes in web development.' },
    ],

    blogLabel: 'BLOG',
    blogTitle: 'Publications & ideas',
    blogSub: 'Thoughts on systems development, artificial intelligence, and product building.',
    blogReadOn: 'Read on Medium',
    blogBadge: 'Python',
    blogPostTitle: "Practical Guide — Summary of Python's Main References",
    blogPostDesc: 'A complete practical guide with the main Python references and concepts for developers.',

    contactLabel: 'CONTACT',
    contactTitle: "Let's connect?",
    contactSub: 'Reach out via email or social media.',
    contactDesc: "I'm always open to new opportunities, collaborations, or simply exchanging ideas.",
    footerCopy: '© 2026 Vitor Cardoso.',
  },
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'pt',
  setLang: () => {},
  t: translations['pt'],
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt')
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
