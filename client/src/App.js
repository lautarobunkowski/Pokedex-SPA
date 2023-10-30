// ---------  HOOKS  ---------
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
// ---------  STYLES  ---------
import './App.css';
// ---------  COMPONENTS  ---------
import Landing from "./views/landing/Landing";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import Form from "./views/form/Form";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./views/notFound/NotFound";
import Search from "./views/Search/Search";
// ---------  REACT DOM  ---------
import {Routes, Route, useLocation} from 'react-router-dom'
// ---------  ACTIONS  ---------
import { getPokemonTypes, getAllPokemons } from "./redux/actions";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/"
// axios.defaults.baseURL = "https://pokedex-spa-production.up.railway.app/"

function App() {
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getPokemonTypes())
  },[dispatch])
  return (
    <div className="App">
      <div className="Background"/>
      {location !== "/" && <Navbar/>}
      <Routes>
        <Route path='/'element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/detail/:idPokemon' element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
