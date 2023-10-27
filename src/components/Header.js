import { Link } from 'react-router-dom';
import { CartContext } from '../Contexts/CartContext';
import { useContext } from 'react';

export default function Header() {
    const [cartItems, setCart] = useContext(CartContext);
    let totalItems = 0;
     totalItems =  cartItems.reduce( (acc, obj) => { return acc + obj.count; }, 0);



   

    return (
        <div className="bg-cyan-900	p-5 absolute top-0 inset-x-0 text-white">
             <Link className='pl-16' to="/">Home</Link>
             <Link className='pl-16' to="/products">Products</Link>
             <Link className='pl-16 mr-4 relative' to="/cart"> Cart <span className='absolute -top-1.5 h-5 w-5 text-green-600 text-center rounded-full bg-slate-100'>{totalItems}</span></Link>
            


        </div>
    )
}