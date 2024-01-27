import { AboutMe } from '@/components/about-me'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-7xl m-auto">
      <Header />

      <Hero />

      <AboutMe />

      <Projects />

      <Contact />

      <Footer />
    </main>
  )
}
