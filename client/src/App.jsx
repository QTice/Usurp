

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from './view/Main';
import Nav from './componets/Nav';
import Update from './componets/Update';
import Create from './componets/Create';
import Content from './componets/Content'
import { useState } from 'react';

function App() {
  const [person ,setPerson] = useState({})
  return (
    <div className="App">
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main person={person} setPerson={setPerson}/>}/>
        <Route path='/person/creation' element={<Create/>}/>
        <Route path='/person/:id' element={<Update/>}/>
        <Route path='/person/Content/:id' element={<Content person={person} setPerson={setPerson}/>}/>        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
