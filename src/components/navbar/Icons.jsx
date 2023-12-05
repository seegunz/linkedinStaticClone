import React from 'react'



export default function Icons({Icon, title, avatar}) {
  return (
    <div className='icons-label'>
        {Icon && <Icon />}
        {avatar && <img src={avatar} className='avatar'/>}
        <p className='icons-title'>{title}</p>
    </div>
  )
}
