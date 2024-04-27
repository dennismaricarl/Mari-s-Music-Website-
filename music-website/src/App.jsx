import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Bio from './components/Bio';
import About from './components/About';
import Shows from './components/Shows';
import Music from './components/Music'
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div >
      <NavBar/>
      <Routes>
        <Route path='/' element= {<Home/>}></Route>
        <Route path='/bio' element= {<Bio/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/shows' element={<Shows/>}></Route>
        <Route path='/music' element={<Music/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
