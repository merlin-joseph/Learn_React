import { createContext } from 'react';
import { useState } from 'react';

const CartContext = createContext([]);

const  CartProvider = (props) => {
    const [cartItems, setCart] =useState([])
    return (
      <CartContext.Provider value={[cartItems, setCart]}>
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export { CartProvider, CartContext}
