
import { useCart } from '../Contexts/CartContext';


export default function Cart(){

    const cart = useCart()


    return (
        <>
        Cart page
        {cart?.cartDetails?.cartItems?.map(product =>(
        <div key={product.id} className='shadow-xl my-4 p-2 w-1/2 mx-auto bg-slate-300 flex justify-between'> 
            {product.name} 
            <div>
            <button type="button" data-testid={product.id} role="addToCart" onClick={()=>{cart.addToCart(product);}} className="bg-gray-500 p-1 text-white m-1 w-5 font-bold">+</button>
            {product?.count}
            <button type="button" onClick={()=>{cart.removeFromCart(product)}}  className="bg-gray-500 text-white p-1 m-1 w-5  font-bold">-</button> 
            </div>
        </div>              
            ))}
        </>
    )
}