import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Admin from './components/Admin/Admin';
import { useState, createContext } from 'react';
export const CartContext = createContext()

function App() {
  const [cart, setCart] = useState([])
  return (
    <CartContext.Provider value={[cart, setCart]} >
      <Router>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route path='/shop'>
              <Home></Home>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/admin'>
              <Admin></Admin>
            </Route>
          </Switch>

        </div>
      </Router>
    </CartContext.Provider >


  );
}

export default App;
