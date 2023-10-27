
import { useState, useEffect } from 'react'
import Product from './Product';
import { CartContext } from '../Contexts/CartContext';
import { useContext } from 'react';
import useCartUpdates from '../Contexts/service'

export default function ProductList(){

    
    
    const [productList, setProductList] = useState(null);
    const [cartItems, setCart] = useContext(CartContext);
    const {addToCart,removeFromCart} = useCartUpdates();

    

   useEffect(() => {
    fetch(`https://65291a4955b137ddc83e36e0.mockapi.io/api/Books`)
    .then(response => response.json())
    .then(json => {
      updateProductList(json)
      })
    .catch(error => console.error(error));  
    }, []);


    function updateProductList(data){
      data.map(item =>{
        item.count = 0
      });
      setProductList(data);

    }

  

  function handleCartAdd(data){
      const [list, updatedItem] = addToCart(data);
      let updateProductList = [...productList]
      let index = updateProductList.findIndex(e => e.id == data.id)
      updateProductList[index] = {...updatedItem};
      setCart(list);
      setProductList(updateProductList)
  }

  function handleCartRemove(data){
    const [list, updatedItem] = removeFromCart(data);
    let updateProductList = [...productList]
    let index = updateProductList.findIndex(e => e.id == data.id)
    updateProductList[index] = {...updatedItem};
    setCart(list);
    setProductList(updateProductList)

  }


    return (
        <>
          <div className="flex w-full flex-wrap justify-center">
              {productList?.map(product =>(
                <Product 
                 key={product.id} item = {product} addToCart={handleCartAdd} removeFromCart={handleCartRemove}></Product>
              ))}
          </div>
        </>
    )
}