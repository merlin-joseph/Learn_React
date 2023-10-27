import { Link } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext';

export default function Header() {
    const cart = useCart();



   

    return (
        <div className="bg-cyan-900	p-5 absolute top-0 inset-x-0 text-white">
             <Link className='pl-16' to="/">Home</Link>
             <Link className='pl-16' to="/products">Products</Link>
             <Link className='pl-16 mr-4 relative' to="/cart"> Cart <span className='absolute -top-1.5 h-5 w-5 text-green-600 text-center rounded-full bg-slate-100'>{cart?.cartDetails?.totalCount}</span></Link>
            


        </div>
    )
}