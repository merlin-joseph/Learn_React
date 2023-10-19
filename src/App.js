import './App.css';
import Page from './components/Page';
import EmployeeDetail from './components/DetailPage'
import Header from './components/Header';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { ListContext } from './EmployeeContext';
import { useState } from 'react';

function App() {

  const [list, setList] = useState([]);

  return (
    <>
    <BrowserRouter>
    <Header/>

       <Routes>
       <Route path="/" element={<Page />} />
       <Route path="/details/:id" element={<ListContext.Provider value={{ list, setList }}><EmployeeDetail /></ListContext.Provider>} />
      <Route path="/add" element={<EmployeeDetail />}></Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
