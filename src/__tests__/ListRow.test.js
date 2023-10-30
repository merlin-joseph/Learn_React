import { render, screen } from '@testing-library/react'
import ListRow from '../components/ListRow';
import userEvent from '@testing-library/user-event';


const mockData = {
    id: 1,
    name : 'Test Name',
    Role :'sse',
    Description : 'Test description'
}
const mockHandleDelete = jest.fn();
const mockHandleSelection = jest.fn();


test("Delete handler invoked",  () => {
    render (<ListRow item={mockData} handleSelection={mockHandleSelection} selectedItem={mockData} handleDelete ={mockHandleDelete} />);
    const deleteButton = screen.getByRole('button', {name : 'Delete'});
    userEvent.click(deleteButton);
    expect(mockHandleDelete).toHaveBeenCalled();
})

test("selection handler invoked",  () => {
   const {container} = render (<ListRow item={mockData} handleSelection={mockHandleSelection} selectedItem={mockData} handleDelete ={mockHandleDelete} />);
   const element = container.firstChild
   userEvent.click(element);
    expect(mockHandleSelection).toHaveBeenCalled();
})


test("selected row styling succesfully", async () => {
    const {container} = render (<ListRow item={mockData} handleSelection={mockHandleSelection} selectedItem={mockData} handleDelete ={mockHandleDelete} />);
    expect(container.firstChild.classList.contains('bg-cyan-100')).toBe(true)
})

test("data renders succesfully", async () => {
    render (<ListRow item={mockData}  />);
    expect(screen.getByText(/test name/i)).toBeInTheDocument();
    expect(screen.getByText(/Test description/i)).toBeInTheDocument();
})

