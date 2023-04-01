import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='sideBar'>
        <h3 className='sideBarTitle'>Functionality</h3>
        <div className='buttons'>
            <Link to="/registration" className='sideBarButton' id='registration'>Registration (create account)</Link>
            <Link to="/authentication" className='sideBarButton' id='authentication'>Authentication (log in)</Link>
            <Link to="/managedb" className='sideBarButton' id='manageDB'>Manage Database (members list)</Link>
            <Link to="/sellitem" className='sideBarButton' id='sellItem'>Sell an Item</Link>
            <Link to="/createlist" className='sideBarButton' id='createAList'>Create A List</Link>
            <Link to="/newsletter" className='sideBarButton' id='sendNewsletter'>Send Newsletter</Link>
            <Link to="/changetheme" className='sideBarButton' id='changeTheme'>Change Theme</Link>
        </div>
        
    </div>
    
  )
}

export default SideBar