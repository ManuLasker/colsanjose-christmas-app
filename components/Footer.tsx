import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="fo" className="flex flex-col sm:flex-row justify-evenly p-6 sm:p-10 border-t border-white text-white bg-red-900/90">
      <div className="mb-6 sm:mb-0">
        <ul className="flex flex-col gap-4 sm:gap-6 text-sm">
          <li className="font-bold text-lg sm:text-xl font-mountains-of-christmas">Colegio San José</li>
          <li className="max-w-[300px] sm:max-w-[380px]">Educando para la paz y un futuro brillante en el corazón de Barranquilla.</li>
        </ul>
      </div>
      <div className="mb-6 sm:mb-0">
        <ul className="flex flex-col gap-4 sm:gap-6 text-sm">
          <li className="font-bold text-lg sm:text-xl font-mountains-of-christmas">Enlaces Rapidos</li>
          <li><Link href="#sec1" className="hover:border-b border-white">Inicio</Link></li>
          <li><Link href="#sec2" className="hover:border-b border-white">Galeria navideña</Link></li>
          <li><Link href="#sec3" className="hover:border-b border-white">Arbol de valores</Link></li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-4 sm:gap-6 text-sm">
          <li className="font-bold text-lg sm:text-xl font-mountains-of-christmas">Contáctanos</li>
          <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 6053670600</li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@colsanjose.edu.co</li>
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Calle 66 No. 42 - 45, Barranquilla, Colombia</li>
        </ul>
      </div>
    </footer>
  )
}

