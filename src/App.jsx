import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'
import RootLayout from './layouts/RootLayout'

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout/>}>
          
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={<Product/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App