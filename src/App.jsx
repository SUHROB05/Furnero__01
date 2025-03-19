import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css'
import Home from './components/Home'
import Abaut from './components/About'
import Shop from './components/Shop'
import Contact from './components/Contact'
 
function App() {

  return (
    <>
     <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<Abaut />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App
