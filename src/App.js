import './App.css';
import { BrowserRouter,Route, Routes, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import ShowUser from './Components/ShowUser';
import NotFoundPage from './Components/NotFoundPage';
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross1} from 'react-icons/rx'
import { useState } from 'react';

function App() {
  const [openPopUp,setOpenPopUp] = useState(false)
  // const url = "https://crud-app-yfc0.onrender.com/api/users"
  
  return (
    <div className="App">
      <BrowserRouter>
        <nav className='navbar'>
          <div>
            <h2>Contact Manager</h2>
          </div>
          <span>{openPopUp? 
            <RxCross1 onClick={()=>setOpenPopUp(!openPopUp)}/> : 
            <GiHamburgerMenu onClick={()=>setOpenPopUp(!openPopUp)}/>}
          </span>
          <div className={openPopUp?"open-popup":""}>
            <NavLink onClick={()=>setOpenPopUp(!openPopUp)} to="/">Home</NavLink>
            <NavLink onClick={()=>setOpenPopUp(!openPopUp)} to="/show-users">Contacts</NavLink>
            <NavLink onClick={()=>setOpenPopUp(!openPopUp)} to="/add-user">Add Contact</NavLink>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/show-users' element={<ShowUser/>}/>
          <Route path='/add-user' element={<AddUser/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
