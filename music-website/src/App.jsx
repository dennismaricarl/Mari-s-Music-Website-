import { React, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Bio from './components/Bio';
import Shows from './components/Shows';
import NavBar from './components/NavBar';
import Videos from './components/Videos';
import Gallery from './components/Gallery';
import Releases from './components/Releases'
import './App.css';
import './index.css'

function App() {
  const cursor = useRef(null)
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  }

  return (

    <div
      className='app'
      onMouseMove={changePosition}>
      <div className='cursor-style' ref={cursor}></div>
      <NavBar />


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/bio' element={<Bio />}></Route>
        <Route path='/shows' element={<Shows />}></Route>
        <Route path='/videos' element={<Videos />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/releases' element={<Releases />}></Route>
      </Routes>
    </div>
  );
}

export default App;
