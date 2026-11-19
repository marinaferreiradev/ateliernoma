import { Link, useParams } from 'react-router-dom'
import { ImageGallery } from '../components/ImageGallery'
import { Photo } from '../components/Photo'
import { SectionReveal } from '../components/SectionReveal'
import { getNextProject, getProject } from '../data/projects'
import { usePageMeta } from '../hooks/usePageMeta'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  usePageMeta(project ? project.name : 'Projeto não encontrado', project ? `${project.name}: ${project.concept} Estudo conceitual do Atelier Noma.` : undefined)

  if (!project) return <NotFound />

  const next = getNextProject(project.slug)

  return (
    // key força a remontagem (e novas animações) ao navegar entre projetos
    <article key={project.slug}>
      <SectionReveal as="header" className="shell pt-[calc(var(--header-h)+clamp(3.5rem,10vw,8rem))] pb-12 md:pb-16">
        <nav aria-label="Trilha de navegação" className="meta mb-10 md:mb-14" data-reveal="fade">
          <ol className="flex flex-wrap gap-x-2">
            <li>
              <Link to="/projetos" className="underline-offset-4 hover:underline">
                Projetos
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{project.name}</li>
          </ol>
        </nav>

        <div className="grid-editorial items-end gap-y-8">
          <h1 className="display-xl col-span-4 md:col-span-8" data-reveal="text">
            {project.name}
          </h1>
          <dl className="col-span-4 grid grid-cols-2 gap-x-6 gap-y-4 md:col-span-4 md:col-start-9 md:pb-3" data-reveal="text" data-delay="0.1">
            <div>
              <dt className="meta">Categoria</dt>
              <dd className="mt-1 text-[0.9375rem]">{project.category}</dd>
            </div>
            <div>
              <dt className="meta">Natureza</dt>
              <dd className="mt-1 text-[0.9375rem]">Estudo conceitual</dd>
            </div>
          </dl>
        </div>
      </SectionReveal>

      {/* Imagem principal, de borda a borda */}
      <SectionReveal as="figure" className="m-0">
        <Photo
          image={project.hero}
          sizes="100vw"
          priority
          reveal
          className="aspect-[4/5] w-full sm:aspect-[3/2] lg:aspect-[21/10]"
        />
        <figcaption className="shell meta mt-3">Fotografia ilustrativa — não retrata uma obra do Atelier Noma.</figcaption>
      </SectionReveal>

      {/* Texto conceitual */}
      <SectionReveal aria-label="Conceito" className="shell py-[clamp(5rem,11vw,10rem)]">
        <div className="grid-editorial gap-y-10">
          <p className="display-sm col-span-4 md:col-span-5" data-reveal="text">
            {project.lead}
          </p>
          <div className="col-span-4 space-y-6 text-[1.0625rem] leading-[1.8] md:col-span-5 md:col-start-8">
            {project.body.map((paragraph, i) => (
              <p key={i} data-reveal="text" data-delay={i * 0.08}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </SectionReveal>

      <ImageGallery rows={project.gallery} label={`Galeria — ${project.name}`} />

      {/* Informações gerais */}
      <SectionReveal aria-labelledby="info-titulo" className="shell py-[clamp(6rem,12vw,11rem)]">
        <div className="grid-editorial gap-y-10">
          <h2 id="info-titulo" className="display-sm col-span-4 md:col-span-3" data-reveal="text">
            Informações gerais
          </h2>
          <dl className="col-span-4 border-t hairline md:col-span-8 md:col-start-5">
            {project.info.map((item, i) => (
              <div key={item.label} className="grid grid-cols-[7.5rem_1fr] gap-6 border-b hairline py-5 md:grid-cols-[11rem_1fr]" data-reveal="text" data-delay={i * 0.05}>
                <dt className="meta pt-0.5">{item.label}</dt>
                <dd className="text-[0.9375rem] leading-relaxed">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionReveal>

      {/* Próximo projeto */}
      <SectionReveal as="nav" aria-label="Próximo projeto" className="border-t hairline">
        <Link to={`/projetos/${next.slug}`} className="group block">
          <div className="shell flex items-end justify-between gap-6 pt-14 pb-10 md:pt-20">
            <div data-reveal="text">
              <span className="meta block">Próximo projeto</span>
              <span className="display-lg mt-3 block">{next.name}</span>
            </div>
            <span aria-hidden="true" className="mb-4 hidden h-px w-16 bg-current transition-[width] duration-700 ease-[var(--ease-slow)] group-hover:w-28 md:block" />
          </div>
          <Photo
            image={next.hero}
            sizes="100vw"
            alt=""
            className="aspect-[16/9] md:aspect-[24/7]"
            imgClassName="transition-transform duration-[1800ms] ease-[var(--ease-slow)] group-hover:scale-[1.03]"
          />
        </Link>
      </SectionReveal>
    </article>
  )
}
