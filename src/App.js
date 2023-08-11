import './App.css';
import { BrowserRouter,Route, Routes, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import ShowUser from './Components/ShowUser';
import NotFoundPage from './Components/NotFoundPage';
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross1} from 'react-icons/rx'
import { useState } from 'react';
import EditUser from './Components/editUser';
import Footer from './Components/Footer';

function App() {
  const [openPopUp,setOpenPopUp] = useState(false)
  
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
            <NavLink onClick={()=>setOpenPopUp(!openPopUp)} to="/show-contacts">Contacts</NavLink>
            <NavLink onClick={()=>setOpenPopUp(!openPopUp)} to="/add-contact">Add Contact</NavLink>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/show-contacts' element={<ShowUser/>}/>
          <Route path='/add-contact' element={<AddUser/>}/>
          <Route path='/edit-contact/:id' element={<EditUser/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
