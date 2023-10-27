import './App.css';
import Page from './components/Page';
import EmployeeDetail from './components/DetailPage'
import Header from './components/Header';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { ListContext } from './EmployeeContext';
import { useState } from 'react';
import ProductList from './components/ProductList'
import Cart from './components/cart';
import {CartProvider} from './Contexts/CartContext'

function App() {

  const [list, setList] = useState([]);


  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/details/:id" element={<ListContext.Provider value={{ list, setList }}><EmployeeDetail /></ListContext.Provider>} />
          <Route path="/add" element={<EmployeeDetail />}></Route>
          <Route path="/products" element= {<ProductList /> }/>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
