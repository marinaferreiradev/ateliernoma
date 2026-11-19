import { SectionReveal } from '../components/SectionReveal'
import { imageList } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'
import { imageUrl } from '../lib/image'

export default function Credits() {
  usePageMeta('Créditos das fotografias', 'Créditos e licença das fotografias ilustrativas usadas no site conceitual do Atelier Noma.')

  return (
    <SectionReveal className="shell pt-[calc(var(--header-h)+clamp(4rem,11vw,9rem))] pb-[var(--section)]">
      <div className="grid-editorial gap-y-10">
        <div className="col-span-4 md:col-span-5">
          <h1 className="display-lg" data-reveal="text">
            Créditos das fotografias
          </h1>
          <div className="mt-8 space-y-5 text-[1rem] leading-[1.8]" data-reveal="text">
            <p>
              As fotografias deste site são reais e foram publicadas por fotógrafos independentes no Unsplash, sob a
              Unsplash License, que permite o uso gratuito.
            </p>
            <p>
              Elas têm caráter ilustrativo. O Atelier Noma é um estúdio fictício e não é autor das obras retratadas.
            </p>
          </div>
        </div>

        <ul className="col-span-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:col-span-6 md:col-start-7 lg:grid-cols-4">
          {imageList.map((img) => (
            <li key={img.key}>
              <a href={img.source} target="_blank" rel="noopener noreferrer" className="group block">
                <span className="photo-frame block aspect-square">
                  <img
                    src={imageUrl(img, 640)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="transition-opacity duration-500 group-hover:opacity-85"
                  />
                </span>
                <span className="meta mt-2 block leading-snug">
                  {img.alt}
                  <span className="sr-only"> — abre a página da fotografia no Unsplash em nova aba</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </SectionReveal>
  )
}
