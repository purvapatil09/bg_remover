import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
      <Link to={'/'}>
      <img src={assets.logo} alt="logo" width={150} />
      </Link>
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">Copyright @GreatStack.dev | All right reserved.</p>
      <div className="flex gap-1">
        <img src={assets.facebook_icon} alt="social_icon" width={40} />
        <img src={assets.twitter_icon} alt="social_icon" width={40} />
        <img src={assets.google_plus_icon} alt="social_icon" width={40} />
      </div>
    </div>
  )
}

export default Footer