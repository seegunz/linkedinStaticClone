import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import logo from './logo.png'
import Icons from './Icons';
import HouseIcon from '@mui/icons-material/House';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import MessageIcon from '@mui/icons-material/Message'
import NotificationsIcon from '@mui/icons-material/Notifications';

function Navbar() {
  return (
    <header className='navbar'>
        <div className='search'>
            <img src={logo} alt="" width={40} height={40}/>
            <div className='navbar-input'>
                <SearchIcon className='searchicon'/>
                <input type="text" placeholder='Search' />
            </div>
            <div className='hidden-search'>
                <SearchIcon className='searchicon'/>
                <p className='media-search'>Search</p>
            </div>
        </div>
        <div className='icons-row'>
            <Icons Icon={HouseIcon} title='Home'/>
            <Icons Icon={SupervisorAccountIcon} title='My Network'/>
            <Icons Icon={BusinessCenterIcon} title='Jobs'/>
            <Icons Icon={MessageIcon} title='Messaging'/>
            <Icons Icon={NotificationsIcon} title='Notifications'/>
            <Icons avatar={logo} title='Me'/>
        </div>
      
    </header>
  )
}

export default Navbar
