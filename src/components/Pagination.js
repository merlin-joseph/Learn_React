export default function Pagination({totalPages,currentPage,handlePrevious, handleNext, navigateToSelectedPage}){
    return (
        <ul className="pt-3 flex">
            <button disabled={currentPage == 1} className={`paginateButton ${(currentPage == 1)? ' disabled' : ''}`}
             onClick={handlePrevious}>Previous</button>

            {Array(totalPages).fill().map((x,index) =>(          
                  <li key={index} className={`paginateButton ${(currentPage == index+1)? ' active' : ''}`}
                   onClick ={() => navigateToSelectedPage(index+1)} >{index+1}</li>
            )) }
            
            <button  disabled={currentPage == totalPages} 
            className={`paginateButton ${(currentPage == totalPages)? ' disabled' : ''}`} onClick={handleNext}>Next</button>
        </ul>
    )
}