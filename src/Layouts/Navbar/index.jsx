import React from 'react'
import './style.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarContainer'>
        <img src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp" alt="" />
        <div className='navItem'>
            <ul className='list'>
                <li>HOME</li>
                <li>SHOP</li>
                <li>BLOG</li>
                <li>PAGES</li>
                <li>CONTACT</li>
            </ul>
        </div>
        <div className='navIcons'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-regular fa-user"></i>
        <i className="fa-regular fa-heart"></i>
        </div>
        </div>
    </div>
  )
}

export default Navbar