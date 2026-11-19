import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

/**
 * Composições editoriais dos projetos.
 *
 *  featured  Página inicial: três peças em grade assimétrica, com alturas e
 *            proporções diferentes.
 *  index     Página Projetos: uma peça por linha, alternando lado, escala e
 *            posição do texto para criar ritmo de leitura.
 */
export function ProjectGrid({ variant }: { variant: 'featured' | 'index' }) {
  return variant === 'featured' ? <Featured /> : <Index />
}

function Featured() {
  const [horizonte, aurora, patio] = projects
  if (!horizonte || !aurora || !patio) return null

  return (
    <div className="grid-editorial gap-y-20 md:gap-y-0">
      <ProjectCard
        project={horizonte}
        aspect="aspect-[4/5]"
        sizes="(min-width: 48rem) 40vw, 100vw"
        large
        className="col-span-4 md:col-span-5"
      />
      <ProjectCard
        project={aurora}
        aspect="aspect-[3/2]"
        sizes="(min-width: 48rem) 50vw, 90vw"
        large
        delay={0.1}
        className="col-span-4 ml-[12%] md:col-span-6 md:col-start-7 md:ml-0 md:mt-[min(22vw,20rem)]"
      />
      <ProjectCard
        project={patio}
        aspect="aspect-[4/3]"
        sizes="(min-width: 48rem) 50vw, 100vw"
        large
        className="col-span-4 md:col-span-6 md:col-start-3 md:mt-28"
      />
      <div className="col-span-4 flex items-end md:col-span-3 md:col-start-10 md:pb-24" data-reveal="text">
        <Link to="/projetos" className="text-link">
          Todos os projetos
          <span aria-hidden="true" className="block h-px w-6 bg-current" />
        </Link>
      </div>
    </div>
  )
}

function Index() {
  const [horizonte, aurora, patio] = projects
  if (!horizonte || !aurora || !patio) return null

  return (
    <div className="space-y-28 md:space-y-44">
      {/* Retrato à esquerda, texto ao pé da imagem, à direita */}
      <div className="grid-editorial items-end gap-y-8">
        <div className="col-span-4 md:col-span-6">
          <ProjectCard project={horizonte} aspect="aspect-[4/5]" sizes="(min-width: 48rem) 50vw, 100vw" large showConcept />
        </div>
        <p className="meta col-span-4 hidden md:col-span-3 md:col-start-9 md:block md:pb-40" data-reveal="text">
          Concreto aparente, pedra, cimento queimado e madeira.
        </p>
      </div>

      {/* Paisagem larga deslocada para a direita */}
      <div className="grid-editorial gap-y-8">
        <p className="meta col-span-4 hidden md:col-span-3 md:block md:pt-24" data-reveal="text">
          Concreto em fôrma de madeira, madeira natural, cal e palha.
        </p>
        <div className="col-span-4 md:col-span-8 md:col-start-5">
          <ProjectCard project={aurora} aspect="aspect-[3/2]" sizes="(min-width: 48rem) 66vw, 100vw" large showConcept />
        </div>
      </div>

      {/* Peça central, mais contida */}
      <div className="grid-editorial gap-y-8">
        <div className="col-span-4 md:col-span-7 md:col-start-3">
          <ProjectCard project={patio} aspect="aspect-[4/3]" sizes="(min-width: 48rem) 58vw, 100vw" large showConcept />
        </div>
        <p className="meta col-span-4 hidden md:col-span-2 md:col-start-11 md:block md:self-center" data-reveal="text">
          Alvenaria rebocada a cal, pedra, cascalho e concreto.
        </p>
      </div>
    </div>
  )
}
