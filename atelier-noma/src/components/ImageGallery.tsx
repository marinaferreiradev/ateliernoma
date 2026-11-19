import { images } from '../data/images'
import type { GalleryRow } from '../data/projects'
import { Photo } from './Photo'
import { SectionReveal } from './SectionReveal'

/**
 * Galeria editorial: cada linha tem uma composição própria (ver GalleryRow).
 * Em telas pequenas as imagens empilham, mantendo recuos alternados para não
 * virar uma coluna monótona.
 */
export function ImageGallery({ rows, label }: { rows: GalleryRow[]; label: string }) {
  return (
    <SectionReveal as="section" aria-label={label} className="shell space-y-16 md:space-y-32">
      {rows.map((row, index) => (
        <GalleryRowView key={index} row={row} />
      ))}
    </SectionReveal>
  )
}

function GalleryRowView({ row }: { row: GalleryRow }) {
  switch (row.layout) {
    case 'full':
      return (
        <Photo image={row.images[0]} sizes="(min-width: 96rem) 92rem, 100vw" reveal parallax className="aspect-[4/3] md:aspect-[16/9]" />
      )

    case 'split':
      return (
        <div className="grid-editorial items-end gap-y-6">
          <Photo
            image={row.images[0]}
            sizes="(min-width: 48rem) 42vw, 100vw"
            reveal
            className="col-span-4 aspect-[4/5] md:col-span-5"
          />
          <Photo
            image={row.images[1]}
            sizes="(min-width: 48rem) 50vw, 80vw"
            reveal
            delay={0.15}
            className="col-span-3 col-start-2 aspect-[3/2] md:col-span-6 md:col-start-7"
          />
        </div>
      )

    case 'duo':
      return (
        <div className="grid-editorial gap-y-6">
          <Photo
            image={row.images[0]}
            sizes="(min-width: 48rem) 40vw, 85vw"
            reveal
            className="col-span-3 aspect-[4/5] md:col-span-5 md:col-start-2"
          />
          <Photo
            image={row.images[1]}
            sizes="(min-width: 48rem) 40vw, 85vw"
            reveal
            delay={0.15}
            className="col-span-3 col-start-2 aspect-[4/5] md:col-span-5 md:col-start-8 md:mt-[30%]"
          />
        </div>
      )

    case 'trio':
      return (
        <div className="grid-editorial gap-y-6">
          {row.images.map((image, i) => (
            <Photo
              key={image}
              image={image}
              sizes="(min-width: 48rem) 30vw, 70vw"
              reveal
              delay={i * 0.12}
              className={`aspect-[3/4] md:col-span-4 ${
                i === 0 ? 'col-span-3' : i === 1 ? 'col-span-3 col-start-2 md:mt-16' : 'col-span-3 md:mt-32'
              }`}
            />
          ))}
        </div>
      )

    case 'single': {
      const portrait = images[row.images[0]].ratio < 1
      const start = row.side === 'right' ? (portrait ? 'md:col-start-7' : 'md:col-start-6') : 'md:col-start-1'
      return (
        <div className="grid-editorial">
          <Photo
            image={row.images[0]}
            sizes="(min-width: 48rem) 58vw, 100vw"
            reveal
            className={`col-span-4 ${start} ${portrait ? 'aspect-[4/5] md:col-span-5' : 'aspect-[3/2] md:col-span-7'}`}
          />
        </div>
      )
    }
  }
}
