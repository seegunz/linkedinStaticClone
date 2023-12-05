import React from 'react'

export default function Reaction({Icon, title, colorChanged, color}) {
  return (
    <div>
      <div className='input-options' onClick={colorChanged} style={{color}}>
        <Icon />
        <p>{title}</p>
    </div>
    </div>
  )
}
