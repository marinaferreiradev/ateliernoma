import { useEffect, useRef, type RefObject } from 'react'
import { NavLink } from 'react-router-dom'
import { navigation, site } from '../data/site'
import { gsap, prefersReducedMotion } from '../lib/motion'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  returnFocusRef: RefObject<HTMLButtonElement | null>
}

/**
 * Menu de navegação para telas pequenas. Ocupa a tela inteira por baixo do
 * header (o botão "Fechar" permanece visível), bloqueia a rolagem da página,
 * torna o conteúdo de fundo inerte e fecha com Esc.
 */
export function MobileMenu({ open, onClose, returnFocusRef }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return
    const background = [document.getElementById('conteudo'), document.getElementById('rodape')]

    if (open) {
      wasOpen.current = true
      document.documentElement.style.overflow = 'hidden'
      background.forEach((el) => el?.setAttribute('inert', ''))

      const links = panel.querySelectorAll<HTMLElement>('[data-menu-item]')
      if (!prefersReducedMotion()) {
        gsap.fromTo(panel, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' })
        gsap.fromTo(
          links,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.06, delay: 0.1 },
        )
      }
      links[0]?.querySelector('a')?.focus()

      const onKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', onKey)
      return () => window.removeEventListener('keydown', onKey)
    }

    document.documentElement.style.overflow = ''
    background.forEach((el) => el?.removeAttribute('inert'))
    if (wasOpen.current) {
      wasOpen.current = false
      returnFocusRef.current?.focus()
    }
    return undefined
  }, [open, onClose, returnFocusRef])

  // Fecha automaticamente se a tela for ampliada para o layout de desktop.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 48rem)')
    const onChange = () => mq.matches && onClose()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [onClose])

  return (
    <div
      id="menu-mobile"
      ref={panelRef}
      hidden={!open}
      className="fixed inset-0 z-40 flex flex-col bg-linen pt-[var(--header-h)] text-graphite md:hidden"
    >
      <nav aria-label="Menu" className="shell flex flex-1 flex-col justify-center">
        <ul className="border-t hairline">
          {navigation.map((item) => (
            <li key={item.to} data-menu-item className="border-b hairline">
              <NavLink
                to={item.to}
                end={item.to === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-baseline justify-between py-5 font-serif text-[2.3rem] font-light leading-none tracking-[-0.03em] ${
                    isActive ? 'italic' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && <span className="meta font-sans not-italic">Você está aqui</span>}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="shell pb-[max(2rem,env(safe-area-inset-bottom))]" data-menu-item>
        <p className="meta max-w-[18rem]">
          {site.tagline}. {site.disclaimer}
        </p>
      </div>
    </div>
  )
}
