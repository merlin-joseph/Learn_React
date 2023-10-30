import { render, screen, waitFor,act } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import DetailPage from '../components/DetailPage';
import { MemoryRouter} from 'react-router-dom'




const mockData = {
    id: 1,
    name : 'Test Name',
    Role :'sse',
    Description : 'Test description'
}


const name = "Merlin"
const Role = "SSE"
const Description = "desc1"


beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData)
    })
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });


test("Input field are clickable on edit button click", async () => {
    render(
        <MemoryRouter initialEntries={[{state:mockData}]}>
          <DetailPage />
        </MemoryRouter>
      )
      const btn =  await screen.findByRole('button', {name : 'Edit'});
      userEvent.click(btn);


     await waitFor(() => {
        expect(screen.getByText(/cancel/i)).toBeInTheDocument();
        expect(screen.getByLabelText('User Name')).toBeEnabled();
        expect(screen.getByLabelText('Role')).toBeEnabled();
        expect(screen.getByLabelText('Description')).toBeEnabled();
        expect(screen.getByRole('button', {name : 'Submit'})).toBeInTheDocument()

     })

})

test("fields disabled without location state",  () => {
    render(
<MemoryRouter initialEntries={[{state:{}}]}>
          <DetailPage />
        </MemoryRouter>      )
      expect(screen.getByLabelText('User Name')).toBeDisabled();
      expect(screen.getByLabelText('Role')).toBeDisabled();
      expect(screen.getByLabelText('Description')).toBeDisabled();

})

test("submission on form Edits", async () => {
    render(
        <MemoryRouter initialEntries={[{state:mockData}]}>
          <DetailPage />
        </MemoryRouter>
      )
    const btn =  await screen.findByRole('button', {name : 'Edit'});
    userEvent.click(btn);

    userEvent.type(screen.getByLabelText('User Name'), name)
    userEvent.type(screen.getByLabelText('Role'), Role)
    userEvent.type(screen.getByLabelText('Description'), Description)
  
    const Submitbtn =  await screen.findByRole('button', {name : 'Submit'});

    userEvent.click(Submitbtn);

    expect(screen.getByRole('button', {name : 'Submit'})).toBeEnabled();


})