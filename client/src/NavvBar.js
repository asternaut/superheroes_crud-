import React from 'react';
<<<<<<< HEAD
import {Link} from 'react-router';
import './index.css'

const NavvBar = (props) =>
  <div>
    <nav>
      <ul className="nav-flex">
        <li> <strong> Adopt Pup </strong> </li>
        <li> <Link to="/home"> Home </Link></li>
        <li> <Link to="/heroes"> Good Dogs </Link></li>
        <li> <Link to="#"> Bad Dogs </Link> </li>
        <li> <Link to="/heroes/post"> List A Pup </Link></li>
      </ul>
    </nav>
  </div>

export default NavvBar;
=======
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
>>>>>>> master
