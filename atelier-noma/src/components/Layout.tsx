import { useLayoutEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/motion'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const firstRender = useRef(true)

  // Troca de página: volta ao topo, entrada suave e recálculo dos gatilhos de rolagem.
  useLayoutEffect(() => {
    window.scrollTo(0, 0)

    if (firstRender.current) {
      firstRender.current = false
    } else {
      // Leva o foco para o conteúdo, para leitores de tela anunciarem a nova página.
      mainRef.current?.focus({ preventScroll: true })
      if (!prefersReducedMotion()) {
        gsap.fromTo(mainRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.out' })
      }
    }

    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" ref={mainRef} tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
