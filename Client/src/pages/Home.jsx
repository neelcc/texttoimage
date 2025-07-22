import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import Generatebtn from '../components/Generatebtn'
import Features from '../components/Features'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Testimonials/>
      <Features/>
      <Generatebtn/>  
    </div>
  )
}

export default Home
