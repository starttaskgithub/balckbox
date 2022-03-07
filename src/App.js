import react from 'react';
import './App.css';
import Navbar from './component/Navbar';

 import {BrowserRouter, Router , Route , Switch , Link, Routes } 
 from "react-router-dom"
import Products from './component/pages/Products';
import Services from './component/pages/Services';
import Home from './component/pages/Home';
import SignUp from './component/pages/Signup';
import LogIn from './component/pages/LogIn';


function App() {
  return (
    <div className="App">
   <BrowserRouter>

   <Navbar /> 
   <switch>
   <Routes>
   <Route path='/' exact element={<Home />}/>
   <Route path='/products' element={<Products />} />   
   <Route path='/services' element={<Services />} />   
   <Route path='/signup' element={<SignUp />} />   

   <Route path='/LogIn' element={<LogIn />} />   

  
      </Routes>
   </switch>
   </BrowserRouter>
    
    </div>
  );
}

export default App;
