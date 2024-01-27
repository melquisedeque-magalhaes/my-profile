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
          Over 4 years of experience in the tech industry. I specialize in
          building innovative web and mobile applications using technologies
          such as React, React Native, and Node.js.
        </p>

        <div className="flex items-center mt-8 gap-4">
          <div className="w-48">
            <button className="flex items-center py-4 px-6 gap-2 rounded-lg bg-surface-secondary hover:opacity-90 transition-opacity">
              <NotebookText className="w-6 h-6 text-text-primary" />
              Meu curriculo
            </button>
          </div>

          <div className="w-48">
            <ButtonPrimary>
              Get in touch
              <ArrowRight className="w-6 h-6 text-text-primary" />
            </ButtonPrimary>
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
