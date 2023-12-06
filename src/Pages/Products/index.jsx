import React, { useEffect, useState } from 'react'
import './style.css'
const Products = () => {
    const [api, setApi] = useState([])
    const [basket, setBasket] = useState([])
  function getapi(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setApi(data))
  }
  useEffect(() => {
    getapi()
  }, [])
  function add(newitem){
    let elementindex = basket.findIndex((x)=>x.id===newitem.id)
    if(elementindex !== -1){
      const newBasket=[...basket]
      newBasket[elementindex].count++
      setBasket(newBasket)
    }
}

  return (
    <div className='ProductsPage'>
        {api.map((x)=>{
            return(
                <div className='product'>
                <img className="productsImg" src={x.image} alt="" />
                <h2>{x.category}</h2>
                <p>price: {x.price}</p>
                <div className='prodIcon'>
                <i onClick={add()} className="fa-solid fa-cart-shopping"></i>
                </div>
                </div>
            )
        })

        }

    </div>
  )
}

export default Products