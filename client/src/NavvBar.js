import React from 'react';
import { Link } from 'react-router';

const NavvBar = () =>
  <div>
    <nav>
      <ul className="nav-flex">
        <Link to="/home"> Home </Link>
        <Link to="/heroes"> Heroes </Link>
        <Link to="/heroes/post"> Post </Link>
      </ul>
    </nav>
  </div>
