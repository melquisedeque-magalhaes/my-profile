import Link from 'next/link'
import { MenuHamburguer } from './menu-hamburguer'

export function Header() {
  return (
    <header className="flex items-center justify-between w-full sm:py-4 p-4">
      <span className="font-kalam text-2xl">
        Melqui <span className="font-bold">Sodre</span>
      </span>

      <div className="items-center gap-6 hidden sm:flex">
        <Link href="#" className="text-base font-bold cursor-pointer">
          Home
        </Link>
        <Link href="#about" className="text-base cursor-pointer">
          Sobre mim
        </Link>
        <Link href="#projects" className="text-base cursor-pointer">
          Projetos
        </Link>
        <Link href="#contact" className="text-base cursor-pointer">
          Contato
        </Link>
      </div>

      <div className="sm:hidden flex">
        <MenuHamburguer />
      </div>
    </header>
  )
}
