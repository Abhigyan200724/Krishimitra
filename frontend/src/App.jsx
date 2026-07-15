import { useState } from 'react'
import Navbar from './components/layout/Navbar.jsx'
import HeroSection from './components/landing/HeroSection'
import FeatureSection from './components/landing/FreatureSection'
import Stats from './components/landing/Stats'
import Languages from './components/landing/Languages'
import Footer from './components/layout/Footer'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Contact from './pages/Contact.jsx'
import Dashboard from './pages/Dashboard.jsx'
import CropDoctor from './pages/CropDoctor.jsx'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/crop-doctor" element={<CropDoctor/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App