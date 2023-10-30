import { render, screen } from '@testing-library/react'
import Product from '../components/Product';
import userEvent from '@testing-library/user-event';


const mockData = {
    id: 1,
    name : 'New Name',
    thumbnail : 'https://loremflickr.com/640/480/abstract'
}
const mockAddTocart = jest.fn();
const mockremoveFromCart = jest.fn();
const count = 2;

test("Add to cart handler invoked",  () => {
    render (<Product item={mockData}  count = {count} addToCart={mockAddTocart}  removeFromCart ={mockremoveFromCart} />);
    const addButton = screen.getByRole('button', {name : '+'});
    userEvent.click(addButton);
    expect(mockAddTocart).toHaveBeenCalled();
    expect (mockAddTocart).toHaveBeenCalledWith(mockData);

})

test("Remove from cart handler invoked",  () => {
    render (<Product item={mockData}  count = {count} addToCart={mockAddTocart}  removeFromCart ={mockremoveFromCart} />);
    const remove = screen.getByRole('button', {name : '-'});
   userEvent.click(remove);
    expect(mockremoveFromCart).toHaveBeenCalled();
    expect (mockremoveFromCart).toHaveBeenCalledWith(mockData);
})


test("data renders succesfully", async () => {
    render (<Product item={mockData}  count = {count}  />);
    expect(screen.getByText(/new name/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
})

