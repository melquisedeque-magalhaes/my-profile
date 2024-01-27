import Image from 'next/image'
import { ButtonPrimary } from './button-primary'
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
          About me
        </span>

        <h2 className="text-2xl font-medium mt-2">
          I’m a passionate software developer looking for my first international
          oppotunity
        </h2>

        <p className="text-base mt-4">
          Beyond coding, I am a coffee enthusiast, a cat lover, and a
          self-taught artist who enjoys spending my free time doodling. I am
          currently seeking opportunities to bring my skills and enthusiasm to a
          tech company in the United States or Europe and am excited about the
          prospect of relocating to pursue new challenges.
        </p>

        <div className="w-48 mt-4">
          <ButtonPrimary>
            <NotebookText className="w-6 h-6 text-text-primary" />
            Meu curriculo
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}
