import { click } from '@testing-library/user-event/dist/click';
import React, { useState,useEffect } from 'react';
 import { Link } from 'react-router-dom';
// import { Button } from './Button';
import './Navbar.css'
import Products from './pages/Products';
// import Services from './Services';

function Navbar() {
const[click,setClick]=useState(true)
const[button,setButton]=useState(true)
const [btn,clickBtn] = useState()

   const handleClick=()=>{
    window.location.href = "http://www.w3schools.com";
   }
const handleclick=()=>{
  setClick(!click)
}
const closeMobileMenu=()=>{
  setClick(false)
}
const showButton =()=>{
  if (window.innerWidth <= 960){
    setButton(false)
  }else{
    setButton(true)
  }
}
useEffect(()=>{
  showButton()
},[])
window.addEventListener('resize',showButton)

  return (
<div>
<div>
<nav className='navbar'>
<div className='navbar-container'>
<a className='navbar-logo' href="/">TRVL</a></div></nav>
    <div className='menu-icon'>
    <button onClick={handleclick}>{click ? "CLOSE" : "OPEN"}</button></div>
       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
       <li className='nav-item'>
       <a href='/' className='nav-links' onClick={closeMobileMenu}>
       home
       </a>
       </li>
       <li className='nav-item'>
       <a href='/Services' className='nav-links' onClick={closeMobileMenu}>
       services
       </a>
       </li>
       <li className='nav-item'>
       <a href='/Products' className='nav-links' onClick={closeMobileMenu}>
       products
       </a>
       </li>
       <li className='nav-item'>
       <a href='/Sign up' className='nav-links-mobile' onClick={closeMobileMenu}>
       sign up
       </a>
       <button className='btn-ln' ><Link to="LogIn">LOGIN PAGE</Link></button>
       <button onClick={handleClick}>W3 SCHOOLS PAGE</button>
       </li>
       
       </ul>
       
        

       
       </div>
       </div>
       )
      }


export default Navbar