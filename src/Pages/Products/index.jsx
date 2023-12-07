import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import { BasketContext } from '../../Context/BasketContext'
const Products = () => {

const {addBasket} = useContext(BasketContext)

    const [api, setApi] = useState([])
  function getapi(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setApi(data))
  }
  useEffect(() => {
    getapi()
  }, [])
 

  return (
    <div className='ProductsPage'>
        {api.map((x)=>{
            return(
                <div className='product' key={x.id}>
                <img className="productsImg" src={x.image} alt="" />
                <h2>{x.category}</h2>
                <p>price: {x.price }</p>
                <div className='prodIcon'>
                <i onClick={()=>addBasket(x)} className="fa-solid fa-cart-shopping"></i>
                </div>
                </div>
            )
        })

        }

    </div>
  )
}

export default Products