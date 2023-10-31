
import { useState } from "react";
export default function Details({data,handleDetailSubmit}){

    const [description, setDescription] = useState('')
    const [isDetailEditable, setAsEditable] = useState(false)
    
     function submitHandler(){
        handleDetailSubmit(data, description);
        setAsEditable(false)
      }
      function handleEdit(){
            setAsEditable(true)
      }

    return (
        <div className="text-center mt-5">
            <img src={data?.avatar} className="pb-3 rounded-full mx-auto" />
            <p className="font-semibold text-xl pb-2">{data?.name}</p>
            <p className="pb-2"><b>Role:</b> {data?.Role}</p>
           
            {!isDetailEditable ? ( <span><b>Bio:</b> {data?.Description}</span>) :
            ( <input type="text" aria-label="Description" defaultValue={data?.Description} onChange ={(e) => setDescription(e.target.value)} />  )
            }

            {!isDetailEditable ? ( <button className="w-16 pr-3 text-blue-500" type="button" onClick={handleEdit} >Edit</button>) :
             (<button type="button" className="font-medium text-green-500 cursor-pointer pl-1" onClick={submitHandler}>Submit</button>)}
           
        </div>
     )
}