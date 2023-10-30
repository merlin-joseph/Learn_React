import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import Cart from '../components/cart';
import {CartProvider,useCart,CartContext} from '../Contexts/CartContext'


const cart = {
    totalCount:0,
    cartItems : [
        {
            id:1,
            name : 'item 1',
            count : 0

        },
        {
            id:2,
            name : 'item 2',
            count : 0

        }
    ]

}
   

test("test initial",  async() => {
   await render (<CartProvider initialState = {cart}  ><Cart  /></CartProvider>);
    expect(screen.getByText(/item 1/i)).toBeInTheDocument();
})