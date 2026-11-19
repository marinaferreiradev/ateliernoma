import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { Photo } from './Photo'

interface ProjectCardProps {
  project: Project
  /** Classe de proporção da imagem, ex.: aspect-[4/5]. */
  aspect: string
  sizes: string
  /** Mostra o conceito do projeto abaixo do nome. */
  showConcept?: boolean
  /** Título em corpo maior (projetos em destaque). */
  large?: boolean
  className?: string
  delay?: number
}

/**
 * Projeto como peça editorial: fotografia, nome e categoria — sem caixa,
 * sombra ou cantos arredondados. Toda a área é um único link.
 */
export function ProjectCard({ project, aspect, sizes, showConcept = false, large = false, className = '', delay }: ProjectCardProps) {
  return (
    <article className={`group ${className}`}>
      <Link to={`/projetos/${project.slug}`} className="block focus-visible:outline-offset-8">
        <Photo
          image={project.cover}
          sizes={sizes}
          reveal
          delay={delay}
          className={aspect}
          alt=""
          imgClassName="transition-transform duration-[1600ms] ease-[var(--ease-slow)] will-change-transform group-hover:scale-[1.035] group-focus-visible:scale-[1.035]"
        />

        <div className="mt-5 flex items-start justify-between gap-6" data-reveal="text" data-delay={(delay ?? 0) + 0.15}>
          <div>
            <h3 className={`font-serif font-light leading-[1.05] ${large ? 'text-[clamp(1.7rem,2.6vw,2.4rem)] tracking-[-0.02em]' : 'text-[clamp(1.55rem,2.1vw,1.95rem)] tracking-[-0.02em]'}`}>
              {project.name}
            </h3>
            <p className="meta mt-2">{project.category}</p>
            {showConcept && <p className="mt-4 max-w-[34ch] text-[0.9375rem] leading-relaxed">{project.concept}</p>}
          </div>

          <span className="mt-3 hidden shrink-0 items-center gap-3 text-[0.8125rem] sm:inline-flex" aria-hidden="true">
            <span className="opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100">
              Ver projeto
            </span>
            <span className="block h-px w-8 bg-current transition-[width] duration-700 ease-[var(--ease-slow)] group-hover:w-14 group-focus-visible:w-14" />
          </span>
        </div>
      </Link>
    </article>
  )
}
