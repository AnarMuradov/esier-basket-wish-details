import React, { createContext } from 'react'
import useLocal from '../Hooks/useLocal';
export const WishlistContext = createContext();


function WishListProvider( {children}) {
    const [wishlist, setWishlist] = useLocal("wishlist",[]);

  function addWishList(item) {
    const elementindex = wishlist.findIndex((x) => x.id === item.id);

    if (elementindex === -1) {
        setWishlist([...wishlist, { ...item, count: 1 }]);
      return;
    }
    wishlist[elementindex].count++;
    setWishlist([...wishlist]);
  }
  function removewish(item) {

    setWishlist(wishlist.filter(x=>x.id !== item.id))
  }
  return (

    <WishlistContext.Provider value={{wishlist, setWishlist,addWishList,removewish}}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishListProvider