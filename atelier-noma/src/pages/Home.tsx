import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Photo } from '../components/Photo'
import { ProjectGrid } from '../components/ProjectGrid'
import { SectionReveal } from '../components/SectionReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { gsap, prefersReducedMotion } from '../lib/motion'

export default function Home() {
  usePageMeta(null)

  return (
    <>
      <Hero />
      <Philosophy />
      <Featured />
      <Manifesto />
      <Studio />
      <ContactCall />
    </>
  )
}

/* -------------------------------------------------------------------------- */
/*  Abertura                                                                  */
/* -------------------------------------------------------------------------- */

function Hero() {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const root = ref.current
    if (!root || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'expo.out' } })
      intro
        .fromTo('[data-hero-image]', { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 2.4, ease: 'power2.out' })
        .fromTo('[data-hero-line]', { yPercent: 110 }, { yPercent: 0, duration: 1.6, stagger: 0.12 }, 0.35)
        .fromTo('[data-hero-fade]', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 1.4, stagger: 0.1 }, 1.0)

      // Ao rolar: a imagem desce devagar e o texto se dissolve.
      gsap.to('[data-hero-image]', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('[data-hero-content]', {
        opacity: 0,
        y: -48,
        ease: 'none',
        scrollTrigger: { trigger: root, start: '20% top', end: '75% top', scrub: true },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      aria-labelledby="hero-titulo"
      className="on-dark relative isolate flex h-[100svh] min-h-[36rem] items-end overflow-hidden bg-graphite text-linen"
    >
      <div data-hero-image className="absolute inset-0 -z-10 will-change-transform">
        <Photo image="hero" sizes="100vw" priority className="h-full w-full !bg-graphite" />
        {/* Véu para garantir contraste do texto sobre a fotografia */}
        <div className="absolute inset-0 bg-graphite/30" aria-hidden="true" />
        <div
          className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgba(34,34,31,0.72),rgba(34,34,31,0))]"
          aria-hidden="true"
        />
      </div>

      <div data-hero-content className="shell w-full pb-[clamp(2.5rem,7vh,5rem)]">
        <div className="grid-editorial items-end gap-y-8">
          <h1 id="hero-titulo" className="display-xl col-span-4 md:col-span-9">
            {['Espaços que', 'revelam o', 'essencial.'].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <span data-hero-line className={`block ${i === 1 ? 'pl-[0.9em]' : ''}`}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <div className="col-span-4 md:col-span-3 md:pb-3">
            <p data-hero-fade className="max-w-[30ch] text-[0.9375rem] leading-relaxed text-linen/90">
              Arquitetura e interiores concebidos a partir da luz, da matéria e das formas de habitar.
            </p>
          </div>
        </div>

        <div data-hero-fade className="mt-10 flex items-center justify-between border-t hairline-light pt-5 text-[0.8125rem] text-linen/75">
          <span className="hidden sm:inline">Estúdio conceitual de arquitetura e interiores</span>
          <a href="#filosofia" className="group ml-auto inline-flex items-center gap-3 py-2 text-linen/90 hover:text-linen">
            Role para explorar
            <span aria-hidden="true" className="relative block h-8 w-px overflow-hidden bg-linen/25">
              <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_2.4s_var(--ease-quiet)_infinite] bg-linen" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Filosofia                                                                 */
/* -------------------------------------------------------------------------- */

function Philosophy() {
  return (
    <SectionReveal id="filosofia" aria-labelledby="filosofia-titulo" className="shell py-[var(--section)]">
      <div className="grid-editorial gap-y-14">
        <div className="col-span-4 md:col-span-7 md:pt-16">
          <h2 id="filosofia-titulo" className="display-lg" data-reveal="text">
            A beleza está
            <br />
            no que permanece.
          </h2>

          <p
            className="mt-10 max-w-[44ch] text-[1.0625rem] leading-[1.8] md:mt-14 md:ml-[16.66%]"
            data-reveal="text"
            data-delay="0.1"
          >
            Acreditamos em uma arquitetura que encontra equilíbrio entre forma, função e sensibilidade. Cada espaço
            nasce de uma leitura cuidadosa do contexto, dos materiais e das possibilidades de viver.
          </p>

          {/* Cota: três medidas de um mesmo projeto */}
          <div className="mt-14 md:mt-20 md:ml-[16.66%] md:w-[70%]">
            <div className="cota text-graphite" data-reveal="line" aria-hidden="true" />
            <ul className="meta mt-3 grid grid-cols-3" aria-label="Princípios">
              <li>Forma</li>
              <li className="text-center">Função</li>
              <li className="text-right">Sensibilidade</li>
            </ul>
          </div>
        </div>

        <Photo
          image="philosophy"
          sizes="(min-width: 48rem) 33vw, 100vw"
          reveal
          parallax
          className="col-span-3 col-start-2 aspect-[3/4] md:col-span-4 md:col-start-9"
        />
      </div>
    </SectionReveal>
  )
}

/* -------------------------------------------------------------------------- */
/*  Projetos em destaque                                                      */
/* -------------------------------------------------------------------------- */

function Featured() {
  return (
    <SectionReveal aria-labelledby="destaques-titulo" className="shell pb-[var(--section)]">
      <div className="cota mb-12 text-graphite md:mb-16" data-reveal="line" aria-hidden="true" />
      <div className="grid-editorial mb-16 gap-y-6 md:mb-28">
        <h2 id="destaques-titulo" className="display-lg col-span-4 md:col-span-7" data-reveal="text">
          Arquitetura
          <br />
          em perspectiva.
        </h2>
        <p className="col-span-4 max-w-[34ch] self-end text-[0.9375rem] leading-relaxed md:col-span-3 md:col-start-10" data-reveal="text" data-delay="0.1">
          Três estudos conceituais sobre o habitar contemporâneo: a casa aberta à paisagem, a casa guiada pela luz e a
          casa voltada para o próprio pátio.
        </p>
      </div>

      <ProjectGrid variant="featured" />
    </SectionReveal>
  )
}

/* -------------------------------------------------------------------------- */
/*  Manifesto                                                                 */
/* -------------------------------------------------------------------------- */

const MANIFESTO = [['Projetar', 'é', 'encontrar'], ['significado'], ['no', 'espaço.']]

function Manifesto() {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const root = ref.current
    if (!root || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-word]',
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.4,
          scrollTrigger: { trigger: '[data-manifesto]', start: 'top 78%', end: 'bottom 45%', scrub: 0.8 },
        },
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} aria-label="Manifesto" className="on-dark bg-graphite py-[calc(var(--section)*1.15)] text-linen">
      <div className="shell">
        <p data-manifesto className="font-serif text-[clamp(2.6rem,9vw,9.5rem)] font-light leading-[0.98] tracking-[-0.04em]">
          {MANIFESTO.map((line, i) => (
            <span
              key={i}
              className={`block ${i === 1 ? 'pl-[12%] md:pl-[22%]' : ''} ${i === 2 ? 'text-right md:pr-[8%]' : ''}`}
            >
              {line.map((word, j) => (
                <span key={word} data-word className="inline-block">
                  {word}
                  {j < line.length - 1 ? ' ' : ''}
                </span>
              ))}
            </span>
          ))}
        </p>

        <div className="mt-16 grid-editorial md:mt-24">
          <div className="col-span-4 md:col-span-4 md:col-start-9">
            <div className="cota text-linen" aria-hidden="true" />
            <p className="mt-4 text-[0.875rem] leading-relaxed text-linen/70">
              Antes da forma, o lugar: a orientação do sol, o percurso do vento, a escala de quem habita.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Estúdio                                                                   */
/* -------------------------------------------------------------------------- */

function Studio() {
  return (
    <SectionReveal aria-labelledby="estudio-titulo" className="shell py-[var(--section)]">
      <div className="grid-editorial items-center gap-y-12">
        <Photo
          image="materials"
          sizes="(min-width: 48rem) 58vw, 100vw"
          reveal
          parallax
          className="col-span-4 aspect-[4/3] md:col-span-7"
        />

        <div className="col-span-4 md:col-span-4 md:col-start-9">
          <h2 id="estudio-titulo" className="display-md" data-reveal="text">
            Uma abordagem sensível à arquitetura.
          </h2>
          <p className="mt-8 max-w-[40ch] text-[1rem] leading-[1.8]" data-reveal="text" data-delay="0.1">
            O Atelier Noma é um conceito de estúdio dedicado à exploração de espaços contemporâneos, à materialidade e à
            relação entre arquitetura e cotidiano.
          </p>
          <div className="mt-10" data-reveal="text" data-delay="0.2">
            <Link to="/estudio" className="btn-line">
              Conheça o estúdio
              <span className="btn-line__mark" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}

/* -------------------------------------------------------------------------- */
/*  Contato                                                                   */
/* -------------------------------------------------------------------------- */

function ContactCall() {
  return (
    <SectionReveal aria-labelledby="conversa-titulo" className="bg-sand py-[var(--section)]">
      <div className="shell grid-editorial gap-y-12">
        <h2 id="conversa-titulo" className="display-xl col-span-4 md:col-span-10" data-reveal="text">
          Todo espaço começa <br className="hidden md:block" />
          <span className="md:pl-[1.2em]">com uma conversa.</span>
        </h2>
        <div className="col-span-4 md:col-span-4 md:col-start-8" data-reveal="text" data-delay="0.1">
          <p className="max-w-[34ch] text-[1.0625rem] leading-relaxed">
            Compartilhe sua ideia e descubra como ela pode ganhar forma.
          </p>
          <Link to="/contato" className="btn-line mt-8">
            Entre em contato
            <span className="btn-line__mark" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </SectionReveal>
  )
}
