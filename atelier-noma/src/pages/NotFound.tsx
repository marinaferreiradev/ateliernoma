import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Página não encontrada')

  return (
    <section className="shell flex min-h-[80svh] flex-col justify-end pt-[calc(var(--header-h)+4rem)] pb-[clamp(4rem,10vw,8rem)]">
      <p className="meta">Erro 404</p>
      <h1 className="display-lg mt-4 max-w-[14ch]">Este endereço não leva a nenhum espaço.</h1>
      <p className="mt-8 max-w-[44ch] text-[1.0625rem] leading-relaxed">
        A página pode ter mudado de lugar ou o link está incompleto. Você pode voltar ao início ou ver os projetos.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link to="/" className="btn-line">
          Voltar ao início
          <span className="btn-line__mark" aria-hidden="true" />
        </Link>
        <Link to="/projetos" className="btn-line">
          Ver projetos
          <span className="btn-line__mark" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
