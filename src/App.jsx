import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import Abouts from './Components/Abouts/Abouts'
import Compus from './Components/Compus/Compus'
import Testmonials from './Components/Testmonials/Testmonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What  we offer' />
        <Programs />
        <Abouts />
        <Title subTitle='Gallery' title='Compus Photos' />
        <Compus />
        <Title subTitle='Testmonials' title='What Student Says' />
        <Testmonials />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App

