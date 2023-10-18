import List from "./List";
import Details from './Details'
import Pagination  from "./Pagination";
import { useState, useEffect,useContext } from 'react'
import { useNavigate } from "react-router-dom";
import {ListContext} from '../EmployeeContext'


export default function Page(){

    const pageLimit = 10;
    const totalListCount = 30

    const totalPages = Math.ceil(totalListCount/pageLimit);
    
    const [employeeList, setEmployeeList] = useState(null);
    const [selectedItem, setSelectedItem] =useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState('desc');
    const navigate = useNavigate()

    const { text, setText } = useContext(ListContext);



      
   useEffect(() => {
    console.log('changed')
    fetch(`https://65291a4955b137ddc83e36e0.mockapi.io/api/Employees?page=${currentPage}&limit=10&order=${sortOrder}&orderby=name`)
    .then(response => response.json())
    .then(json => {
      setEmployeeList(json);
      setSelectedItem(json[0]);
      })
    .catch(error => console.error(error));  
    }, [currentPage,sortOrder]);


      function handleSelection(employee){
        setSelectedItem(employee);
        navigate(`/details/${employee.id}`, {state: employee})
      }

      function handlePrevious(){
        if(currentPage != 1)
            setCurrentPage(currentPage - 1)
      }

      function handleNext(){
        if(currentPage < totalPages)
            setCurrentPage(currentPage + 1)
      }

      function navigateToSelectedPage(index){
        setCurrentPage(index)
      }

      function handleSortOrder(value){
        setSortOrder(value)
      }

      function handleDetailSubmit(data, description){
        let list = [...employeeList]
        list.forEach(item => {
            if(item.id == data.id){
           return   item.Description = description
            }
        })
        setEmployeeList(list)
      }
      
      function handleDelete(id){
        let list = [...employeeList]
        let updatedList = list.filter(item => {
         return   item.id != id
       })
        setEmployeeList(updatedList)
      }

    return(
        <>
          <div className="flex">
            {text}test
              <div className="w-2/3 pr-10">

                <div className="flex justify-between my-3">
                  <select name="order" value={sortOrder} onChange={(e)=>handleSortOrder(e.target.value)}>
                      <option value="asc">asc</option>
                      <option value="desc">desc</option>
                  </select>
                <Pagination {...{totalPages,currentPage,handleNext,handlePrevious,navigateToSelectedPage}} />

                </div>

                { employeeList? <List List={employeeList} onSelect ={handleSelection} handleDelete={handleDelete} selectedItem={selectedItem}
                ></List> : 'Loading..' }

              </div>

              <div className="w-1/3">
              { employeeList? <Details  key={selectedItem.id}  handleDetailSubmit= {handleDetailSubmit} data = {selectedItem}></Details> : ''}
              </div>
          </div>
        </>
    )
}