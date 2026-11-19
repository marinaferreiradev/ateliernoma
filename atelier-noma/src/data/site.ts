export const site = {
  name: 'Atelier Noma',
  tagline: 'Arquitetura & Interiores',
  description:
    'Atelier Noma é um estúdio conceitual de arquitetura e interiores que explora a relação entre espaço, luz, matéria e experiência humana.',
  disclaimer: 'Projeto conceitual desenvolvido para fins de portfólio.',
  agency: 'Creator X',
}

export const navigation = [
  { label: 'Início', to: '/' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Estúdio', to: '/estudio' },
  { label: 'Contato', to: '/contato' },
] as const

export const projectTypes = [
  'Arquitetura residencial',
  'Interiores',
  'Arquitetura e interiores',
  'Reforma',
  'Outro',
] as const
