import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Result from './Pages/Result'
import BuyCredit from './Pages/BuyCredit'


const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buycredit" element={<BuyCredit />} />
          <Route path="*" element={<h1>404 Page not found.</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App