import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import Abouts from './Components/Abouts/Abouts'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What  we offer' />
        <Programs />
          <Title subTitle='About Us' title='Education Information' />
         <Abouts />
      </div>
     
    </div>
  )
}

export default App

