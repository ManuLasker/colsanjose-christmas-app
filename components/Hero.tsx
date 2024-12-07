import Image from 'next/image'

export default function Hero() {
  return (
    <section id="sec1" className="flex flex-col justify-center items-center text-center min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] gap-4 bg-white/80 text-black p-5">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-900 font-bold font-mountains-of-christmas">Navidad en Colegio San José de Barranquilla</h1>
      <p className="text-base sm:text-lg md:text-xl font-medium max-w-2xl">Descubre como se vive la epoca navideña en nuestra institucion escolar.</p>
      <Image src="/placeholder.svg?height=400&width=400" alt="logo-csjb" width={400} height={400} className="w-32 sm:w-48 md:w-64 lg:w-80" />
    </section>
  )
}

