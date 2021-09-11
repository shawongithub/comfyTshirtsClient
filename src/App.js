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
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import { useState, createContext } from 'react';
import Cart from './components/Cart/Cart';
export const CartContext = createContext()
export const UserContext = createContext()

function App() {
  const [cart, setCart] = useState([])
  const [user, setUser] = useState({
    email: '',
    signIn: false
  })

  return (
    <UserContext.Provider value={[user, setUser]}>
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
              <ProtectedRoute path='/review'>
                <Cart></Cart>
              </ProtectedRoute>
              <Route path='/admin'>
                <Admin></Admin>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
            </Switch>

          </div>
        </Router>
      </CartContext.Provider >
    </UserContext.Provider>
  );
}

export default App;
