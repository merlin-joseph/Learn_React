
import { useState, useEffect } from 'react'
import Product from './Product';
import {  useCart } from '../Contexts/CartContext';


export default function ProductList(){

    
    
    const [productList, setProductList] = useState(null);
    // const [cartItems, setCart] = useContext(CartContext);
    // const {addToCart,removeFromCart} = useCartUpdates();
    const cart = useCart()

    

   useEffect(() => {
    fetch(`https://65291a4955b137ddc83e36e0.mockapi.io/api/Books`)
    .then(response => response.json())
    .then(json => {
      setProductList(json);
      })
    .catch(error => console.error(error));  
    }, []);



  
    return (
        <>
          <div className="flex w-full flex-wrap justify-center">
              {productList?.map(product =>(
                <Product 
                 key={product.id} item = {product} addToCart={cart.addToCart} removeFromCart={cart.removeFromCart}></Product>
              ))}
          </div>
        </>
    )
}