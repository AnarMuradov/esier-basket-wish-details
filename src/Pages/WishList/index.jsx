import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/WishListContext';
import './style.css'
import { BasketContext } from '../../Context/BasketContext';


const WishList = () => {
    const {wishlist,removewish} = useContext(WishlistContext)
    const { basket,addBasket } = useContext(BasketContext);
  return (
    < div className="Page">
 
    {/* <span>wishlist Total price: {getTotal()}</span> */}
  <div className="basketPage">
    {wishlist.length ? (
      wishlist.map((x) => {
        let added = basket.findIndex((y) => y.id === x.id)
        return (
          <div className="product" key={x.id}>
            <img className="productsImg" src={x.image} alt="" />
            <h2>{x.category}</h2>
            <p>price: {x.price * x.count}</p>
            <div className="count">
            <i onClick={()=>addBasket(x)} style={added !==-1 ? {background: "#71cd14" ,color:"white"} : null}   className="fa-solid fa-cart-shopping"></i>
            </div>
              <button onClick={() => removewish(x)}>Remove</button>
              
          </div>
        );
      })
    ) : (
      <h1>wishlist bosdur</h1>
      )}
      </div>
      </div>
  )
}

export default WishList