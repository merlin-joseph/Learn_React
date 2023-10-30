import './App.css';
import Page from './components/Page';
import EmployeeDetail from './components/DetailPage'
import Header from './components/Header';
import { Routes, Route } from "react-router-dom"
import { useState } from 'react';
import ProductList from './components/ProductList'
import Cart from './components/cart';
import {CartProvider} from './Contexts/CartContext'

function App() {

  const [list, setList] = useState([]);


  return (
    <>
    <CartProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/details/:id" element={<EmployeeDetail />} />
          <Route path="/add" element={<EmployeeDetail />}></Route>
          <Route path="/products" element= {<ProductList /> }/>
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </CartProvider>
    </>
  );
}

export default App;
