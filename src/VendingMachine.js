import React from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import './VendingMachine.css'

import Soda from './Soda'
import Chips from './Chips'
import Sardines from './Sardines'

function VendingMachine() {
    
    return(
        <BrowserRouter>
            <nav className="NavBar">
                <NavLink to="/soda">Soda</NavLink>
                <NavLink to="/chips">Chips</NavLink>
                <NavLink to="/sardines">Fresh Sardines</NavLink>
            </nav>
            
            <Route exact path="/soda">
                <Soda />
            </Route>
            <Route exact path="/chips">
                <Chips />
            </Route>
            <Route exact path="/sardines">
                <Sardines />
            </Route>
      </BrowserRouter>
    )
}

export default VendingMachine;