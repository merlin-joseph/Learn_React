import { useParams,useLocation ,useNavigate} from 'react-router';
import {useRef, useState,useContext} from "react"
import { flushSync } from 'react-dom';
import {ListContext} from '../EmployeeContext'


export default function EmployeeDetail(){
    const params= useParams()
    const location = useLocation();
    const data = location?.state;
    const navigate = useNavigate()
    const inputRef = useRef(null)


    const { text, setText } = useContext(ListContext);

    const [isDetailEditable, setAsEditable] = useState(false)


    function submitHandler(e){
        console.log('clicked')
        e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());


    console.log(formJson, 'orm data')
    navigate('/')
    }

    function handleEdit(){

        flushSync(() => {
            setAsEditable(!isDetailEditable);
                 });
        
                 inputRef.current.focus()     
        console.log(inputRef);
        setText('update from details')
  }



    return (
        <>
    <p onClick={handleEdit}>{!isDetailEditable ? 'Edit' : 'Cancel'}</p>

 <div className="text-center mt-5">
            <img src={data?.avatar} className="pb-3 rounded-full mx-auto" />
            <form onSubmit={submitHandler} className='text-center'>
            <div className='formField mb-3 w-80 mx-auto'>
            <input ref={inputRef} disabled={!isDetailEditable}  className={`w-full px-3 py-2 rounded ${isDetailEditable ? 'border-slate-700' : 'border-slate-200'}`} type="text" name='name' defaultValue={data?.name} /> 

            </div>
            <div className='formField mb-3 w-80 mx-auto'>

            <input disabled={!isDetailEditable}  className={`w-full px-3 py-2 rounded ${isDetailEditable ? 'border-slate-700' : 'border-slate-200'}`}  type="text" name= 'role' defaultValue={data?.Role} /> 
            </div>
            <div className='formField mb-3 w-80 mx-auto'>

            <input disabled={!isDetailEditable}  className={`w-full px-3 py-2 rounded ${isDetailEditable ? 'border-slate-700' : 'border-slate-200'}`}  type="text" name='Description' defaultValue={data?.Description} /> 
            </div>
            {isDetailEditable?(           
                 <button type="submit" className="font-medium text-green-500 cursor-pointer pl-1" >Submit</button>) : '' }
            </form>
        </div>
     </>
    )
}