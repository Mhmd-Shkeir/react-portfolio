import ScrollProgressBar from '@/components/layout/ScrollProgressBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
