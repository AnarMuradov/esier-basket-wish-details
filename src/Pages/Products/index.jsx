import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import { BasketContext } from '../../Context/BasketContext'
import { WishlistContext } from '../../Context/WishListContext'
const Products = () => {
  const [category, setCategory] = useState("All");
const {basket , addBasket} = useContext(BasketContext)
const {wishlist,addWishList} = useContext(WishlistContext)
    const [api, setApi] = useState([])
  function getapi(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setApi(data))
  }
  useEffect(() => {
    getapi()
  }, [])
 
  function handleCategory(category) {
    setCategory(category);
  }
  const filterPrdoucts =
    category === "All" ? api : api.filter((item) => item.category === category);


  return (
    <div className='Page'>
       <div className="filter">
        <ul className="items">
          <li onClick={() => handleCategory("All")}>All</li>
          <li onClick={() => handleCategory("men's clothing")}>Men</li>
          <li onClick={() => handleCategory("jewelery")}>Jewelery</li>
          <li onClick={() => handleCategory("electronics")}>Electronics</li>
          <li onClick={() => handleCategory("women's clothing")}>Women</li>
        </ul>
      </div>
    <div className='ProductsPage'>
          {filterPrdoucts.map((x)=>{
            let added = basket.findIndex((y) => y.id === x.id)
            let addedwish = wishlist.findIndex((y) => y.id === x.id)
            return(
                <div className='product' key={x.id}>
                <img className="productsImg" src={x.image} alt="" />
                <h2>{x.category}</h2>
                <p>price: {x.price }</p>
                <div className='prodIcon'>
                <i onClick={()=>addWishList(x)} style={addedwish !==-1 ? {background: "#71cd14" ,color:"white"} : null} className="fa-regular fa-heart"></i>
                <i onClick={()=>addBasket(x)} style={added !==-1 ? {background: "#71cd14" ,color:"white"} : null}   className="fa-solid fa-cart-shopping"></i>
                </div>
                </div>
            )
        })

        }

    </div>
    </div>
  )
}

export default Products