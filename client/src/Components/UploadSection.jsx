import React from 'react'
import Heading from './Heading'
import UploadBtn from './UploadBtn'

const UploadSection = () => {
  return (
    <div className='pb-16'>
      <Heading children={'See the magic. Try now'}/>
      <div className="text-center mt-16">
        <UploadBtn btntext={'Upload your image'} />
      </div>
    </div>
  )
}

export default UploadSection