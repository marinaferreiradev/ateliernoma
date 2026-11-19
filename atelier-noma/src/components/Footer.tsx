import { Link } from 'react-router-dom'
import { navigation, site } from '../data/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer id="rodape" className="on-dark bg-graphite text-linen">
      <div className="shell pt-20 pb-10 md:pt-28">
        <div className="grid-editorial gap-y-14">
          <div className="col-span-4 md:col-span-6">
            <Link to="/" aria-label={`${site.name} — página inicial`} className="inline-block">
              <Logo large className="text-[clamp(1.6rem,3.4vw,2.6rem)]" />
            </Link>
            <p className="mt-5 text-[0.9375rem] text-linen/70">{site.tagline}</p>
          </div>

          <nav aria-label="Rodapé" className="col-span-2 md:col-span-3 md:col-start-8">
            <ul className="space-y-3 text-[0.9375rem]">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-linen/80 transition-colors duration-500 hover:text-linen">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 md:col-span-2 md:col-start-11">
            <ul className="space-y-3 text-[0.9375rem]">
              <li>
                <Link to="/creditos" className="text-linen/80 transition-colors duration-500 hover:text-linen">
                  Créditos das fotografias
                </Link>
              </li>
              <li>
                <a
                  href="#conteudo"
                  className="text-linen/80 transition-colors duration-500 hover:text-linen"
                  onClick={(event) => {
                    event.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    document.getElementById('conteudo')?.focus({ preventScroll: true })
                  }}
                >
                  Voltar ao topo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="cota mt-20 text-linen md:mt-28" aria-hidden="true" />

        <div className="mt-6 flex flex-col gap-2 text-[0.8125rem] text-linen/65 md:flex-row md:justify-between">
          <p>{site.disclaimer}</p>
          <p>
            Estúdio fictício. Conceito e desenvolvimento: {site.agency}.
          </p>
        </div>
      </div>
    </footer>
  )
}
