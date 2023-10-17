

export default function ListRow({item, handleSelection,selectedItem,handleDelete}){

    return (
        <div className={`flex justify-between py-3 px-2 border-2 border-current-400 border-b-0 ${ (selectedItem.id == item.id) ? ' bg-cyan-100' : ''}`} 
        onClick ={()=> handleSelection(item)}>
            <p className="w-40 pr-3">{item?.name}</p>
            <p className="w-40 pr-3">{item?.Role}</p>
            <p className="w-48 pr-3">{item?.Description}</p>
            <button className="text-red-500 font-bold" onClick={()=>handleDelete(item?.id)} >Delete</button>
        </div>
    )

}