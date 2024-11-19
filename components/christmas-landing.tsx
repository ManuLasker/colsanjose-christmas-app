'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Snowflake, Star, Calendar, Bell, MapPin, TreesIcon as Tree, Gift } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

export function ChristmasLanding() {
  const [activeTab, setActiveTab] = useState('gallery')

  const wishes = [
    "Éxito académico",
    "Comunidad unida",
    "Crecimiento personal",
    "Innovación educativa",
    "Paz y armonía",
    "Excelencia deportiva"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-red-900 to-green-950 relative">
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes falling {
          0% { transform: translateY(-100vh) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }

        .christmas-light {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          position: absolute;
          animation: twinkle 1s infinite;
        }

        .snowflake {
          position: fixed;
          color: #fff;
          font-size: 1em;
          text-shadow: 0 0 5px #fff;
          animation: falling linear infinite;
        }

        .decoration {
          position: absolute;
          color: #ff0000;
          font-size: 1.5em;
          z-index: 10;
        }

        .tree-ornament {
          transition: all 0.3s ease;
        }

        .tree-ornament:hover {
          transform: scale(1.2);
        }
      `}</style>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox=%220 0 80 40%22 width=%2280%22 height=%2240%22%3E%3Cpath fill=%22%23ffffff%22 fill-opacity=%220.05%22 d=%22M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] opacity-20"></div>

      {/* Snowfall Effect */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Christmas Lights */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="christmas-light"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'][Math.floor(Math.random() * 6)],
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <Tree className="decoration text-green-700" style={{ top: '10%', left: '5%' }} />
      <Gift className="decoration text-red-500" style={{ top: '20%', right: '5%' }} />

      {/* Header */}
      <header className="relative z-10 border-b bg-green-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="Colegio San José Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1 className="text-xl font-bold text-white">Colegio San José</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Button variant="ghost" className="text-white hover:text-green-200" onClick={() => setActiveTab('gallery')}>
              Galería
            </Button>
            <Button variant="ghost" className="text-white hover:text-green-200" onClick={() => setActiveTab('activities')}>
              Actividades
            </Button>
            <Button variant="ghost" className="text-white hover:text-green-200" onClick={() => setActiveTab('schedule')}>
              Programa
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <Star className="mx-auto w-16 h-16 text-yellow-400 animate-pulse mb-6" />
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-red-500">
            Navidad en San José
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-8">
            Celebrando el espíritu navideño con nuestra comunidad educativa
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Ver Galería
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Programa Navideño
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12">
        {/* Gallery Section */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
            <Bell className="w-8 h-8 text-red-500" />
            Galería Navideña
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="bg-white/10 backdrop-blur-sm border-0">
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg"
                    alt={`Actividad Navideña ${item}`}
                    width={400}
                    height={300}
                    className="rounded-lg mb-4 w-full object-cover"
                  />
                  <h4 className="text-white font-semibold mb-2">Celebración Navideña</h4>
                  <p className="text-green-100 text-sm">
                    Momentos especiales de nuestra comunidad celebrando la navidad
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Christmas Tree Section */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
            <Star className="w-8 h-8 text-yellow-400" />
            Árbol de Deseos Navideños
          </h3>
          <div className="flex justify-center">
            <svg width="400" height="450" viewBox="0 0 400 450" className="max-w-full h-auto">
              {/* Tree */}
              <polygon points="200,0 50,380 350,380" fill="#0f5132" />
              {/* Star */}
              <polygon points="200,0 190,20 210,20" fill="#fbbf24" className="animate-pulse" />
              {/* Ornaments */}
              {wishes.map((wish, index) => {
                const angle = (index / (wishes.length - 1)) * Math.PI * 0.8 - Math.PI * 0.4
                const radius = 160 - index * 20
                const x = 200 + Math.cos(angle) * radius
                const y = 190 + Math.sin(angle) * radius
                return (
                  <g key={index} className="tree-ornament">
                    <circle cx={x} cy={y} r="25" fill={['#ef4444', '#3b82f6', '#f59e0b'][index % 3]} />
                    <text x={x} y={y} textAnchor="middle" fill="white" fontSize="8" dy=".3em">
                      <tspan x={x} dy="0">{wish.split(' ')[0]}</tspan>
                      <tspan x={x} dy="1.2em">{wish.split(' ')[1]}</tspan>
                    </text>
                  </g>
                )
              })}
              {[...Array(25)].map((_, index) => {
                const angle = (index / 24) * Math.PI;
                const radius = 180 - (index % 2) * 25;
                const x = 200 + Math.cos(angle) * radius;
                const y = 190 + Math.sin(angle) * radius;
                return (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="5"
                    fill={['#ffff00', '#ff0000', '#00ff00', '#0000ff'][index % 4]}
                    className="animate-pulse"
                  />
                );
              })}

              {[...Array(5)].map((_, lineIndex) => (
                [...Array(10)].map((_, lightIndex) => {
                  const x = 125 + lineIndex * 40;
                  const y = 50 + lightIndex * 35;
                  return (
                    <circle
                      key={`light-${lineIndex}-${lightIndex}`}
                      cx={x}
                      cy={y}
                      r="5"
                      fill={['#ffff00', '#ff0000', '#00ff00', '#0000ff'][Math.floor(Math.random() * 4)]}
                      className="animate-pulse"
                    />
                  );
                })
              ))}

              {/* Presents */}
              <g>
                <rect x="40" y="380" width="80" height="70" fill="#ef4444" />
                <text x="80" y="415" textAnchor="middle" fill="white" fontSize="10">Feliz</text>
                <text x="80" y="430" textAnchor="middle" fill="white" fontSize="10">Navidad</text>
              </g>
              <g>
                <rect x="130" y="380" width="90" height="60" fill="#3b82f6" />
                <text x="175" y="410" textAnchor="middle" fill="white" fontSize="10">Próspero</text>
                <text x="175" y="425" textAnchor="middle" fill="white" fontSize="10">Año Nuevo</text>
              </g>
              <g>
                <rect x="230" y="380" width="85" height="75" fill="#f59e0b" />
                <text x="272" y="418" textAnchor="middle" fill="white" fontSize="10">Paz y</text>
                <text x="272" y="433" textAnchor="middle" fill="white" fontSize="10">Amor</text>
              </g>
              <g>
                <rect x="70" y="350" width="70" height="60" fill="#84cc16" />
                <text x="105" y="380" textAnchor="middle" fill="white" fontSize="10">Alegría</text>
                <text x="105" y="395" textAnchor="middle" fill="white" fontSize="10">y Unión</text>
              </g>
              <g>
                <rect x="210" y="360" width="80" height="50" fill="#8b5cf6" />
                <text x="250" y="385" textAnchor="middle" fill="white" fontSize="10">Éxito en</text>
                <text x="250" y="400" textAnchor="middle" fill="white" fontSize="10">2024</text>
              </g>
              <g>
                <rect x="320" y="380" width="75" height="65" fill="#10b981" />
                <text x="357" y="413" textAnchor="middle" fill="white" fontSize="10">Sabiduría</text>
                <text x="357" y="428" textAnchor="middle" fill="white" fontSize="10">y Gracia</text>
              </g>
              <g>
                <rect x="150" y="330" width="85" height="70" fill="#f472b6" />
                <text x="192" y="365" textAnchor="middle" fill="white" fontSize="10">Esperanza</text>
                <text x="192" y="380" textAnchor="middle" fill="white" fontSize="10">Renovada</text>
              </g>
            </svg>
          </div>
          <p className="text-center text-white mt-8">
            Nuestro árbol de Navidad está decorado con los deseos para nuestra escuela. 
            Cada ornamento representa una aspiración para el próximo año.
          </p>
        </section>
      </main>

      <Tree className="decoration text-green-700" style={{ bottom: '15%', left: '8%' }} />
      <Gift className="decoration text-red-500" style={{ bottom: '25%', right: '8%' }} />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-green-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <p className="text-green-100">Calle 66 No. 42 - 45</p>
              <p className="text-green-100">Barranquilla, Colombia</p>
              <p className="text-green-100">pastoral@colesanjose.edu.co</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Button variant="link" className="text-green-100 hover:text-white p-0">
                    Inicio
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="text-green-100 hover:text-white p-0">
                    Galería
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="text-green-100 hover:text-white p-0">
                    Programa
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <Button variant="ghost" className="text-white hover:text-green-200">
                  Facebook
                </Button>
                <Button variant="ghost" className="text-white hover:text-green-200">
                  Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}