import Image from 'next/image'

export function Projects() {
  return (
    <div
      id="projects"
      className="sm:p-16 p-4 flex flex-col items-center justify-center relative"
    >
      <span className="text-base text-secondary-500 font-kalam">Projetos</span>

      <h2 className="text-2xl font-medium">
        Dê uma olhada nos meus projetos em destaque
      </h2>

      <div className="mt-10 flex gap-4 flex-col sm:flex-row">
        <a
          href="https://simplebot.vercel.app/"
          target="_blank"
          className="bg-surface-primary sm:p-6 p-4 flex flex-col max-w-[384px] h-[464px] rounded-lg"
        >
          <Image
            src="/simplebot.png"
            height={216}
            width={336}
            alt="projeto vunex"
            className="rounded-t-lg overflow-hidden w-[336px] h-[216px]"
          />

          <span className="mt-4 text-text-secondary text-sm">
            Out - Mar 2024
          </span>

          <div className="flex gap-2 my-2 flex-wrap">
            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              ReactJS
            </div>

            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              NextJs
            </div>

            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              Typescript
            </div>

            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              ShadcnUI
            </div>

            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              Tailwind
            </div>

            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              Tanstack Query
            </div>
          </div>

          <h3 className="font-medium text-base">Vunex</h3>
          <span className="text-base mt-2">
            Plataforma de automação de WhatsApp, para criação de atendimentos
            automaticos.
          </span>
        </a>

        <a
          href="https://github.com/melquisedeque-magalhaes/uber-clone"
          target="_blank"
          className="bg-surface-primary sm:p-6 p-4 flex flex-col max-w-[384px] h-[464px] rounded-lg"
        >
          <Image
            src="/uber-clone.png"
            height={216}
            width={336}
            alt="projeto vunex"
            className="rounded-t-lg overflow-hidden w-[336px] h-[216px]"
          />

          <span className="mt-4 text-text-secondary text-sm">
            28 - Jan 2022
          </span>

          <div className="flex gap-2 my-2 flex-wrap">
            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              React Native
            </div>

            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              Expo
            </div>

            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              React Native Navigation
            </div>

            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              MapView
            </div>

            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              Styled Components
            </div>

            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              Typescript
            </div>
          </div>

          <h3 className="font-medium text-base">Uber Clone</h3>

          <span className="text-base mt-2">Clone do aplicativo Uber</span>
        </a>

        <a
          href="https://github.com/melquisedeque-magalhaes/simpleanime"
          target="_blank"
          className="bg-surface-primary sm:p-6 p-4 flex flex-col max-w-[384px] h-[464px] rounded-lg"
        >
          <Image
            src="/simpleanime5.png"
            height={216}
            width={336}
            alt="projeto vunex"
            className="rounded-t-lg overflow-hidden w-[336px] h-[216px]"
          />

          <span className="mt-4 text-text-secondary text-sm">
            06 - Jan 2023
          </span>

          <div className="flex gap-2 my-2 flex-wrap">
            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              React Native
            </div>

            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              Expo
            </div>

            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              Expo Router
            </div>

            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              NativeWind
            </div>

            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              Tanstack Query
            </div>

            <div className="bg-surface-background rounded-lg border border-primary-500 py-1 px-2 flex items-center justify-center text-sm">
              Typescript
            </div>
          </div>

          <h3 className="font-medium text-base">SimpleAnime</h3>

          <span className="text-base mt-2">
            Aplicativo mobile para assistir animes
          </span>
        </a>
      </div>

      <Image
        src="/icon1.svg"
        width={124}
        height={95}
        className="absolute right-0 sm:right-[-64px] bottom-[-24px] w-[124px] h-[95px]"
        alt=""
      />

      <Image
        src="/icon2.svg"
        width={124}
        height={95}
        className="absolute right-0 sm:left-[-64px] top-[-64px] sm:top-[64px] w-[124px] h-[95px]"
        alt=""
      />
    </div>
  )
}
