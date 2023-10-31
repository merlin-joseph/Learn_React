import { render, screen, waitFor,act } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Details from '../components/Details';
import { MemoryRouter} from 'react-router-dom'




const mockData = {
    id: 1,
    name : 'Test Name',
    Role :'sse',
    Description : 'Test description',
    avatar : 'test.png'
}

handleDetailSubmit = jest.fn()


test("Input field are clickable on edit button click", async () => {
    render(<Details data={mockData}  />)
      const btn =  await screen.findByRole('button', {name : 'Edit'});
      userEvent.click(btn);
     await waitFor(() => {
        const inputElement = screen.getByRole('textbox')
        expect(inputElement).toBeInTheDocument()
     })

})

test("data rendered successfully",  () => {
    render(<Details data={mockData}   />)

    expect(screen.getByText(/Test description/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Name/i)).toBeInTheDocument();
})


