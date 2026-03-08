import React from 'react'

const Heading = ({children }) => {
  return (
    <>
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
            {children }
        </h1>
    </>
  )
}

export default Heading