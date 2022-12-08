import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route} from "react-router-dom";
import { NavbarComponent } from './components';
import {Home,Sukses,Pesanan} from './pages/index.js'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent /> 
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sukses" element={<Sukses/>}/>
            <Route path="/Pesanan" element={<Pesanan/>}/>
          </Routes>
        </main>
      
      </BrowserRouter>
    )
  };
}

