import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

function Menu() {
  return (
    <div className='menu'>
      <Link to="/Home">Home</Link>
      <Link to="/Student">Student registration</Link> 
      <Link to="/Teacher">Teacher registration</Link>
    </div>
  );
}

export default Menu;
