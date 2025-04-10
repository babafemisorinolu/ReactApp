import { useState } from 'react'
import HomePage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'

function App() {

  return (
   <>
    <BrowserRouter>
    
    <Routes>

    <Route path='/' element={<HomePage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/profile' element={<ProfilePage />} />


    </Routes>

    </BrowserRouter>
     </>
  )
}

export default App
