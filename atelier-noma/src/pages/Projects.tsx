import { Link } from 'react-router-dom'
import { ProjectGrid } from '../components/ProjectGrid'
import { SectionReveal } from '../components/SectionReveal'
import { projects } from '../data/projects'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Projects() {
  usePageMeta('Projetos', 'Projetos selecionados do Atelier Noma: explorações de forma, matéria e espaço. Estudos conceituais com fotografias ilustrativas.')

  return (
    <>
      <SectionReveal as="header" className="shell pt-[calc(var(--header-h)+clamp(4rem,12vw,10rem))] pb-16 md:pb-24">
        <div className="grid-editorial items-end gap-y-10">
          <div className="col-span-4 md:col-span-8">
            <h1 className="display-xl" data-reveal="text">
              Projetos
              <br />
              <span className="pl-[0.9em]">selecionados</span>
            </h1>
            <p className="lead mt-8 text-taupe-deep" data-reveal="text" data-delay="0.1">
              Explorações de forma, matéria e espaço.
            </p>
          </div>

          {/* Índice: atalho editorial para cada projeto */}
          <nav aria-label="Índice de projetos" className="col-span-4 md:col-span-4 md:col-start-9" data-reveal="text" data-delay="0.2">
            <ul className="border-t hairline">
              {projects.map((project) => (
                <li key={project.slug} className="border-b hairline">
                  <Link
                    to={`/projetos/${project.slug}`}
                    className="group flex items-baseline justify-between gap-4 py-4 transition-[padding] duration-700 ease-[var(--ease-slow)] hover:pl-2"
                  >
                    <span className="font-serif text-[1.25rem] leading-tight tracking-[-0.01em]">{project.name}</span>
                    <span className="meta text-right">{project.category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SectionReveal>

      <SectionReveal aria-label="Projetos" className="shell pb-[var(--section)]">
        <ProjectGrid variant="index" />

        <p className="meta mt-28 max-w-[60ch] border-t hairline pt-6 md:mt-40" data-reveal="text">
          Todos os projetos apresentados são estudos conceituais. As fotografias são ilustrativas, de autores
          independentes, e não retratam obras do Atelier Noma.{' '}
          <Link to="/creditos" className="underline decoration-1 underline-offset-4">
            Ver créditos
          </Link>
          .
        </p>
      </SectionReveal>
    </>
  )
}
