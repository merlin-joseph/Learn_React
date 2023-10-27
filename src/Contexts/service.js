
import { CartContext } from '../Contexts/CartContext';
import { useContext } from 'react';



export default function useCartUpdates() {

    const [cartItems] = useContext(CartContext)

    const addToCart =(data) => {
        let list = [...cartItems]
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
        let list = [...cartItems]
        let updatedItem = {}
  
        let x= list.find (item => {
          return item.id == data.id
        })
        if(x){
          x.count = x.count - 1;
          updatedItem = {...x}
        } 

       return [list,updatedItem]

  
      }
  

    return {addToCart, removeFromCart}
}