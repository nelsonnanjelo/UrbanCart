import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Upload from './pages/Upload';
import Payment from './pages/Payment';

function App(){

  return(
     <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/upload">Upload Product</Link>
        <Link to="/payment">Pay Now</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/payment" element={<Payment/>}/>

      </Routes>
     
     </div>

  );

}
 export default App;