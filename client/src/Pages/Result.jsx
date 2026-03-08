import React, { useEffect, useState } from 'react'
import UploadBtn from '../Components/UploadBtn'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'


const Result = () => {
  const navigate = useNavigate()
  const { state } = useLocation()

  const [original, setOriginal] = useState(null)
  const [processed, setProcessed] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!state?.file) {
      navigate('/')
      return
    }
    const file = state.file
    setOriginal(URL.createObjectURL(file))
    removeBG(file)
  }, [])

  const removeBG = async (file) => {
     setLoading(true)
     const formData= new FormData();
     formData.append("image_file",file);
     formData.append("size",'auto');
     formData.append("type",'auto');
     formData.append("format",'png');
    try {
      const res=await axios.post(
        "https://api.remove.bg/v1.0/removebg",
        formData,
        {
          headers:{
            "X-Api-Key":import.meta.env.VITE_BGREMOVER_API_KEY,
          },
          responseType:"blob"
        }
      );
      setProcessed(URL.createObjectURL(res.data))
    }
    catch (error){
       console.log("Bg remove project error:-", error)
    }
    setLoading(false)
  }

  const downloadImage = () => {
    const a = document.createElement('a')
    a.href = processed
    a.download = "bg_removed.png"
    a.click()
  }
  return (
    <>
      <div className="px-4 lg:px-44 pt-8 pb-3">
        <div className="bg-white rounded-lg px-8 py-6 drop-shadow-sm">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* left side */}
            <div>
              <p className="font-semibold text-gray-600 mb-2">
                Original
              </p>
              {
                original && <img src={original} alt="with Background" className="rounded-md border" />
              }
            </div>
            {/* right side */}
            <div>
              <p className="font-semibold text-gray-600 mb-2">
                Background Removed
              </p>
              <div className="rounded-md border relative bg-layer overflow-hidden">
                {/* loader when remove background in process */}
                {
                  loading &&
                  (<div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 z-50">
                    <div className="border-4 border-violet-600 border-t-transparent rounded-full h-12 w-12 animate-spin">

                    </div>
                  </div>)
                }
                {
                  !loading && processed && (
                    <img src={processed} alt="Background_remove" />
                  )
                }
              </div>

            </div>
          </div>
          <div className='flex justify-center sm:justify-end items-end flex-wrap gap-4 mt-6'>
            <UploadBtn btntext={'Try another image'} />
            {/* <a href="#" className="px-8 py-3.5 text-sm rounded-full cursor-pointer hover:scale-105 transition-all duration-500 bg-gradient-to-r from-violet-600 to-fuchsia-700 text-white">Download image</a>  */}
            {
              processed && (
                <button
                  className="px-8 py-3.5 text-sm rounded-full cursor-pointer hover:scale-105 transition-all duration-500 bg-transparent border border-violet-600 text-violet-600"
                  onClick={downloadImage}
                >
                  Download image
                </button>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Result