import React from 'react'
import { MdCopyright } from 'react-icons/md';
import { BiUpArrowAlt } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerContent'>
            <p className='copyrightText'>Copyright</p>
            <MdCopyright className='copyrightLogo'/> 
            <p className='copyrightDate'>{new Date().getFullYear()}</p>
        </div>
        <div className='backToTop'>
            <p className='backToTopText'>Back to top</p>
            <BiUpArrowAlt className='upArrow'/>
        </div>
    </div>
  )
}

export default Footer