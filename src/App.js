import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Events from "./components/pages/Events";
import AboutUs from "./components/pages/AboutUs";
import Donate from "./components/pages/Donate";


function App() {

  useEffect(() => {
    //Change title on tab
    document.title = "Tiaki Taonga Trust";

    //Change favicon
    const link = document.querySelector("link[rel*='apple-touch-icon]") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/logo.png';
    document.getElementsByTagName('head')[0].appendChild(link);

  }, []);

  return (
    <>
      <Router>
        <Navbar />


        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/donate' element={<Donate />} />
        </Routes>
      </Router>
    </>
        //Route path set on Navbar component
  );

}

export default App;