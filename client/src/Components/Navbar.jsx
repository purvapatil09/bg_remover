import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useClerk,useUser,UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  // const {openSignIn}=useClerk()
  const {openSignUp}=useClerk()
  const {isSignedIn,user}=useUser()
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
      <Link to={'/'} >
        <img src={assets.logo} className='w-32 sm:w-44 ' alt='logo' />
      </Link>
      {/* <button className='bg-zinc-800 text-white flex items-center gap-4 px-2 py-2 sm:px-8 sm:py-3 text-sm rounded-full'onClick={()=>openSignIn({})}>
        Get Started <img src={assets.arrow_icon} className='w-3 sm:w-4' />
      </button> */}
      {
        isSignedIn
        ?<div><UserButton/></div>
        :<button className='bg-zinc-800 text-white flex items-center gap-4 px-2 py-2 sm:px-8 sm:py-3 text-sm rounded-full'onClick={()=>openSignUp({})}>
        Get Started <img src={assets.arrow_icon} className='w-3 sm:w-4' />
      </button>
      }
    </div>
  )
}

export default Navbar