
import { CartContext } from '../Contexts/CartContext';
import { useContext } from 'react';
import useCartUpdates from '../Contexts/service'

export default function Cart(){

    const [cartItems, setCart] = useContext(CartContext);
    const {addToCart,removeFromCart} = useCartUpdates();

    function handleAdd(data){
        const [list] = addToCart(data);
        setCart(list);
    }
    function handleRemove(data){
        const [list] = removeFromCart(data);
        setCart(list);
    }


    return (
        <>
        {cartItems?.map(product =>(
        <div key={product.id} className='shadow-xl my-4 p-2 w-1/2 mx-auto bg-slate-300 flex justify-between'> 
            {product.name} {cartItems.length}
            <div>
            <button type="button" onClick={()=>{handleAdd(product)}} className="bg-gray-500 p-1 text-white m-1 w-5 font-bold">+</button>
            {product?.count}
            <button type="button" onClick={()=>{handleRemove(product)}}  className="bg-gray-500 text-white p-1 m-1 w-5  font-bold">-</button> 
            </div>
        </div>              
            ))}
        </>
    )
}