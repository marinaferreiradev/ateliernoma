interface LogoProps {
  className?: string
  /** Versão grande, usada no rodapé. */
  large?: boolean
}

/**
 * Logotipo tipográfico: "ATELIER NOMA" em serifada com espaçamento amplo.
 * O "O" de NOMA é desenhado como a planta de um pátio — um quadrado com um
 * vazio de luz no canto —, o mesmo símbolo usado no favicon.
 */
export function Logo({ className = '', large = false }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap font-serif font-medium uppercase leading-none ${
        large ? 'tracking-[0.18em]' : 'text-[1.05rem] tracking-[0.3em]'
      } ${className}`}
      aria-label="Atelier Noma"
      role="img"
    >
      <span aria-hidden="true">Atelier</span>
      <span aria-hidden="true" className="w-[0.55em]" />
      <span aria-hidden="true" className="inline-flex items-center">
        N
        <PatioMark className="mx-[0.06em] h-[0.72em] w-[0.72em] translate-y-[-0.01em]" />
        MA
      </span>
    </span>
  )
}

export function PatioMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="12" y="1" width="11" height="11" fill="currentColor" opacity="0.38" />
    </svg>
  )
}
