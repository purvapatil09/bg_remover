import React from 'react'
import { TestimonialsData } from '../assets/assets'
import Heading from './Heading'

const Testimonials = () => {
  return (
    <div className='pb-16'>
      <Heading children={'Customer Testimonials'} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 pt-14 pb-8'>
        {
          TestimonialsData.map((item, index) => (
            <div className='bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-500' key={index}>
              <p className="text-4xl text-gray-500">”</p>
              <p className="text-sm text-gray-500">{item.text}</p>
              <div className="flex item-center gap-3 mt-5">
                <img src={item.image} alt="Customer_image" className="w-9 rounded-full" />
                <div>
                  <p>{item.author}</p>
                  <p className='text-sm text-gray-600'>{item.jobTitle}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonials