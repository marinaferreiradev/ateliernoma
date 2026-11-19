import { useId, useRef, useState, type FormEvent } from 'react'
import { projectTypes } from '../data/site'

type Field = 'name' | 'email' | 'type' | 'message'
type Values = Record<Field, string>
type Errors = Partial<Record<Field, string>>

const EMPTY: Values = { name: '', email: '', type: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values: Values): Errors {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = 'Informe seu nome.'
  if (!values.email.trim()) errors.email = 'Informe seu e-mail.'
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Confira o e-mail: o formato parece incompleto.'
  if (!values.type) errors.type = 'Escolha o tipo de projeto.'
  if (values.message.trim().length < 20) errors.message = 'Conte um pouco mais sobre a ideia (mínimo de 20 caracteres).'
  return errors
}

/**
 * Formulário de contato demonstrativo.
 *
 * Valida os campos no navegador, mas NÃO envia dados a lugar nenhum: o Atelier
 * Noma é um estúdio fictício. Ao confirmar, exibe um estado informativo.
 */
export function ContactForm() {
  const uid = useId()
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'demo'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const id = (field: Field) => `${uid}-${field}`

  const update = (field: Field, value: string) => {
    const next = { ...values, [field]: value }
    setValues(next)
    if (status === 'demo') setStatus('idle')
    if (submitted) setErrors(validate(next))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    const found = validate(values)
    setErrors(found)

    const firstInvalid = (Object.keys(found) as Field[])[0]
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(id(firstInvalid))}`)?.focus()
      return
    }
    setStatus('demo')
  }

  const reset = () => {
    setValues(EMPTY)
    setErrors({})
    setSubmitted(false)
    setStatus('idle')
  }

  const fieldClass = (field: Field) =>
    `peer w-full border-0 border-b bg-transparent px-0 pt-2 pb-3 text-[1.0625rem] text-graphite outline-none transition-colors duration-500 placeholder:text-taupe/70 focus:border-graphite ${
      errors[field] ? 'border-[#8a3b2e]' : 'border-graphite/25'
    }`

  const errorText = (field: Field) =>
    errors[field] ? (
      <p id={`${id(field)}-erro`} className="mt-2 text-[0.8125rem] text-[#8a3b2e]">
        {errors[field]}
      </p>
    ) : null

  const describedBy = (field: Field) => (errors[field] ? `${id(field)}-erro` : undefined)

  const errorCount = Object.keys(errors).length

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="space-y-10" aria-describedby={`${uid}-aviso`}>
      <p id={`${uid}-aviso`} className="border-l border-taupe pl-4 text-[0.875rem] leading-relaxed text-taupe-deep">
        Demonstração de interface. Como o Atelier Noma é um estúdio conceitual, o envio está desabilitado e nenhuma
        informação sai do seu navegador.
      </p>

      <div className="grid gap-10 md:grid-cols-2 md:gap-x-10">
        <div>
          <label htmlFor={id('name')} className="meta block">
            Nome
          </label>
          <input
            id={id('name')}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy('name')}
            aria-required="true"
            className={fieldClass('name')}
          />
          {errorText('name')}
        </div>

        <div>
          <label htmlFor={id('email')} className="meta block">
            E-mail
          </label>
          <input
            id={id('email')}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy('email')}
            aria-required="true"
            className={fieldClass('email')}
          />
          {errorText('email')}
        </div>
      </div>

      <fieldset aria-describedby={describedBy('type')}>
        <legend className="meta mb-4">Tipo de projeto</legend>
        <div className="flex flex-wrap gap-2.5">
          {projectTypes.map((type) => {
            const selected = values.type === type
            return (
              <label
                key={type}
                className={`relative cursor-pointer border px-4 py-2.5 text-[0.875rem] transition-colors duration-500 has-[:focus-visible]:outline has-[:focus-visible]:outline-1 has-[:focus-visible]:outline-offset-4 ${
                  selected
                    ? 'border-graphite bg-graphite text-linen'
                    : 'border-graphite/25 hover:border-graphite'
                }`}
              >
                <input
                  type="radio"
                  name="type"
                  value={type}
                  id={type === projectTypes[0] ? id('type') : undefined}
                  checked={selected}
                  onChange={(e) => update('type', e.target.value)}
                  className="sr-only"
                />
                {type}
              </label>
            )
          })}
        </div>
        {errorText('type')}
      </fieldset>

      <div>
        <label htmlFor={id('message')} className="meta block">
          Mensagem
        </label>
        <textarea
          id={id('message')}
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy('message')}
          aria-required="true"
          placeholder="Fale sobre o espaço, o momento e o que você imagina."
          className={`${fieldClass('message')} resize-y`}
        />
        {errorText('message')}
      </div>

      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-line">
          Validar mensagem
          <span className="btn-line__mark" aria-hidden="true" />
        </button>
        <p className="meta">Todos os campos são obrigatórios.</p>
      </div>

      <div role="status" aria-live="polite" className="min-h-[1px]">
        {submitted && errorCount > 0 && (
          <p className="text-[0.875rem] text-[#8a3b2e]">
            {errorCount === 1 ? 'Há 1 campo para revisar.' : `Há ${errorCount} campos para revisar.`}
          </p>
        )}
        {status === 'demo' && (
          <div className="border-t hairline pt-8">
            <p className="font-serif text-[1.6rem] font-light leading-tight">Mensagem validada.</p>
            <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-relaxed">
              Todos os campos estão corretos. Nesta versão conceitual o envio está desabilitado, então nada foi
              transmitido — o formulário existe para demonstrar a experiência.
            </p>
            <button type="button" onClick={reset} className="text-link mt-4">
              Limpar formulário
            </button>
          </div>
        )}
      </div>
    </form>
  )
}
