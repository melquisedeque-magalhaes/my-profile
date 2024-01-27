import { ArrowRight, NotebookText } from 'lucide-react'
import Image from 'next/image'
import { ButtonPrimary } from './button-primary'

export function Hero() {
  return (
    <div className="flex sm:my-24 items-center justify-between flex-col-reverse sm:flex-row p-4 relative">
      <div className="flex flex-col max-w-[592px]">
        <h1 className="bg-primary-gradient bg-clip-text text-transparent text-4xl font-kalam">
          Eai Galerinha, Me chamo Melqui
        </h1>

        <h2 className="mt-8 text-2xl font-medium">
          Sou Dev FullStack e apaixonado por novas tecnologias
        </h2>

        <p className="mt-4 text-base">
          Tenho mais de 4 anos de experiencia no mercado de trabalho, Sou
          especializado em construir aplicações web e mobile, usando as
          tecnologias ReactJs, React Native e NodeJS.
        </p>

        <div className="flex items-center mt-8 sm:gap-4 gap-2">
          <div className="w-44">
            <a
              href="/Profile.pdf"
              download
              className="flex items-center py-4 sm:px-6 px-4 gap-2 rounded-lg bg-surface-secondary hover:opacity-90 transition-opacity"
            >
              <NotebookText className="w-6 h-6 text-text-primary" />
              Meu curriculo
            </a>
          </div>

          <div className="w-44">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/melqui-sodre/"
              className="w-full flex items-center py-4 sm:px-6 text-base px-4 justify-between rounded-lg bg-primary-500 hover:opacity-90 transition-opacity"
            >
              Meu Linkedin
              <ArrowRight className="w-6 h-6 text-text-primary" />
            </a>
          </div>
        </div>
      </div>

      <Image
        alt=""
        src="/arrow-down.svg"
        width={122}
        height={33}
        className="absolute bottom-[-116px] sm:bottom-[-84px] left-[60%]"
      />

      <Image
        className="w-[488px] h-[417px]"
        src="/brohero.svg"
        width={488}
        height={417}
        alt=""
      />
    </div>
  )
}
