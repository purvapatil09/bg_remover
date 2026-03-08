import React from 'react'
import Heading from './Heading'
import { StepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='px-4 lg:px-44 py-20 xl:py-32'>
      <Heading >Steps to remove background<br /> image in seconds</Heading>
      <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-20 justify-center'>
        {
          StepsData.map((item, index) => (
            <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500' key={index}>
              <img className='max-w-lg' src={item.img} alt='steps_image' />
              <div>
                <p className='text-xl font-medium'>{item.heading}</p>
                <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later. <br />
                  This is a demo.</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Steps