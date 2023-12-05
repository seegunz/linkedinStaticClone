import React from 'react'
import LeftNav from './left/LeftNav'
import Main from './main/Main'
import RightNav from './right/RightNav'
import './section.css'

export default function Section() {
  return (
    <div  className='section'>
      <LeftNav />
      <Main />
      <RightNav />
    </div>
  )
}
