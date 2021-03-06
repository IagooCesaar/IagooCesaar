import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header';
import { Contact } from './pages/Contact';
import Home from './pages/Home';


const Routes: React.FC = () => {
  return (
    <BrowserRouter basename="IagooCesaar" >
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export { Routes }