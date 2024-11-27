import { useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from './Pages/Home'
import { Product } from './Pages/Product'
import { Sale } from './Pages/Sale'
import { Cart } from './Pages/Cart'
import { Checkout } from './Pages/Checkout'
import { Signup } from './Pages/Sign-up'
import { Login } from './Pages/Login'
import { Forgetpassword } from './Pages/forgetpassword'
import { Resetpassword } from './Pages/resetpassword'
import { Footer } from './Shared/Footer'
import { Header } from './Shared/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Product" element={<Product/>}/>
      <Route path='/Sale' element={<Sale/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Checkout' element={<Checkout/>}/>
      <Route path='/Signin' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Forgetpassword' element={<Forgetpassword/>}/>
      <Route path='/Resetpassword' element={<Resetpassword/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
