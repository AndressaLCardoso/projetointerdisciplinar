import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [menu, setMenu] = useState("inicio");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='' />
            <p>MarketAtHome</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("inicio")}}><Link style={{ textDecoration: 'none' }} to='/'>Inicio</Link>{menu==="inicio"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("produtos")}}><Link style={{ textDecoration: 'none' }} to='produtos'>Produtos</Link>{menu==="produtos"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("servicos")}}><Link style={{ textDecoration: 'none' }} to='servicos'>Servicos</Link>{menu==="servicos"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt='' /></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}
