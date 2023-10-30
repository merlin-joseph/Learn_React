import { createContext, useContext } from 'react';
import { useState } from 'react';

const CartContext = createContext([]);


const  CartProvider = (props) => {
   const initialState = props.initialState || {totalCount : 0,cartItems : []}
    const [cartDetails, setCart] =useState(initialState);
        
    const addToCart =(data) => {
      let list = [];
      let x= cartDetails.cartItems.findIndex (item => {
        return item.id == data.id
      })
      if(x > -1){
        list = [...cartDetails.cartItems]
        list[x].count += 1;
        console.log(list)
      } else {
        list = [...cartDetails.cartItems, {...data,count: 1 }]
      }

      let updatedCart = {totalCount : cartDetails.totalCount +1, cartItems: [...list] }

      setCart(updatedCart)
    }



    const  removeFromCart = (data)=>{
      let list = [...cartDetails?.cartItems]
      let updatedItem = {}

      let x= list.find (item => {
        return item.id == data.id
      })
      if(x && x.count ==1 ){
          x.count = x.count - 1;
          updatedItem = {...x};

          let newList = [...list]
          newList = newList.filter(item => item.id != data.id)
          setCart({totalCount : cartDetails.totalCount -1, cartItems: [...newList] })
          console.log({totalCount : cartDetails.totalCount -1, cartItems: [...newList] })


      }
      if(x && x.count > 1){
        x.count = x.count - 1;
        setCart({totalCount : cartDetails.totalCount -1, cartItems: [...list] })
        console.log({totalCount : cartDetails.totalCount -1, cartItems: [...list] })

      } 

    }

    const getItemCount = (id)=>{
      let list = [...cartDetails?.cartItems]
      let x= list.find (item => item.id == id)
      return x?.count || 0
    }



  return (
      <CartContext.Provider value={{cartDetails, addToCart,removeFromCart, getItemCount}}>
        {props.children}
      </CartContext.Provider>
    );
  };

  const useCart = () =>{
    const cart = useContext(CartContext)
    if(!cart){
      throw Error('Error carcontext not found')
    }
    return cart
  }


  
  export { CartProvider, useCart}
