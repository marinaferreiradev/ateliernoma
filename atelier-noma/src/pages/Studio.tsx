import { Link } from 'react-router-dom'
import { Photo } from '../components/Photo'
import { SectionReveal } from '../components/SectionReveal'
import { usePageMeta } from '../hooks/usePageMeta'

const PROCESS = [
  {
    title: 'Escuta',
    text: 'Entender quem vai habitar, como vive e o que espera do espaço — antes de qualquer desenho.',
  },
  {
    title: 'Leitura do lugar',
    text: 'Sol, vento, vistas, vizinhança e topografia. O contexto define as primeiras linhas do projeto.',
  },
  {
    title: 'Partido e matéria',
    text: 'Uma ideia clara de organização e uma paleta curta de materiais, testadas em maquetes e amostras.',
  },
  {
    title: 'Detalhe',
    text: 'Encontros, juntas, alturas e acabamentos resolvidos com o mesmo cuidado dado ao conjunto.',
  },
]

const MATERIALS = [
  { name: 'Concreto aparente', text: 'Estrutura e acabamento ao mesmo tempo. Guarda a marca da fôrma e a memória da obra.' },
  { name: 'Madeira natural', text: 'Temperatura e toque. Em forros, caixilhos e mobiliário, sempre com o veio à mostra.' },
  { name: 'Pedra', text: 'Peso, permanência e relação direta com o solo. Usada em muros, pisos e soleiras.' },
  { name: 'Cal', text: 'Superfícies foscas e minerais que respiram e recebem a luz com suavidade.' },
  { name: 'Luz natural', text: 'O material que não se compra: medido, filtrado e conduzido ao longo do dia.' },
]

export default function Studio() {
  usePageMeta('Estúdio', 'Atelier Noma: um estúdio conceitual de arquitetura e interiores. Filosofia, processo criativo, materiais e visão arquitetônica.')

  return (
    <>
      {/* Abertura */}
      <SectionReveal as="header" className="shell pt-[calc(var(--header-h)+clamp(4rem,12vw,10rem))] pb-20 md:pb-32">
        <h1 className="display-xl max-w-[12ch]" data-reveal="text">
          Arquitetura como expressão do essencial.
        </h1>
        <div className="grid-editorial mt-12 md:mt-16">
          <p className="meta col-span-4 max-w-[46ch] md:col-span-4 md:col-start-9" data-reveal="text" data-delay="0.1">
            O Atelier Noma é um estúdio conceitual, criado como case de portfólio. Não há equipe, endereço ou trajetória
            reais — há uma forma de pensar o espaço, apresentada aqui por inteiro.
          </p>
        </div>
      </SectionReveal>

      {/* Manifesto */}
      <SectionReveal aria-labelledby="manifesto-titulo" className="shell pb-[var(--section)]">
        <div className="grid-editorial gap-y-14">
          <Photo
            image="studio-hero"
            sizes="(min-width: 48rem) 40vw, 100vw"
            reveal
            parallax
            className="col-span-4 aspect-[3/4] md:col-span-5 md:aspect-[9/14]"
          />
          <div className="col-span-4 md:col-span-6 md:col-start-7 md:pt-[18%]">
            <h2 id="manifesto-titulo" className="sr-only">
              Manifesto
            </h2>
            <div className="space-y-8 font-serif text-[clamp(1.35rem,1.9vw,1.8rem)] font-light leading-[1.4] tracking-[-0.015em]">
              <p data-reveal="text">
                Espaço é aquilo que sobra quando a arquitetura faz bem o seu trabalho: o vazio entre as paredes, o
                intervalo entre dois passos, o silêncio de uma sala ao fim da tarde.
              </p>
              <p data-reveal="text">
                A luz é o que dá medida a esse vazio. Ela revela a espessura de um muro, a textura de uma superfície, a
                hora do dia.
              </p>
              <p data-reveal="text">
                A matéria é o que permanece. Escolhemos poucos materiais, honestos, que envelhecem com dignidade e
                deixam a vida acontecer em primeiro plano.
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Filosofia */}
      <SectionReveal aria-labelledby="filosofia-estudio" className="border-t hairline">
        <div className="shell py-[var(--section)]">
          <div className="grid-editorial gap-y-12">
            <h2 id="filosofia-estudio" className="display-lg col-span-4 md:col-span-5" data-reveal="text">
              Filosofia
            </h2>
            <div className="col-span-4 space-y-6 text-[1.0625rem] leading-[1.8] md:col-span-5 md:col-start-7 md:pt-4">
              <p data-reveal="text">
                Projetar, para nós, é um exercício de subtração. Retirar o que é excesso até que reste apenas o que dá
                sentido ao espaço: proporção, luz, matéria e uso.
              </p>
              <p data-reveal="text">
                Não buscamos uma linguagem que se repete de obra em obra, mas uma atitude: atenção ao lugar, respeito
                pelo tempo e cuidado com a experiência de quem habita.
              </p>
            </div>
            <Photo
              image="studio-angles"
              sizes="(min-width: 48rem) 25vw, 60vw"
              reveal
              className="col-span-2 col-start-3 aspect-[2/3] md:col-span-3 md:col-start-2 md:-mt-8"
            />
          </div>
        </div>
      </SectionReveal>

      {/* Processo criativo — sequência real de etapas */}
      <SectionReveal aria-labelledby="processo-titulo" className="bg-sand py-[var(--section)]">
        <div className="shell">
          <div className="grid-editorial mb-16 gap-y-6 md:mb-24">
            <h2 id="processo-titulo" className="display-lg col-span-4 md:col-span-6" data-reveal="text">
              Processo criativo
            </h2>
            <p className="col-span-4 max-w-[38ch] self-end text-[0.9375rem] leading-relaxed md:col-span-4 md:col-start-9" data-reveal="text">
              Quatro etapas que se sobrepõem e se repetem. O desenho avança por aproximações, nunca em linha reta.
            </p>
          </div>

          <ol className="grid gap-12 md:grid-cols-4 md:gap-8">
            {PROCESS.map((step, i) => (
              <li key={step.title} data-reveal="text" data-delay={i * 0.1}>
                <div className="cota text-graphite" aria-hidden="true" />
                <p className="meta mt-5" aria-hidden="true">
                  Etapa {i + 1} de {PROCESS.length}
                </p>
                <h3 className="mt-3 font-serif text-[1.65rem] leading-tight font-light tracking-[-0.02em]">{step.title}</h3>
                <p className="mt-4 max-w-[30ch] text-[0.9375rem] leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </SectionReveal>

      {/* Materiais */}
      <SectionReveal aria-labelledby="materiais-titulo" className="shell py-[var(--section)]">
        <div className="grid-editorial gap-y-14">
          <div className="col-span-4 md:col-span-4">
            <div className="md:sticky md:top-[calc(var(--header-h)+3rem)]">
              <h2 id="materiais-titulo" className="display-lg" data-reveal="text">
                Materiais
              </h2>
              <Photo
                image="studio-samples"
                sizes="(min-width: 48rem) 30vw, 100vw"
                reveal
                className="mt-10 aspect-[4/5] md:mt-14"
              />
            </div>
          </div>

          <ul className="col-span-4 border-t hairline md:col-span-7 md:col-start-6 md:mt-4">
            {MATERIALS.map((material, i) => (
              <li
                key={material.name}
                className="grid gap-3 border-b hairline py-8 md:grid-cols-[1fr_1.15fr] md:gap-10 md:py-11"
                data-reveal="text"
                data-delay={i * 0.04}
              >
                <h3 className="font-serif text-[clamp(1.6rem,2.3vw,2.2rem)] leading-[1.08] font-light tracking-[-0.02em]">{material.name}</h3>
                <p className="text-[0.9375rem] leading-relaxed md:pt-2">{material.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </SectionReveal>

      {/* Visão arquitetônica */}
      <SectionReveal aria-labelledby="visao-titulo" className="border-t hairline">
        <div className="shell py-[var(--section)]">
          <div className="grid-editorial gap-y-12">
            <Photo
              image="studio-stair"
              sizes="(min-width: 48rem) 30vw, 70vw"
              reveal
              className="col-span-3 aspect-[2/3] md:col-span-3"
            />
            <div className="col-span-4 md:col-span-5 md:col-start-5 md:self-center">
              <h2 id="visao-titulo" className="display-md" data-reveal="text">
                Visão arquitetônica
              </h2>
              <p className="mt-8 text-[1.0625rem] leading-[1.8]" data-reveal="text">
                Imaginamos casas que não disputam atenção com a paisagem nem com a vida que abrigam. Construções
                precisas, de poucos gestos, capazes de mudar ao longo do dia com a luz e de permanecer ao longo dos
                anos com o uso.
              </p>
              <p className="mt-6 text-[1.0625rem] leading-[1.8]" data-reveal="text">
                Uma arquitetura que se percebe mais pelo que proporciona do que pelo que exibe.
              </p>
            </div>
            <Photo
              image="studio-vault"
              sizes="(min-width: 48rem) 22vw, 60vw"
              reveal
              delay={0.15}
              className="col-span-3 col-start-2 aspect-[4/5] md:col-span-3 md:col-start-10 md:mt-40"
            />
          </div>
        </div>
      </SectionReveal>

      {/* Chamada */}
      <SectionReveal aria-label="Contato" className="bg-sand py-[clamp(5rem,10vw,8rem)]">
        <div className="shell flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p className="display-md max-w-[16ch]" data-reveal="text">
            Todo espaço começa com uma conversa.
          </p>
          <div data-reveal="text" data-delay="0.1">
            <Link to="/contato" className="btn-line">
              Entre em contato
              <span className="btn-line__mark" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </SectionReveal>
    </>
  )
}
