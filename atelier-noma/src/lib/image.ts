import { images, type ImageKey, type SiteImage } from '../data/images'

/**
 * Origem das fotografias:
 *  - 'remote' (padrão): CDN do Unsplash, com redimensionamento e AVIF/WebP automáticos.
 *  - 'local': arquivos em public/images, gerados por `npm run images:local`.
 */
const SOURCE = import.meta.env.VITE_IMAGE_SOURCE === 'local' ? 'local' : 'remote'

/** Larguras geradas para o srcset (as mesmas baixadas pelo script local). */
export const IMAGE_WIDTHS = [640, 1080, 1600, 2400] as const

const remoteUrl = (img: SiteImage, width: number) =>
  `https://images.unsplash.com/${img.id}?auto=format&fit=max&q=78&w=${width}`

const localUrl = (img: SiteImage, width: number) =>
  `${import.meta.env.BASE_URL}images/${img.key}-${width}.jpg`

export function imageUrl(img: SiteImage, width: number) {
  return SOURCE === 'local' ? localUrl(img, width) : remoteUrl(img, width)
}

export function imageSrcSet(img: SiteImage) {
  return IMAGE_WIDTHS.map((w) => `${imageUrl(img, w)} ${w}w`).join(', ')
}

export function getImage(key: ImageKey) {
  return images[key]
}
