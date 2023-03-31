import React from 'react'
import { FaHome } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
  return (
    <div className='header'>
        <div className='navLinks1'>
          <FaHome className='homeIcon'/>
          <CgProfile className='profileIcon'/>
        </div>
        <h1 className='title'>WebDev Project</h1>
        <div className='navLinks2'>
          <div className='about'>About</div>
          <div className='contact'>Contact</div>
        </div>
    </div>
  )
}

export default Header