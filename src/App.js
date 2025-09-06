import './App.css';
import { useEffect, useRef, useState, useContext } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';



function App() {



  return (
        //Declare Routes
        <div className="App">
            <Routes>
              <Route path ='/' element = {
                  <Home/>
              }/>
              <Route path = '/Contact' element = {
                <Contact/>
              }/>
              <Route path= '/About' element = {
                <About/>
              }/>
            </Routes>
        </div>
  );
}

export default App;
