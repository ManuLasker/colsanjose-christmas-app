"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Bell } from 'lucide-react'
import { Modal } from './ui/modal'

interface GalleryImage {
  id: number
  title: string
  description: string
  imageUrl: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Celebracion Navideña",
    description: "Momentos especiales de nuestra comunidad celebrando la navidad",
    imageUrl: "/placeholder.svg?height=800&width=1200"
  },
  {
    id: 2,
    title: "Celebracion Navideña",
    description: "Momentos especiales de nuestra comunidad celebrando la navidad",
    imageUrl: "/placeholder.svg?height=800&width=1200"
  },
  {
    id: 3,
    title: "Celebracion Navideña",
    description: "Momentos especiales de nuestra comunidad celebrando la navidad",
    imageUrl: "/placeholder.svg?height=800&width=1200"
  },
  {
    id: 4,
    title: "Celebracion Navideña",
    description: "Momentos especiales de nuestra comunidad celebrando la navidad",
    imageUrl: "/placeholder.svg?height=800&width=1200"
  },
  {
    id: 5,
    title: "Celebracion Navideña",
    description: "Momentos especiales de nuestra comunidad celebrando la navidad",
    imageUrl: "/placeholder.svg?height=800&width=1200"
  },
  {
    id: 6,
    title: "Celebracion Navideña",
    description: "Momentos especiales de nuestra comunidad celebrando la navidad",
    imageUrl: "/placeholder.svg?height=800&width=1200"
  }
]

const GalleryItem = ({ image, onClick }: { image: GalleryImage; onClick: () => void }) => (
  <div 
    className="bg-gray-400/50 w-full sm:w-[300px] md:w-[320px] lg:w-[350px] flex flex-col justify-center items-center h-[300px] sm:h-[330px] md:h-[350px] lg:h-[370px] p-4 rounded-3xl text-white cursor-pointer transition-transform hover:scale-105"
    onClick={onClick}
  >
    <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
      <Image 
        src={image.imageUrl} 
        alt={image.title}
        fill
        className="object-cover"
      />
    </div>
    <div className="flex flex-col gap-2 text-center mt-4">
      <h5 className="text-base sm:text-lg font-bold font-mountains-of-christmas">{image.title}</h5>
      <p className="text-xs sm:text-sm">{image.description}</p>
    </div>
  </div>
)

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <>
      <section id="sec2" className="p-4 sm:p-5 bg-red-900">
        <div className="text-white text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-10 flex items-center gap-2 flex-wrap">
          <Bell className="w-6 h-6 sm:w-8 sm:h-8" />
          <h4 className="font-mountains-of-christmas break-words">Galeria Navideña</h4>
        </div>
        <div className="flex flex-col items-center p-2 sm:p-4 md:p-6 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-10">
            {galleryImages.map((image) => (
              <GalleryItem 
                key={image.id} 
                image={image} 
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
      </section>

      <Modal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)}
      >
        {selectedImage && (
          <div className="relative w-[90vw] h-[80vh] max-w-5xl">
            <Image
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
          </div>
        )}
      </Modal>
    </>
  )
}

