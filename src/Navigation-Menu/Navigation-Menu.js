// Navigation Menu
import React from "react";
import { NavLink } from "react-router-dom";

function NavigationMenu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationMenu