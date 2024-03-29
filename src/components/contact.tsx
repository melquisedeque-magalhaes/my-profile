import Image from 'next/image'
import { FormContact } from './form-contact'

export function Contact() {
  return (
    <div
      id="contact"
      className="sm:p-16 px-4 py-6 bg-surface-primary flex-col sm:flex-row sm:rounded-lg gap-10 w-full flex items-center justify-between my-10"
    >
      <div className="flex flex-col gap-4 items-center sm:items-start max-w-[592px]">
        <Image
          src="/Information.svg"
          alt=""
          width={160}
          className="w-[160px] h-[160px]"
          height={160}
        />

        <span className="text-base text-secondary-500 font-kalam">Contato</span>

        <h3 className="text-2xl font-medium">
          Gostou do meu trabalho? Vamos trabalhar juntos
        </h3>

        <p className="text-base">
          Estou sempre a disposição para atender o seu projeto, ou apenas trocar
          uma ideia. pode entrar em contato pelo meu e-mail{' '}
          <a
            href="mailto:melqui.sodre15@gmail.com?subject=Entrando em contato pelo seu site&body=Olá, Melqui"
            target="_blank"
            className="text-secondary-500 underline"
          >
            melqui.sodre15@gmail.com
          </a>{' '}
          ou pelas minhas redes sociais.
        </p>

        <div className="flex gap-4">
          <a target="_blank" href="https://github.com/melquisedeque-magalhaes">
            <Image
              src="/github-icon.svg"
              alt=""
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/melqui-sodre/">
            <Image
              src="/linkedin-icon.svg"
              alt=""
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </a>
        </div>
      </div>

      <FormContact />
    </div>
  )
}
