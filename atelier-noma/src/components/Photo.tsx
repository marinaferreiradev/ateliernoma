import type { CSSProperties } from 'react'
import type { ImageKey } from '../data/images'
import { getImage, imageSrcSet, imageUrl } from '../lib/image'

interface PhotoProps {
  image: ImageKey
  /** Atributo sizes do srcset — descreva a largura real ocupada. */
  sizes: string
  /** Classes da moldura (use para definir proporção: aspect-[4/5], h-full…). */
  className?: string
  imgClassName?: string
  /** Imagem acima da dobra: carregamento imediato e prioridade alta. */
  priority?: boolean
  /** Revela a moldura ao entrar na tela (dentro de um SectionReveal). */
  reveal?: boolean
  /** Deslocamento vertical sutil durante a rolagem. */
  parallax?: boolean
  delay?: number
  /** Texto alternativo próprio; por padrão usa o do acervo. Use "" para imagem decorativa. */
  alt?: string
  style?: CSSProperties
}

export function Photo({
  image,
  sizes,
  className = '',
  imgClassName = '',
  priority = false,
  reveal = false,
  parallax = false,
  delay,
  alt,
  style,
}: PhotoProps) {
  const img = getImage(image)

  return (
    <div
      className={`photo-frame ${className}`}
      data-reveal={reveal ? 'image' : undefined}
      data-delay={delay}
      style={style}
    >
      <img
        src={imageUrl(img, 1600)}
        srcSet={imageSrcSet(img)}
        sizes={sizes}
        alt={alt ?? img.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        data-parallax={parallax ? '' : undefined}
        className={imgClassName}
        style={{ objectPosition: img.focus ?? '50% 50%' }}
      />
    </div>
  )
}
