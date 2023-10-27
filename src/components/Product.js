
export default function Product({item, addToCart, removeFromCart}){
    return(
 <div className="shadow-xl bg-white p-4 m-2 w-1/6">
            <p className="pb-2 h-12 leading-none">{item.name}</p>
            <img src= {item.thumbnail} />
            <div className="flex justify-end mt-2 items-center">
                <button type="button" onClick={()=>{addToCart(item)}} className="bg-slate-300 p-1 m-1 w-5 font-bold">+</button>
                {item?.count}
                <button type="button" onClick={()=>{removeFromCart(item)}} className="bg-slate-300 p-1 m-1 w-5  font-bold">-</button>
            </div>
        </div>
       
    )
}