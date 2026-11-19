/**
 * Acervo fotográfico do site.
 *
 * Todas as fotografias são reais, publicadas no Unsplash sob a Unsplash License
 * (uso gratuito, inclusive comercial, sem obrigação de atribuição — mantemos os
 * créditos em /creditos por cortesia). Foram selecionadas e conferidas uma a uma.
 *
 * As imagens são ILUSTRATIVAS: não retratam obras do Atelier Noma, que é um
 * estúdio fictício.
 *
 * Origem dos arquivos
 * -------------------
 * Por padrão as fotos são servidas pelo CDN do Unsplash (imgix), que entrega
 * AVIF/WebP no tamanho certo para cada tela. Para servi-las a partir de
 * `public/images`, rode `npm run images:local` e defina VITE_IMAGE_SOURCE=local
 * (veja o README).
 */

export type ImageKey =
  | 'hero'
  | 'philosophy'
  | 'materials'
  | 'horizonte-cover'
  | 'horizonte-field'
  | 'horizonte-garden-room'
  | 'horizonte-rail'
  | 'horizonte-window'
  | 'horizonte-cantilever'
  | 'horizonte-water'
  | 'aurora-cover'
  | 'aurora-window'
  | 'aurora-corner'
  | 'aurora-ceiling'
  | 'aurora-bench'
  | 'aurora-oculus'
  | 'aurora-slats'
  | 'aurora-room'
  | 'patio-cover'
  | 'patio-stones'
  | 'patio-shadow'
  | 'patio-sky'
  | 'patio-water'
  | 'patio-steps'
  | 'patio-wall'
  | 'studio-hero'
  | 'studio-stair'
  | 'studio-vault'
  | 'studio-angles'
  | 'studio-samples'
  | 'studio-plant'
  | 'contact'

export interface SiteImage {
  key: ImageKey
  /** Identificador do arquivo no CDN do Unsplash (images.unsplash.com/<id>). */
  id: string
  /** Página da fotografia no Unsplash (créditos e licença). */
  source: string
  alt: string
  /** Proporção original aproximada (largura / altura). */
  ratio: number
  /** Ponto focal para object-position. */
  focus?: string
}

const u = (slug: string) => `https://unsplash.com/photos/${slug}`

export const images: Record<ImageKey, SiteImage> = {
  hero: {
    key: 'hero',
    id: 'photo-1779027452120-d4303d77fbb4',
    source: u('ZXi_RdPSF3A'),
    alt: 'Grande vão em concreto aparente emoldurando uma árvore em um pátio iluminado.',
    ratio: 1.504,
    focus: '55% 50%',
  },
  philosophy: {
    key: 'philosophy',
    id: 'photo-1760545481806-c1db2693e347',
    source: u('PP47VdjjidA'),
    alt: 'Retângulo de luz natural projetado sobre uma parede clara.',
    ratio: 0.749,
    focus: '50% 40%',
  },
  materials: {
    key: 'materials',
    id: 'photo-1752321531522-20d9c4dc2e0b',
    source: u('2ZjSja_2EX4'),
    alt: 'Amostras de madeira, cortiça e pedra dispostas sobre uma mesa de trabalho.',
    ratio: 1.504,
  },

  /* Casa Horizonte ------------------------------------------------------- */
  'horizonte-cover': {
    key: 'horizonte-cover',
    id: 'photo-1787088988806-7ec503692b85',
    source: u('sh2gc8APbEk'),
    alt: 'Casa térrea de planta aberta com muro de pedra, voltada para um gramado.',
    ratio: 0.8,
    focus: '50% 55%',
  },
  'horizonte-field': {
    key: 'horizonte-field',
    id: 'photo-1782890811564-9332ec0eb8be',
    source: u('J2Y59Q042eg'),
    alt: 'Volume baixo de concreto pousado em um campo verde, com árvores ao fundo.',
    ratio: 0.833,
    focus: '50% 45%',
  },
  'horizonte-garden-room': {
    key: 'horizonte-garden-room',
    id: 'photo-1771756072878-c085b38e05fa',
    source: u('zg7B433_29s'),
    alt: 'Ambiente vazio com grandes caixilhos abertos para uma vegetação densa.',
    ratio: 1.504,
  },
  'horizonte-rail': {
    key: 'horizonte-rail',
    id: 'photo-1786253575750-75585e5b0f49',
    source: u('2Ke1WG3FLeA'),
    alt: 'Guarda-corpo metálico escuro diante de uma janela para o jardim, com sombras no piso.',
    ratio: 1.504,
  },
  'horizonte-window': {
    key: 'horizonte-window',
    id: 'photo-1786728156884-dab36e660f26',
    source: u('btf97w_JaJg'),
    alt: 'Janela em fita de madeira com vista para árvores, em sala de piso de cimento.',
    ratio: 0.749,
  },
  'horizonte-cantilever': {
    key: 'horizonte-cantilever',
    id: 'photo-1676144844767-b25cb5e6c896',
    source: u('ejGv_enkOBY'),
    alt: 'Detalhe de laje e pilar de concreto em balanço contra o céu claro.',
    ratio: 1.504,
  },
  'horizonte-water': {
    key: 'horizonte-water',
    id: 'photo-1775476794218-39effb7db2d1',
    source: u('-Mue8-Bp0Cw'),
    alt: 'Espelho d’água estreito ao longo de uma fachada de concreto sob um beiral.',
    ratio: 0.667,
  },

  /* Residência Aurora ---------------------------------------------------- */
  'aurora-cover': {
    key: 'aurora-cover',
    id: 'photo-1783014619871-75f897c5ffb1',
    source: u('mFNrRXASu2w'),
    alt: 'Feixe de luz atravessando uma parede de concreto sobre um deque de madeira.',
    ratio: 1.504,
    focus: '60% 50%',
  },
  'aurora-window': {
    key: 'aurora-window',
    id: 'photo-1787499684271-5197624d22fc',
    source: u('eoARiY1oZ1E'),
    alt: 'Sombras de caixilho projetadas sobre uma parede de concreto junto à janela.',
    ratio: 0.662,
  },
  'aurora-corner': {
    key: 'aurora-corner',
    id: 'photo-1770844063644-4d8b91b980ce',
    source: u('NHpYq94XKWQ'),
    alt: 'Canto de paredes texturizadas iluminado por uma janela alta de madeira.',
    ratio: 0.667,
  },
  'aurora-ceiling': {
    key: 'aurora-ceiling',
    id: 'photo-1784461619951-932b3731d2b8',
    source: u('JJ5j-0FvgFI'),
    alt: 'Forro curvo de madeira atravessado por uma linha contínua de ventilação.',
    ratio: 1.504,
  },
  'aurora-bench': {
    key: 'aurora-bench',
    id: 'photo-1512972972907-6d71529c5e92',
    source: u('SoNaNOFT974'),
    alt: 'Mesa baixa de madeira e assentos de palha diante de uma janela circular.',
    ratio: 1.504,
  },
  'aurora-oculus': {
    key: 'aurora-oculus',
    id: 'photo-1770885492430-848df9bc5378',
    source: u('OZH9hdK1h9M'),
    alt: 'Abertura elíptica no teto deixando entrar uma luz suave sobre o concreto.',
    ratio: 0.8,
  },
  'aurora-slats': {
    key: 'aurora-slats',
    id: 'photo-1773196233899-31d43b88bb15',
    source: u('aLSKhM8zEHI'),
    alt: 'Parede revestida de ripas de madeira, com um assento estofado em primeiro plano.',
    ratio: 0.667,
    focus: '50% 40%',
  },
  'aurora-room': {
    key: 'aurora-room',
    id: 'photo-1775486134015-cedad4808fea',
    source: u('ASlkHUMKrMw'),
    alt: 'Ambiente minimalista branco com uma grande abertura e luz rasante no piso.',
    ratio: 0.752,
  },

  /* Casa Pátio ----------------------------------------------------------- */
  'patio-cover': {
    key: 'patio-cover',
    id: 'photo-1792553532354-fe35685ae490',
    source: u('TuPLW1OfDSg'),
    alt: 'Pátio de cascalho com uma árvore ao centro, cercado por paredes claras e um banco.',
    ratio: 1.333,
  },
  'patio-stones': {
    key: 'patio-stones',
    id: 'photo-1776657215949-1b7fce8cd351',
    source: u('RWowdVdKSL8'),
    alt: 'Pátio minimalista entre paredes altas, com pisantes de pedra sobre grama seca.',
    ratio: 0.667,
  },
  'patio-shadow': {
    key: 'patio-shadow',
    id: 'photo-1777036400030-8561f3d3cff6',
    source: u('iqoD_T_wm30'),
    alt: 'Sombra de uma árvore desenhada sobre a parede e o piso de um pátio.',
    ratio: 1.504,
  },
  'patio-sky': {
    key: 'patio-sky',
    id: 'photo-1788927771212-d247a3c5f846',
    source: u('re-0AJk6Ass'),
    alt: 'Abertura quadrada em uma laje de concreto revelando o céu.',
    ratio: 0.667,
  },
  'patio-water': {
    key: 'patio-water',
    id: 'photo-1760624493013-8a7436f343a5',
    source: u('UljOIaCEUMA'),
    alt: 'Espelho d’água refletindo uma árvore em um pátio de volumes brancos.',
    ratio: 1.504,
  },
  'patio-steps': {
    key: 'patio-steps',
    id: 'photo-1766603636774-5f328e0da870',
    source: u('qLJMuJkD4as'),
    alt: 'Pisantes de concreto sobre gramado conduzindo a um muro de pedra.',
    ratio: 0.8,
  },
  'patio-wall': {
    key: 'patio-wall',
    id: 'photo-1661112157208-e8cc14b415dd',
    source: u('LA1FZ9Jc1Wg'),
    alt: 'Muro baixo de concreto delimitando um terreiro aberto sob o céu.',
    ratio: 1.504,
  },

  /* Estúdio -------------------------------------------------------------- */
  'studio-hero': {
    key: 'studio-hero',
    id: 'photo-1759378060310-f362e017aae3',
    source: u('fWLXPRf_ahk'),
    alt: 'Sala de concreto aparente banhada por luz zenital.',
    ratio: 0.562,
  },
  'studio-stair': {
    key: 'studio-stair',
    id: 'photo-1761034278084-e6f76d1cf9dc',
    source: u('OoiQnoTKkNU'),
    alt: 'Escada de concreto iluminada por uma janela lateral.',
    ratio: 0.667,
  },
  'studio-vault': {
    key: 'studio-vault',
    id: 'photo-1779641774851-9bd6c763e4e1',
    source: u('1_XOhALA1UE'),
    alt: 'Cômodo austero de concreto com luz entrando por uma janela baixa.',
    ratio: 0.787,
  },
  'studio-angles': {
    key: 'studio-angles',
    id: 'photo-1759300632008-a752203c16cf',
    source: u('4Fn8yNePTwk'),
    alt: 'Paredes angulares de concreto com luz atravessando uma fresta.',
    ratio: 0.667,
  },
  'studio-samples': {
    key: 'studio-samples',
    id: 'photo-1763076470404-23554ef26747',
    source: u('658TyhDubS4'),
    alt: 'Amostras de mármore, metal e laminados sobre uma superfície branca.',
    ratio: 0.707,
  },
  'studio-plant': {
    key: 'studio-plant',
    id: 'photo-1785102742384-123dd05c1465',
    source: u('ehjcZ2Xl9hE'),
    alt: 'Planta em vaso iluminada pelo sol em um ambiente de concreto.',
    ratio: 0.667,
  },
  contact: {
    key: 'contact',
    id: 'photo-1760624492491-efadf588cf92',
    source: u('rnD9hs_9G_c'),
    alt: 'Árvore refletida em um espelho d’água entre volumes brancos.',
    ratio: 1.111,
  },
}

export const imageList = Object.values(images)
