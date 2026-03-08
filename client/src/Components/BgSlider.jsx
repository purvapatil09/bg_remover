import React, { useState } from 'react'
import Heading from './Heading'
import { assets } from '../assets/assets'

const BgSlider = () => {
  const [sliderPosition,setSliderPosition]=useState(40)
  const handleSliderChanges=(e)=>{
    setSliderPosition(e.target.value)
  }
  return (
    <div className='px-4 lg:px-44 pb-20 xl:pb-32'>
      <Heading >Remove Background With High
        <br /> Quality and Accuracy</Heading>
      <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl mt-14'>
        {/* with background */}
        <img src={assets.image_w_bg} alt="BgSlider_image" style={{clipPath:`inset(0 ${100.1-sliderPosition}% 0 0)`}} />
        {/* without background */}
        <img src={assets.image_wo_bg} alt="BgSlider_image"style={{clipPath:`inset(0 0 0 ${sliderPosition}%)`}} className='absolute top-0 left-0 w-full h-full' />
      {/* slider */}
      <input type="range" min={0} max={100} value={sliderPosition} onChange={handleSliderChanges} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' />
      </div>
    </div>
  )
}

export default BgSlider