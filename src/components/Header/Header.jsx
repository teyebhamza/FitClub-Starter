import React from 'react'
import './Header.css'
import Logo from '../../assets/logo1.png'
const Header = () => {
  return  (
    <div className="header">

       <img src={Logo} alt="" className="logo"/>     
       
            <ul className='header-menu'>
                <li>HOME</li>
                <li>Programs</li>
                <li>why us</li>
                <li>Plans</li>
                <li>works</li>
            </ul>
       </div>
  )
}

export default Header