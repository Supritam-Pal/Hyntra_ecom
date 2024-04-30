import React from 'react'
import logo from '../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/setup'
import { signOut } from 'firebase/auth'
import Heart from '../images/Heart.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface searchProp{
setSearch?:any
setMenu?:any
}

const Navbar = (props:searchProp) => {
  const navigate = useNavigate()

const lense= "https://www.pinclipart.com/picdir/middle/133-1330673_free-navy-google-web-search-icon-transparent-background.png"
const account ='https://static.vecteezy.com/ti/vetor-gratis/p3/7407996-user-icon-person-icon-client-symbol-login-head-sign-icon-design-vetor.jpg'
const logout = 'https://static.vecteezy.com/system/resources/previews/000/575/370/original/vector-logout-sign-icon.jpg'

const log = async() => {
 try{
  await signOut(auth)
  toast.success("Loggedout successfully");
  setTimeout(() => {
    !auth.currentUser && navigate("/")
  } , 1000)

 }catch(err){
  console.error(err)
  let error:any = err
  toast.error(error)
 }
}

const wishList = () =>{
  auth.currentUser?.phoneNumber ?  navigate("/wishlist")
  : toast.warning("Please login")
}


  return (
    <>
    <ToastContainer autoClose={2000}/>
    <div className='flex text-sm font-bold text-grey-700 items-center p-4 shadow-lg'>
 <Link to="/"> <img src={logo} className='w-20 h-12'/>  </Link>
  <h1 onClick={() => props.setMenu("Computer")} className='ml-8 cursor-pointer'>COMPUTER</h1>
  <h1 onClick={() => props.setMenu("Shirts")} className='ml-8 cursor-pointe'>SHIRTS</h1>
  <h1 onClick={() => props.setMenu("Pants")} className='ml-8 cursor-pointe'>PANTS</h1>
  <h1 onClick={() => props.setMenu("Keyboard")} className='ml-8 cursor-pointe'>KEYBOARD</h1>
  <h1 onClick={() => props.setMenu("Bike")} className='ml-8 cursor-pointe'>BIKE</h1>
  <h1 onClick={() => props.setMenu("Mouse")} className='ml-8 cursor-pointe'>MOUSE</h1>
  <div className='border border-gray-100 flex items-center bg-gray-100 w-90 h-10 ml-14'>
    <img src={lense} className='w-3 h-3 ml-4'/>
    <input onChange={(e) => props.setSearch(e.target.value)} className="bg-gray-100 text-gray-900 font-normal outline-none
    text-sm rounded-sm block w-full p-2.5 ml-3" placeholder='Search for products' required/>
  </div>

  {auth.currentUser?.phoneNumber ?

  <div onClick={log} className='ml-6 text-x5'>
    <img src={logout} className='w-4 h-4 ml-3'/>
    <h1 className='cursor-pointer'>Logout</h1>
  </div>

: <Link to="/login">
<div className='ml-6 text-xs'>
<img src={account} className='w-5 h-5 ml-2'/>
<h1 className='cursor-pointer'>Login</h1>
</div>
</Link>}


<div onClick={wishList}  className='ml-6 text-xs'>
      <img src={Heart} className='w-5 h-5 ml-3'/>
      <h1 className='cursor-pointer'>Wishlist</h1>
      </div>
      

  





</div>
    </>

  )
}

export default Navbar

