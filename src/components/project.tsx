import Image from 'next/image'
import { ReactNode } from 'react'

interface ProjectProps {
  date: string
  imageUrl: string
  children: ReactNode
  title: string
  description: string
  link: string
}

export function Project({
  children,
  date,
  description,
  imageUrl,
  title,
  link,
}: ProjectProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-surface-primary sm:p-6 p-4 flex flex-col max-w-[364px] h-[464px] rounded-lg"
    >
      <Image
        src={imageUrl}
        height={216}
        width={324}
        alt="projeto vunex"
        className="rounded-t-lg overflow-hidden w-[336px] h-[216px]"
      />

      <span className="mt-4 text-text-secondary text-sm">{date}</span>

      <div className="flex gap-2 my-2 flex-wrap">{children}</div>

      <h3 className="font-medium text-base">{title}</h3>

      <span className="text-base mt-2">{description}</span>
    </a>
  )
}
