import Image from 'next/image'
import { Project } from './project'
import { Tag } from './tag'

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

      <div className="mt-10 flex flex-wrap gap-4 flex-col sm:flex-row">
        <Project
          imageUrl="/simplebot.png"
          date="Out - Mar 2024"
          description="Plataforma de automação de WhatsApp, para criação de atendimentos automaticos."
          title="Vunex"
          link="https://simplebot.vercel.app/"
        >
          <Tag title="ReactJS" />
          <Tag title="NextJs" />
          <Tag title="ShadcnUI" />
          <Tag title="Tailwind" />
          <Tag title="Tanstack Query" />
          <Tag title="Typescript" />
        </Project>

        <Project
          imageUrl="/uber-clone.png"
          date="28 - Jan 2022"
          description="Clone do aplicativo Uber"
          title="Uber Clone"
          link="https://github.com/melquisedeque-magalhaes/uber-clone"
        >
          <Tag title="React Native" />
          <Tag title="Expo" />
          <Tag title="React Native Navigation" />
          <Tag title="MapView" />
          <Tag title="Styled Components" />
          <Tag title="Typescript" />
        </Project>

        <Project
          imageUrl="/ignews.png"
          date="Abr - Set 2022"
          description="IGNEWS - Portal de notícias"
          title="Ignews"
          link="https://ignews-ten.vercel.app/"
        >
          <Tag title="ReactJS" />
          <Tag title="NextJs" />
          <Tag title="Prismic CMS" />
          <Tag title="Stripe" />
          <Tag title="FaunaDB" />
          <Tag title="Typescript" />
          <Tag title="Sass" />
        </Project>

        <Project
          imageUrl="/simpleanime5.png"
          date="06 - Jan 2023"
          description="Aplicativo mobile para assistir animes"
          title="SimpleAnime"
          link="https://github.com/melquisedeque-magalhaes/simpleanime"
        >
          <Tag title="React Native" />
          <Tag title="Expo" />
          <Tag title="Expo Router" />
          <Tag title="MapView" />
          <Tag title="NativeWind" />
          <Tag title="Tanstack Query" />
          <Tag title="Typescript" />
        </Project>

        <Project
          imageUrl="/rsxp2.png"
          date="Abr - Mai 2023"
          description="Rocketseat Experience 2023 - Mobile App"
          title="Rsxp 2023"
          link="https://github.com/melquisedeque-magalhaes/rsxp-2023"
        >
          <Tag title="React Native" />
          <Tag title="Expo" />
          <Tag title="NativeWind" />
          <Tag title="NestJS" />
          <Tag title="Prisma" />
          <Tag title="Typescript" />
          <Tag title="PostgreSQL" />
          <Tag title="Sympla API" />
        </Project>
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
