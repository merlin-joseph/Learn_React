import App from '../App';
import {BrowserRouter} from 'react-router-dom'
import { render, screen, waitFor,act } from '@testing-library/react'
import userEvent from '@testing-library/user-event';


test('full app rendering/navigating', async () => {
    render(<App />, {wrapper: BrowserRouter})

    expect(screen.getByText(/cart/i)).toBeInTheDocument()

    act(() => { userEvent.click(screen.getByText(/cart/i)); });

    await waitFor(() => {


    expect(screen.getByText(/cart page/i)).toBeInTheDocument()

    })
})
