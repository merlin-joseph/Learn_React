import { render, screen,waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import Cart from '../components/cart';
import {CartProvider,useCart,CartContext} from '../Contexts/CartContext'


const cart = {
    totalCount:0,
    cartItems : [
        {
            id:1,
            name : 'item 1',
            count : 5

        },
        {
            id:2,
            name : 'item 2',
            count : 0

        }
    ]

}
   

test("Cart rendered successfully",  async() => {
   await render (<CartProvider initialState = {cart}  ><Cart  /></CartProvider>);
    expect(screen.getByText(/item 1/i)).toBeInTheDocument();
})




test("Cart rendered successfully",  async() => {
    await render (<CartProvider initialState = {cart}  ><Cart  /></CartProvider>);

        
    const Submitbtn =  await screen.getByTestId(1);
    console.log(Submitbtn, 'stm')

    userEvent.click(Submitbtn);
    await waitFor(() => {

     expect(screen.getByText(/6/i)).toBeInTheDocument();

    });
 })
 

