import Image from 'next/image'
import { NotebookText } from 'lucide-react'

export function AboutMe() {
  return (
    <div
      id="about"
      className="bg-surface-primary sm:rounded-lg sm:p-16 px-4 py-6 flex flex-col sm:flex-row items-center justify-between my-10"
    >
      <Image
        src="/about.svg"
        width={488}
        className="w-[488px] h-[417px]"
        height={417}
        alt=""
      />

      <div className="flex flex-col justify-center max-w-[592px]">
        <span className="text-base text-secondary-500 font-kalam">
          Sobre mim
        </span>

        <h2 className="text-2xl font-medium mt-2">
          Sou dev FullStack, trabalho com React, React Native e NodeJS
        </h2>

        <p className="text-base mt-4">
          Sempre aprendendo as melhores tecnologias, para continuar evoluindo.
          Atualmente Estudando Javascript e Typescript focado nos frameworks
          ReactJs e NodeJs e React Native, GraphQl, Micro-Frontend com Module
          Federation e Single SPA. Sempre construindo Softwares bem estruturados
          e usando a engenharia de software para ter o melhor desenvolvimento.
        </p>

        <div className="w-48 mt-4">
          <a
            className="w-full flex items-center py-4 sm:px-6 text-base px-4 justify-between rounded-lg bg-primary-500 hover:opacity-90 transition-opacity"
            href="/Profile.pdf"
            download
          >
            <NotebookText className="w-6 h-6 text-text-primary" />
            Meu curriculo
          </a>
        </div>
      </div>
    </div>
  )
}
