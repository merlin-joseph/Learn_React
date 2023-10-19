import List from "./List";
import Details from './Details'
import Pagination  from "./Pagination";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


export default function Page(){

    const pageLimit = 10;
    const totalListCount = 17

    const totalPages = Math.ceil(totalListCount/pageLimit);
    
    const [employeeList, setEmployeeList] = useState(null);
    const [selectedItem, setSelectedItem] =useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState('desc');
    const navigate = useNavigate()


   useEffect(() => {
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
      navigate(`/details/${employee?.id}`, {state: employee})
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
      let newList = [...employeeList]
      newList.forEach(item => {
          if(item.id == data?.id){
          return   item.Description = description
          }
      })
      setEmployeeList(newList)
    }
    
    function handleDelete(id){
      let newList = [...employeeList]
      let updatedList = newList.filter(item => {
        return   item?.id != id
      })
      setEmployeeList(updatedList)
    }

   function handleUserAdd(){
      navigate('/add')
    }

    return(
        <>
          <div className="flex">
              <div className="w-2/3 pr-10">

                <div className="flex justify-between my-3">
                  <button type="button" onClick={handleUserAdd} className="bg-sky-400 text-white px-5 h-12">Add</button>
                  <div className="flex">
                  <select className="mr-4" name="order" value={sortOrder} onChange={(e)=>handleSortOrder(e.target.value)}>
                      <option value="asc">asc</option>
                      <option value="desc">desc</option>
                  </select>

                  <Pagination {...{totalPages,currentPage,handleNext,handlePrevious,navigateToSelectedPage}} />
                  </div>
                </div>

                { employeeList? <List List={employeeList} onSelect ={handleSelection} handleDelete={handleDelete} selectedItem={selectedItem}
                ></List> : 'Loading..' }

              </div>

              <div className="w-1/3">
              { employeeList? <Details  key={selectedItem?.id}  handleDetailSubmit= {handleDetailSubmit} data = {selectedItem}></Details> : ''}
              </div>
          </div>
        </>
    )
}