import React from 'react'

const SideBar = () => {
  return (
    <div className='sideBar'>
        <h3 className='sideBarTitle'>Functionality</h3>
        <div className='buttons'>
            <button className='sideBarButton' id='registration'>Registration (create account)</button>
            <button className='sideBarButton' id='authentication'>Authentication (log in)</button>
            <button className='sideBarButton' id='manageDB'>Manage Database (members list)</button>
            <button className='sideBarButton' id='sellItem'>Sell an Item</button>
            <button className='sideBarButton' id='createAList'>Create A List</button>
            <button className='sideBarButton' id='changeTheme'>Change Theme</button>
        </div>
        
    </div>
    
  )
}

export default SideBar