"use client"

import { useEffect } from "react"
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-50 max-w-[90vw] max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 rounded-full bg-white p-2 shadow-lg"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  )
}
