export function Header() {
  return (
    <header className="flex items-center justify-between w-full sm:py-4 p-4">
      <span className="font-kalam text-2xl">
        Melqui <span className="font-bold">Sodre</span>
      </span>

      <div className="items-center gap-6 hidden sm:flex">
        <a className="text-base font-bold cursor-pointer">Home</a>
        <a href="#about" className="text-base cursor-pointer">
          About
        </a>
        <a href="#projects" className="text-base cursor-pointer">
          Projets
        </a>
        <a href="#contact" className="text-base cursor-pointer">
          Contato
        </a>
      </div>
    </header>
  )
}
