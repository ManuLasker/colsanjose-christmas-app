import Link from 'next/link'
import Image from 'next/image'
import { Bell } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-red-900/90 flex flex-col md:flex-row justify-between items-center p-4 border-b border-black">
      <Link href="https://colsanjose.edu.co/es/" target="_blank" className="mb-4 md:mb-0">
        <Image src="/placeholder.svg?height=100&width=300" alt="logo-csjb" width={300} height={100} className="w-48 md:w-64 lg:w-80" />
      </Link>
      <nav>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-white text-center">
          <li><Link href="#sec1" className="hover:border-b border-white text-sm md:text-base font-mountains-of-christmas">Inicio</Link></li>
          <li><Link href="#sec2" className="hover:border-b border-white text-sm md:text-base font-mountains-of-christmas">Galeria navideña</Link></li>
          <li><Link href="#sec3" className="hover:border-b border-white text-sm md:text-base font-mountains-of-christmas">Arbol de valores</Link></li>
          <li><Link href="#fo" className="hover:border-b border-white text-sm md:text-base font-mountains-of-christmas">Contáctanos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

