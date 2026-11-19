import { ContactForm } from '../components/ContactForm'
import { Photo } from '../components/Photo'
import { SectionReveal } from '../components/SectionReveal'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Contact() {
  usePageMeta('Contato', 'Converse com o Atelier Noma sobre arquitetura e interiores. Formulário demonstrativo de um estúdio conceitual.')

  return (
    <SectionReveal className="shell pt-[calc(var(--header-h)+clamp(4rem,11vw,9rem))] pb-[var(--section)]">
      <div className="grid-editorial gap-y-16">
        <div className="col-span-4 md:col-span-7">
          <h1 className="display-xl" data-reveal="text">
            Vamos conversar
            <br />
            sobre espaços?
          </h1>
          <p className="lead mt-8 max-w-[34ch] text-taupe-deep" data-reveal="text" data-delay="0.1">
            Conte sobre o lugar, o momento e o que você imagina. Toda conversa começa pelo essencial.
          </p>

          <div className="mt-16 md:mt-24" data-reveal="text" data-delay="0.15">
            <ContactForm />
          </div>
        </div>

        <aside className="col-span-4 md:col-span-4 md:col-start-9" aria-label="Sobre este contato">
          <Photo
            image="contact"
            sizes="(min-width: 48rem) 30vw, 100vw"
            reveal
            className="aspect-[4/5]"
          />
          <dl className="mt-10 space-y-6 border-t hairline pt-6" data-reveal="text">
            <div>
              <dt className="meta">Atendimento</dt>
              <dd className="mt-1 text-[0.9375rem] leading-relaxed">
                Este é um estúdio conceitual: não há telefone, endereço ou e-mail para contato.
              </dd>
            </div>
            <div>
              <dt className="meta">Sobre o formulário</dt>
              <dd className="mt-1 text-[0.9375rem] leading-relaxed">
                Os campos são validados no navegador para demonstrar a experiência. Nenhum dado é armazenado ou enviado.
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </SectionReveal>
  )
}
