import React from 'react'
import './rightnav.css'
import logo from './logo.png'

function AddPeople({title, skills, job}) {
  return (
    <>
    <div className='add-people'>
        <div className='add-profile-pic'>
          <img src={logo} alt="" />
        </div>
        <div className='add-details'>
          <p className='name'>{title}</p>
          <p className='skills'>{skills}</p>
          <p className='job'>{job}</p>
          <div className='follow-btn'>
            <button>+ Follow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default function RightNav() {
  return (
    <div className='rightnav'>
      <div className="right-pane">
          <h4>Add to your feed</h4>
                <AddPeople title='John Ademoye' skills='software Engineer (React || Typescript) & technical Writer'/>
                <AddPeople title='Sultan A' skills='co-founder + Tech @ AltSchool Africa + TalentQL' />
                <AddPeople title='Stella Ladegbaye' skills='WOMEN TECHSTERS FELLOW CLASS OF (2024) ASPIRING SOFTWARE ENGINEER' />
              <p className='recommendations'>View all recommendations &rarr;</p>
      </div>
      
    </div>
  )
}
