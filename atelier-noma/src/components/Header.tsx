import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation, site } from '../data/site'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const isHome = pathname === '/'
  const overHero = isHome && !scrolled && !menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  // Fecha o menu ao trocar de página.
  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color] duration-700 ease-[var(--ease-quiet)] ${
          overHero
            ? 'border-b border-transparent text-linen'
            : scrolled || !isHome
              ? 'border-b hairline bg-linen/92 text-graphite backdrop-blur-[2px]'
              : 'border-b border-transparent text-graphite'
        }`}
      >
        <div className="shell flex h-[var(--header-h)] items-center justify-between">
          <Link to="/" className="relative z-10 py-3" aria-label={`${site.name} — página inicial`}>
            <Logo />
          </Link>

          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-10 lg:gap-14">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `group relative inline-block py-2 text-[0.8125rem] tracking-[0.04em] transition-opacity duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-75 hover:opacity-100 focus-visible:opacity-100'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={`absolute -bottom-0.5 left-0 h-px bg-current transition-[width] duration-700 ease-[var(--ease-slow)] ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="relative -mr-2 flex h-11 items-center gap-3 px-2 text-[0.8125rem] tracking-[0.04em] md:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>{menuOpen ? 'Fechar' : 'Menu'}</span>
            <span aria-hidden="true" className="relative block h-3 w-6">
              <span
                className={`absolute left-0 h-px w-6 bg-current transition-transform duration-500 ease-[var(--ease-slow)] ${
                  menuOpen ? 'top-1.5 rotate-45' : 'top-0.5'
                }`}
              />
              <span
                className={`absolute left-0 h-px bg-current transition-all duration-500 ease-[var(--ease-slow)] ${
                  menuOpen ? 'top-1.5 w-6 -rotate-45' : 'top-2.5 w-4'
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} returnFocusRef={menuButtonRef} />
    </>
  )
}
