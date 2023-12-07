import React, { useContext } from "react";
import { BasketContext } from "../../Context/BasketContext";
import "./style.css";

const Basket = () => {
  const { basket, decrease, increase,removeItem } = useContext(BasketContext);
  
  return (
    <div className="basketPage">
      {basket.length ? (
        basket.map((x) => {
          return (
            <div className="product" key={x.id}>
              <img className="productsImg" src={x.image} alt="" />
              <h2>{x.category}</h2>
              <p>price: {x.price * x.count}</p>
              <div className="count">
                <button onClick={() => increase(x)}>+</button>
                <button onClick={() => decrease(x)}>-</button>
                <p>{x.count}</p>
                <button onClick={() => removeItem(x)}>Remove</button>
              </div>
                
            </div>
          );
        })
      ) : (
        <h1>Basket bosdur</h1>
      )}
    </div>
  );
};

export default Basket;
