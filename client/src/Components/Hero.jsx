import React from 'react'
import {assets} from '../assets/assets.js'
import UploadBtn from './UploadBtn.jsx'

const Hero = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 lg:px-44 mt-10  ms:mt-20 '>
      {/* Left side */}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 ">
          Remove the <br className='max-md:hidden' />
          <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background</span> from <br className='max-md:hidden' />
          images for free.
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br  className='max-sm:hidden'/>
          Lorem Ipsum has been the industry's standard dummy text ever.
        </p>
        <UploadBtn btntext={'Upload your image'} />
      </div>
      {/* right side */}
      <div className='w-full max-w-md'>
        <img src={assets.header_img} alt="banner image" />
      </div>
    </div>
  )
}

export default Hero