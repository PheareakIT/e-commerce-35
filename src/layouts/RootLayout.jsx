import React from 'react'
import { Link, Outlet } from 'react-router'

import Header from '../components/Header';
import Footer from '../components/Footer';

function RootLayout() {
  return (
    <div>
      <Header/>
        
      <Outlet/>

      <Footer/>




    </div>
  )
}

export default RootLayout