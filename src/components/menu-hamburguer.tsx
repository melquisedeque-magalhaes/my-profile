'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function MenuHamburguer() {
  const [isShowModal, setIsShowModal] = useState(false)

  function showModal() {
    setIsShowModal(!isShowModal)
  }

  return (
    <>
      <button aria-label="menu-hamburguer" type="button" onClick={showModal}>
        <Menu width={24} height={24} className="w-6 h-6 text-primary-500" />
      </button>

      <div
        data-state={isShowModal}
        className="fixed z-50 data-[state=false]:hidden data-[state=true]:top-0 data-[state=true]:bottom-0 data-[state=true]:right-0 data-[state=true]:left-0 bg-surface-primary flex items-center justify-center py-4 px-4 transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 overflow-hidden"
      >
        <div className="flex flex-col items-center gap-4 ">
          <Link
            onClick={showModal}
            href="#"
            className="text-base font-bold cursor-pointer"
          >
            Home
          </Link>
          <Link
            onClick={showModal}
            href="#about"
            className="text-base cursor-pointer"
          >
            Sobre mim
          </Link>
          <Link
            onClick={showModal}
            href="#projects"
            className="text-base cursor-pointer"
          >
            Projetos
          </Link>
          <Link
            onClick={showModal}
            href="#contact"
            className="text-base cursor-pointer"
          >
            Contato
          </Link>
        </div>

        <button
          className="top-4 right-4 absolute cursor-pointer"
          onClick={showModal}
        >
          <X width={24} height={24} className="w-6 h-6 text-primary-purple" />
        </button>
      </div>
    </>
  )
}
