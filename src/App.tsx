import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Main from './components/Main'
import Products from './components/Products'
import { Routes , Route } from 'react-router-dom'
import Details from './components/Details'
import WishList from './components/WishList'

const App = () => {
  return (
    <>
    
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
     </Routes>
     
   
    </>
  
  )
}

export default App
