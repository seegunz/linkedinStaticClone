import React from 'react'
import './main.css'

export default function Feed({Icon, title, color}) {
  return (
    <div className='input-options'>
        <Icon style={{color}}/>
        <p >{title}</p>
    </div>
  )
}
