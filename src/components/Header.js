import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="bg-cyan-900	p-5 absolute top-0 inset-x-0 text-white">
             <Link className='pl-16' to="/">Home</Link>

        </div>
    )
}