import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/Donate";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route path='/events' element={<Services />} />
          <Route path='/about-us' element={<Products />} />
          <Route path='/donate' element={<SignUp />} />
        </Routes>
      </Router>
    </>

  );

}

export default App;