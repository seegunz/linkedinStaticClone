import React from 'react'
import './leftnav.css'
import pic from './logo.png'

export default function leftNav() {
  return (
    <div className='leftnav'>
        <div className="left-profile">
          <div className="cover-photo"></div>
            <img src={pic} alt="" className='pic'/>
            <p className='left-profile-name'>Emi Segun</p>
            <p className='left-profile-skills'>HTML, CSS, JAVASCRIPT, REACT JS</p>
            <hr />
            <div className='media-connections'>
              <p className='connections'>Connections <span>3</span></p>
              <p className='network-growth'>Grow your network</p>
              <hr />
              <p className='my-items'>My items</p>
            </div>
        </div>
        <div className="left-profile-event">
          <p>Groups</p>
          <p className='connections'>Events <span style={{fontSize:'19px', fontWeight:'bold', color:'black'}}>+</span></p>
          <p>Followed Hashtags</p>
          <hr />
          <h5>Discover more</h5>

        </div>
    </div>
  )
}
