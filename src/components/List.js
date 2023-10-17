

import Employee from './ListRow'

export default function List({List, onSelect,selectedItem,handleDelete}){


    return(
        <div className='border-b-2 border-current-400 '>
            
            {List?.map(employee =>(
                <Employee handleSelection={onSelect}  selectedItem={selectedItem} handleDelete={handleDelete}
                 key={employee.id} item = {employee}></Employee>
            ))}
        </div>
    )
}