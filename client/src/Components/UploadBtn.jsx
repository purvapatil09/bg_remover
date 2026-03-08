import React from 'react'
import { assets } from '../assets/assets.js'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const UploadBtn = ({ btntext }) => {
  const { isSignedIn } = useUser()
  const navigate = useNavigate()
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed!");
      return
    }
    navigate('/result', { state: {file }})
  }
  return (
    <div>
      <input type="file" accept='image/*' name="upload1" id="upload1" hidden onChange={handleFile} />
      <label
        htmlFor="upload1"
        className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer m-auto hover:scale-105 transition-all duration-500 bg-gradient-to-r from-violet-600 to-fuchsia-700 '
        onClick={(e) => {
          if (!isSignedIn) {
            e.preventDefault()
            alert('Please login to upload image!')
          }
        }}
      >
        <img src={assets.upload_btn_icon} alt="upload_btn_icon" className="w-5" />
        <p className='text-white text-sm'>{btntext}</p>
      </label>
    </div>
  )
}

export default UploadBtn