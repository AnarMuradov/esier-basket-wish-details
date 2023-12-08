import React, { useContext } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../Context/BasketContext'
import { WishlistContext } from '../../Context/WishListContext'
const Navbar = () => {


  const {basket} = useContext(BasketContext)
  const {wishlist} = useContext(WishlistContext)
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
        <Link to={"/WishList"}><i className="fa-regular fa-heart">
        <sup>{wishlist.length ? wishlist.length :""}</sup></i></Link>
        
        </div>
        </div>
    </div>
  )
}

export default Navbar