import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DrawingSection from '@/components/DrawingSection'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <DrawingSection />
      <Gallery />
      <Footer />
    </main>
  )
}

