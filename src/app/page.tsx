import Image from 'next/image'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/projects/Projects'
import Contacts from './components/Contacts'
import Achievements from './components/Achievements'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <div className='container mt-24 mx-auto px-14 py-4'>
        <Hero />
        <Achievements />
        <About />
        <Projects />
        <Contacts />
      </div>
    </main>
  )
}
