import React from 'react';
import { NavLink } from 'react-router-dom'

import './Menu.scss';

export const Menu = () => (
  <div className="menu__container">
    <NavLink className="menu__link" activeClassName="menu-link_active" to="/Exercise1">Exercise 1 and 3</NavLink>
    <NavLink className="menu__link" activeClassName="menu-link_active" to="/Exercise2">Exercise 2</NavLink>
    <NavLink className="menu__link" activeClassName="menu-link_active" to="/Exercise4">Exercise 4</NavLink>
  </div>
);
