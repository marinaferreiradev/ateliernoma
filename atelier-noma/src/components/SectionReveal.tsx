import { useLayoutEffect, useRef, type ElementType, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { gsap, ScrollTrigger, EASE, EASE_SLOW, prefersReducedMotion } from '../lib/motion'

type SectionRevealProps<T extends ElementType> = {
  as?: T
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>

/**
 * Envolve uma seção e anima, ao entrar na tela, os elementos internos marcados com:
 *
 *   data-reveal="text"   texto que sobe levemente e ganha opacidade
 *   data-reveal="image"  moldura revelada de baixo para cima (clip-path)
 *   data-reveal="line"   linha fina desenhada da esquerda para a direita
 *   data-reveal="fade"   apenas opacidade
 *   data-parallax        imagem com deslocamento vertical muito sutil (scrub)
 *
 * data-delay="0.2" adiciona atraso (segundos). Com prefers-reduced-motion,
 * nada é animado e tudo aparece imediatamente.
 */
export function SectionReveal<T extends ElementType = 'section'>({ as, children, ...rest }: SectionRevealProps<T>) {
  const Tag = (as ?? 'section') as ElementType
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return

    if (prefersReducedMotion()) {
      gsap.set(root.querySelectorAll('[data-reveal]'), { opacity: 1, clearProps: 'transform,clipPath' })
      return
    }

    const ctx = gsap.context(() => {
      root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        const type = el.dataset.reveal
        const delay = Number(el.dataset.delay ?? 0)
        const trigger = { trigger: el, start: 'top 88%', once: true }

        if (type === 'image') {
          const img = el.querySelector('img')
          const tl = gsap.timeline({ scrollTrigger: trigger, delay })
          tl.fromTo(
            el,
            { opacity: 1, clipPath: 'inset(100% 0% 0% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: EASE_SLOW },
          )
          if (img && !img.hasAttribute('data-parallax')) {
            tl.fromTo(img, { scale: 1.14 }, { scale: 1, duration: 2, ease: EASE_SLOW }, 0)
          }
        } else if (type === 'line') {
          gsap.fromTo(
            el,
            { opacity: 1, scaleX: 0, transformOrigin: 'left center' },
            { scaleX: 1, duration: 1.4, ease: EASE_SLOW, delay, scrollTrigger: trigger },
          )
        } else if (type === 'fade') {
          gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out', delay, scrollTrigger: trigger })
        } else {
          gsap.fromTo(
            el,
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 1.2, ease: EASE, delay, scrollTrigger: trigger },
          )
        }
      })

      root.querySelectorAll<HTMLElement>('[data-parallax]').forEach((img) => {
        const frame = img.parentElement ?? img
        gsap.fromTo(
          img,
          { yPercent: -5, scale: 1.12 },
          {
            yPercent: 5,
            scale: 1.12,
            ease: 'none',
            scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
          },
        )
      })
    }, root)

    // Garante posições corretas após o carregamento das fontes.
    document.fonts?.ready.then(() => ScrollTrigger.refresh())

    return () => ctx.revert()
  }, [])

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  )
}
