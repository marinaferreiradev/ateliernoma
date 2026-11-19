# Atelier Noma — website conceitual

Website de um estúdio **fictício** de arquitetura e interiores, desenvolvido pela Creator X como case de portfólio.
Todos os projetos são estudos conceituais e as fotografias são ilustrativas (Unsplash), sem relação com obras reais do estúdio.

**Stack:** React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · GSAP 3 + ScrollTrigger · React Router 7

O Lucide React não foi incluído: a interface não precisa de ícones (setas e marcadores são linhas desenhadas em CSS). Se precisar, `npm i lucide-react`.

---

## Executar localmente

Requisitos: Node.js 20.19+ (ou 22+).

```bash
npm install
npm run dev        # http://localhost:5173
```

Outros comandos:

```bash
npm run typecheck  # verificação de tipos
npm run build      # typecheck + build de produção em dist/
npm run preview    # serve o build de produção
```

## Publicar na Vercel

**Pelo painel**

1. Suba a pasta para um repositório no GitHub.
2. Na Vercel, clique em *Add New → Project* e importe o repositório.
3. A Vercel reconhece o Vite. O `vercel.json` já define o build (`npm run build`), a saída (`dist`), as reescritas de rota da SPA e o cache dos arquivos.
4. Clique em *Deploy*.

**Pela linha de comando**

```bash
npm i -g vercel
vercel          # pré-visualização
vercel --prod   # produção
```

As rotas limpas (`/projetos/casa-horizonte`, `/estudio`…) funcionam em acesso direto e ao recarregar a página, graças à reescrita para `index.html` configurada no `vercel.json`.

## Indexação (desativada por padrão)

Por ser um projeto demonstrativo, o site sai **sem indexação**: meta `robots` com `noindex, nofollow` e `robots.txt` com `Disallow: /`.

Para liberar, defina `VITE_ALLOW_INDEXING=true` (na Vercel: *Settings → Environment Variables*) e publique de novo. O plugin `indexingControl` no `vite.config.ts` ajusta as duas coisas juntas.

## Fotografias

O acervo fica em `src/data/images.ts`: 32 fotografias reais do Unsplash, escolhidas e conferidas uma a uma (proporção, enquadramento e coerência entre si), com texto alternativo em português e link para a página original. A página `/creditos` lista todas.

Por padrão, as imagens são servidas pelo **CDN do Unsplash**, que entrega AVIF/WebP no tamanho de cada tela (`srcset` com 640, 1080, 1600 e 2400 px). É o modo recomendado pelo próprio Unsplash e o mais leve para o visitante.

Para hospedar as fotos junto com o site, em `public/images`:

```bash
npm run images:local          # baixa as 32 fotos nos 4 tamanhos (128 arquivos)
```

Depois, defina `VITE_IMAGE_SOURCE=local` (em `.env.local` e/ou na Vercel) e faça o build. Para trocar uma foto, edite `src/data/images.ts` e rode o script de novo.

A imagem de Open Graph (`index.html`) aponta para a foto de abertura no CDN. Se quiser usar um arquivo próprio, coloque `public/og-image.jpg` (1200×630) e atualize a URL absoluta da tag `og:image` com o domínio final.

## Estrutura

```
src/
  components/   Header, MobileMenu, Footer, Logo, Photo, ProjectCard, ProjectGrid,
                ImageGallery, SectionReveal, ContactForm, Layout
  pages/        Home, Projects, ProjectDetail, Studio, Contact, Credits, NotFound
  data/         projects.ts (projetos e galerias), images.ts (acervo), site.ts (navegação)
  hooks/        usePageMeta (título e description por página)
  lib/          motion.ts (GSAP), image.ts (URLs e srcset)
  styles/       index.css (tokens de cor e tipografia, grade editorial, componentes base)
public/         favicon.svg, apple-touch-icon.png, images/
scripts/        download-images.mjs
```

### Adicionar um projeto

Inclua as fotos em `src/data/images.ts` e um novo objeto em `src/data/projects.ts`. A rota, a listagem, o índice e a navegação "Próximo projeto" são gerados a partir desses dados. A galeria aceita as composições `full`, `split`, `duo`, `trio` e `single`.

## Decisões de design

- **Paleta:** linho `#F5F1EA`, areia `#EAE4DA`, bege `#D8CCBC`, taupe `#8C8174`, grafite `#22221F` e branco. Para textos pequenos sobre o linho usamos um taupe mais escuro (`#6F665B`), que mantém contraste AA.
- **Tipografia:** *Newsreader* (serifada editorial com eixo óptico) nos títulos e *Manrope* nos textos e na navegação, ambas hospedadas junto com o site via Fontsource. A Cormorant Garamond foi testada, mas o acento circunflexo dela (ê, â, ô), muito frequente em português, fica desproporcional nos tamanhos grandes.
- **Elemento gráfico:** a *cota* — linha fina com terminais, emprestada do desenho técnico — aparece como divisor em todo o site. O "O" do logotipo é a planta de um pátio, o mesmo símbolo do favicon.
- **Movimento:** uma abertura orquestrada no hero, a frase do manifesto revelada palavra a palavra durante a rolagem, fotografias reveladas por máscara e parallax muito sutil. Com `prefers-reduced-motion`, tudo aparece sem animação.

## Acessibilidade

HTML semântico com hierarquia de títulos, link "Pular para o conteúdo", foco visível, menu mobile com `aria-expanded`, fechamento por Esc e conteúdo de fundo inerte, foco movido para o conteúdo a cada troca de página, formulário com rótulos, mensagens de erro associadas (`aria-describedby`) e região `aria-live`.

## Formulário de contato

O formulário valida os campos no navegador, mas **não envia dados**: o estúdio não existe. Ao confirmar, a página mostra um estado informativo. Para um uso real, ligue o `onSubmit` de `src/components/ContactForm.tsx` a um serviço de formulários ou a uma função serverless.
