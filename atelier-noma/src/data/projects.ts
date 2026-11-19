import type { ImageKey } from './images'

/**
 * Projetos conceituais do Atelier Noma.
 *
 * Todos são ESTUDOS CONCEITUAIS. Não há localização, cliente, área ou ano de
 * execução — e as fotografias são ilustrativas, de outros autores.
 */

export type GalleryRow =
  | { layout: 'full'; images: [ImageKey] }
  /** Retrato largo à esquerda + paisagem menor à direita, alinhados pela base. */
  | { layout: 'split'; images: [ImageKey, ImageKey] }
  /** Duas imagens de mesma proporção, a segunda deslocada verticalmente. */
  | { layout: 'duo'; images: [ImageKey, ImageKey] }
  /** Três retratos em sequência. */
  | { layout: 'trio'; images: [ImageKey, ImageKey, ImageKey] }
  /** Uma imagem isolada, recuada para um dos lados. */
  | { layout: 'single'; side: 'left' | 'right'; images: [ImageKey] }

export interface ProjectInfo {
  label: string
  value: string
}

export interface Project {
  slug: string
  name: string
  category: string
  concept: string
  /** Imagem usada nas listagens (cartões). */
  cover: ImageKey
  /** Imagem de abertura da página do projeto (horizontal). */
  hero: ImageKey
  lead: string
  body: string[]
  gallery: GalleryRow[]
  info: ProjectInfo[]
}

export const projects: Project[] = [
  {
    slug: 'casa-horizonte',
    name: 'Casa Horizonte',
    category: 'Arquitetura residencial',
    concept: 'Residência contemporânea com integração entre espaços internos e externos.',
    cover: 'horizonte-cover',
    hero: 'horizonte-garden-room',
    lead: 'Uma casa pensada como uma linha estendida sobre o terreno: baixa, aberta e atenta ao que está além dela.',
    body: [
      'O estudo parte de um gesto simples — um único pavimento que acompanha o terreno e se abre por inteiro para o jardim. A laje plana desenha uma linha contínua contra a paisagem e protege as fachadas do sol mais intenso.',
      'Entre dentro e fora, os limites são deliberadamente ambíguos. Os caixilhos de piso a teto correm por completo, as varandas profundas funcionam como salas sem paredes e o mesmo piso percorre os dois lados do vidro.',
      'O programa se organiza em sequência: áreas de convívio ao centro, recolhimento nas extremidades. Cada ambiente tem uma janela para o horizonte e outra para a vegetação próxima.',
    ],
    gallery: [
      { layout: 'split', images: ['horizonte-cover', 'horizonte-cantilever'] },
      { layout: 'full', images: ['horizonte-rail'] },
      { layout: 'duo', images: ['horizonte-field', 'horizonte-water'] },
      { layout: 'single', side: 'right', images: ['horizonte-window'] },
    ],
    info: [
      { label: 'Natureza', value: 'Estudo conceitual' },
      { label: 'Tipologia', value: 'Residência unifamiliar térrea' },
      { label: 'Programa', value: 'Estar e cozinha integrados, três suítes, varanda contínua' },
      { label: 'Materiais', value: 'Concreto aparente, pedra, cimento queimado, madeira' },
      { label: 'Estratégias', value: 'Beirais profundos, ventilação cruzada, caixilhos de correr de piso a teto' },
      { label: 'Fotografias', value: 'Ilustrativas, de autores independentes (Unsplash)' },
    ],
  },
  {
    slug: 'residencia-aurora',
    name: 'Residência Aurora',
    category: 'Arquitetura e interiores',
    concept: 'Um estudo sobre luz natural, materiais orgânicos e espacialidade.',
    cover: 'aurora-cover',
    hero: 'aurora-cover',
    lead: 'A luz tratada como material de projeto: medida, filtrada e conduzida ao longo do dia.',
    body: [
      'Aurora investiga como poucas aberturas, precisamente posicionadas, transformam um interior. Rasgos verticais, uma claraboia elíptica e janelas altas fazem a luz percorrer as superfícies conforme as horas passam.',
      'A paleta de materiais é deliberadamente curta. Concreto moldado em fôrma de madeira, madeira natural, palha e cal compõem superfícies que envelhecem bem e respondem à luz com textura, não com brilho.',
      'O mobiliário é baixo e esparso. Os ambientes se definem menos por paredes e mais por variações de altura, de sombra e da temperatura da luz.',
    ],
    gallery: [
      { layout: 'full', images: ['aurora-ceiling'] },
      { layout: 'duo', images: ['aurora-window', 'aurora-corner'] },
      { layout: 'single', side: 'left', images: ['aurora-bench'] },
      { layout: 'trio', images: ['aurora-oculus', 'aurora-slats', 'aurora-room'] },
    ],
    info: [
      { label: 'Natureza', value: 'Estudo conceitual' },
      { label: 'Tipologia', value: 'Residência unifamiliar com projeto de interiores' },
      { label: 'Programa', value: 'Estar, biblioteca, sala de refeições, dois quartos, ateliê' },
      { label: 'Materiais', value: 'Concreto em fôrma de madeira, madeira natural, cal, palha' },
      { label: 'Estratégias', value: 'Iluminação zenital, rasgos verticais, forros ripados' },
      { label: 'Fotografias', value: 'Ilustrativas, de autores independentes (Unsplash)' },
    ],
  },
  {
    slug: 'casa-patio',
    name: 'Casa Pátio',
    category: 'Arquitetura residencial',
    concept: 'Residência minimalista organizada ao redor de um pátio central.',
    cover: 'patio-cover',
    hero: 'patio-cover',
    lead: 'Uma casa que se volta para dentro para encontrar o céu.',
    body: [
      'A planta se organiza em torno de um vazio. Os ambientes ocupam as quatro faces de um pátio central, que concentra luz, ventilação e a presença de uma única árvore.',
      'Para a rua, a casa se apresenta com muros contínuos e poucas aberturas. A privacidade vem da forma; a abertura acontece no interior, onde todas as salas olham para o mesmo jardim.',
      'O pátio é tratado como mais um cômodo: piso de pedra e cascalho, um banco de alvenaria e um espelho d’água raso que devolve o céu para dentro da casa.',
    ],
    gallery: [
      { layout: 'full', images: ['patio-shadow'] },
      { layout: 'split', images: ['patio-stones', 'patio-water'] },
      { layout: 'duo', images: ['patio-sky', 'patio-steps'] },
      { layout: 'single', side: 'right', images: ['patio-wall'] },
    ],
    info: [
      { label: 'Natureza', value: 'Estudo conceitual' },
      { label: 'Tipologia', value: 'Residência unifamiliar voltada para o interior do lote' },
      { label: 'Programa', value: 'Pátio central, estar, cozinha, três quartos, galeria de circulação' },
      { label: 'Materiais', value: 'Alvenaria rebocada a cal, pedra, cascalho, concreto' },
      { label: 'Estratégias', value: 'Pátio como regulador térmico, ventilação cruzada, luz difusa' },
      { label: 'Fotografias', value: 'Ilustrativas, de autores independentes (Unsplash)' },
    ],
  },
]

export const getProject = (slug: string | undefined) => projects.find((p) => p.slug === slug)

export const getNextProject = (slug: string) => {
  const index = projects.findIndex((p) => p.slug === slug)
  return projects[(index + 1) % projects.length]!
}
