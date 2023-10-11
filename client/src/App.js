// ---------  HOOKS  ---------
// import { useState, useEffect } from 'react';
// import { useDispatch } from "react-redux";
// ---------  STYLES  ---------
import './App.css';
// ---------  COMPONENTS  ---------
import Background_page from "./components/background_page/Background_page";
import Landing from "./views/landing/Landing";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import Form from "./views/form/Form";
import Navbar from "./components/navbar/Navbar";
import About from "./views/about/About";
// ---------  REACT DOM  ---------
import {Routes, Route, useLocation} from 'react-router-dom'
// ---------  ACTIONS  ---------
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/"

function App() {
  const location = useLocation().pathname;

  return (
    <div className="App">
      <Background_page color={'yellow'}/>
      {location !== "/" && <Navbar/>}
      <Routes>
        <Route path='/'element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:idPokemon' element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
