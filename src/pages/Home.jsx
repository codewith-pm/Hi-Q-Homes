import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import HomeSeries from '../components/HomeSeries'
import Packages from '../components/Packages'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <main className="pt-20 lg:pt-32">
      <Hero />
      <About />
      <Services />
      <HomeSeries />
      <Packages />
      <Contact />
    </main>
  )
}

export default Home