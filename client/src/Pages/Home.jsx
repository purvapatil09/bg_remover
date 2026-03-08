import React from 'react'
import Hero from '../Components/Hero'
import Steps from '../Components/Steps'
import UploadSection from '../Components/UploadSection'
import Testimonials from '../Components/Testimonials'
import BgSlider from '../Components/BgSlider'

const Home = () => {
  return (
    <>
     <Hero/>
     <Steps/>
     <BgSlider/>
     <Testimonials/>
     <UploadSection/>
    </>
  )
}

export default Home