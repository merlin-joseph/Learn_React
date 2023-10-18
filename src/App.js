import './App.css';
import Page from './components/Page';
import EmployeeDetail from './components/DetailPage'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { ListContext } from './EmployeeContext';
import { useState } from 'react';

function App() {

  const [text, setText] = useState("");

  return (
    <BrowserRouter>
       <Routes>
       <Route path="/" element={<ListContext.Provider value={{ text, setText }}>
<Page /> </ListContext.Provider>} />
       <Route path="/details/:id" element={<ListContext.Provider value={{ text, setText }}><EmployeeDetail /></ListContext.Provider>} />


    </Routes>
    </BrowserRouter>
  );
}

export default App;
