import React, { useContext } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../Context/BasketContext'
const Navbar = () => {


  const {basket} = useContext(BasketContext)

  return (
    <div className='navbar'>
        <div className='navbarContainer'>
        <img src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp" alt="" />
        <div className='navItem'>
            <ul className='list'>
            <Link to={"/"}><li>HOME</li></Link>
                <li>SHOP</li>
                <li>BLOG</li>
                <li>PAGES</li>
                <li>CONTACT</li>
                
            </ul>
        </div>
        <div className='navIcons'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <Link to={"/Basket"}><i className="fa-solid fa-cart-shopping">
           <sup>{basket.length ? basket.length :""}</sup></i>  </Link>
        
        <i className="fa-regular fa-user"></i>
        <i className="fa-regular fa-heart"></i>
        </div>
        </div>
    </div>
  )
}

export default Navbar