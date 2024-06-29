import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Auth from './Components/Auth/Auth'
import Admin from './Components/Admin/Admin'

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
