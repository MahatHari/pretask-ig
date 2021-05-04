import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  // class .show => display:block
  const show = menu ? 'show' : '';
  return (
    <header>
      <nav
        className='navbar navbar-expand-lg navbar-light text-uppercase fixed-top'
        style={{ backgroundColor: '#c9f2ef' }}
      >
        <NavLink to='/'>Pre Task</NavLink>

        <button className='navbar-toggler' type='button' onClick={toggleMenu}>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={'collapse navbar-collapse ' + show}>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item nav-link'>
              <NavLink to='/' onClick={toggleMenu}>
                Home
              </NavLink>
            </li>

            <li className='nav-item nav-link'>
              <NavLink to='/users' onClick={toggleMenu}>
                User List
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
