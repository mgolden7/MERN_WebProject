import React from 'react'
import { FaHome } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className='header'>
        <div className='navLinks1'>
          <Link to="/" className='headerHomeLink'>
            <FaHome className='homeIcon'/>
          </Link>
          <div className='profileDiv'>
            <Link to="/profile" className='headerProfileLink'>
              <CgProfile className='profileIcon'/>
            </Link>
            <p className='profileName'>(name)</p>
          </div>
        </div>
        <h1 className='title'>{props.title}</h1>
        <div className='navLinks2'>
          <Link to="/about" className='aboutLink'>
            <div className='about'>About</div>
          </Link>
          <Link to='/contact' className='contactLink'>
            <div className='contact'>Contact</div>
          </Link>
          
          
        </div>
    </div>
  )
}

export default Header