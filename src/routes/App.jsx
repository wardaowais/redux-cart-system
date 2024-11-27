import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className=" bg-[#fff]">
      <Header/>
      
      <Outlet />  
      <Footer/>
    </div>
  )
}

export default App;
