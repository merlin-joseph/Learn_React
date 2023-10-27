

import {  useCart } from '../Contexts/CartContext';


export default function useCartUpdates() {

    const cart = useCart()

    const addToCart =(data) => {
        let list = [...cart.cartItems]
        let updatedItem = {}
  
        let x= list.find (item => {
          return item.id == data.id
        })
        if(x){
          x.count = x.count + 1;
          updatedItem = {...x}
        } else {
          let y = {...data}
          y.count = 1;
          updatedItem = {...y}
  
          list = [...list, y]
        }
       
  
       return [list,updatedItem]
    }

    const  removeFromCart = (data)=>{
        let list = [...cart.cartItems]
        let updatedItem = {}
  
        let x= list.find (item => {
          return item.id == data.id
        })
        if(x && x.count ==1 ){
            x.count = x.count - 1;
            updatedItem = {...x};

            let newList = [...list]
            newList = newList.filter(item => item.id != data.id)
            return [newList,updatedItem]


        }
        if(x && x.count > 1){
          x.count = x.count - 1;
          updatedItem = {...x};
          return [list,updatedItem]


        } 


  
      }
  

    return {addToCart, removeFromCart}
}