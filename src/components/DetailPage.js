import { useParams,useLocation ,useNavigate} from 'react-router';
import {useRef, useState, useEffect} from "react"
import { flushSync } from 'react-dom';


export default function EmployeeDetail(){
    const location = useLocation();
    const userData = location?.state;
    const navigate = useNavigate()
    const inputRef = useRef(null)


    useEffect(()=>{
        if(!userData){
            setAsEditable(true) 
        }
    })

    const [isDetailEditable, setAsEditable] = useState(false)


    function submitHandler(e){
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        userData ?  editUser(formJson) :  addNewuser(formJson)
    }

    function addNewuser(data){
        fetch(`https://65291a4955b137ddc83e36e0.mockapi.io/api/Employees`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(()=>{
            navigate('/')
        })
    }

    function editUser(data){
        fetch(`https://65291a4955b137ddc83e36e0.mockapi.io/api/Employees/${userData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
        }).then(response => response.json())
        .then(()=>{
            navigate('/')
        })
    }

    function handleEdit(){
        flushSync(() => { setAsEditable(!isDetailEditable)});
        inputRef.current.focus()     
    }



    return (
        <>
        {userData? (<button onClick={handleEdit}>{!isDetailEditable ? 'Edit' : 'Cancel'}</button>) : ''}
    
         <div className="text-center mt-5">
            <img src={userData?.avatar} className="pb-3 rounded-full mx-auto" />
            <form onSubmit={submitHandler} className='text-center' data-testid="form">
            <div className='formField mb-3 w-80 mx-auto text-left'>
                <label>User Name</label>
            <input aria-label='User Name' ref={inputRef} disabled={!isDetailEditable}  className={`w-full px-3 py-2 rounded ${isDetailEditable ? 'border-slate-700' : 'border-slate-200'}`} type="text" name='name' defaultValue={userData?.name} /> 

            </div>
            <div className='formField mb-3 w-80 mx-auto text-left'>
            <label>Role</label>

            <input aria-label='Role' disabled={!isDetailEditable}  className={`w-full px-3 py-2 rounded ${isDetailEditable ? 'border-slate-700' : 'border-slate-200'}`}  type="text" name= 'Role' defaultValue={userData?.Role} /> 
            </div>
            <div className='formField mb-3 w-80 mx-auto text-left'>
            <label>Description</label>

            <input aria-label='Description' disabled={!isDetailEditable}  className={`w-full px-3 py-2 rounded ${isDetailEditable ? 'border-slate-700' : 'border-slate-200'}`}  type="text" name='Description' defaultValue={userData?.Description} /> 
            </div>
            {isDetailEditable ?(           
                 <button type="submit" className="font-medium text-green-500 cursor-pointer pl-1" >Submit</button>) : '' }
            </form>
        </div>
     </>
    )
}