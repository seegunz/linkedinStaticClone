import React, { useEffect, useState } from 'react'
import './main.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Feed from './Feed';
import logo from './logo.png'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SyncIcon from '@mui/icons-material/Sync';
import SendIcon from '@mui/icons-material/Send';
import Reaction from './Reaction';

export default function Main() {
  const [colors, setColor] = useState(true)
  const [input, setInput] = useState('')
  const [post, setPost] = useState([])

  function colorChanged() {
    setColor(!colors)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (input.length !== 0){
    setPost(prev=>[...prev, input])}
    setInput('')
  }

  useEffect(()=>{
    const stored = localStorage.setItem("post-display", JSON.stringify(post))

  },[post])


  return (
    <div className='main'>

      <div className="main-section">
        <div className="profile-form">
          <img src={logo} className='feed-profile'/>
          <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Start a post' value={input} onChange={e=>setInput(e.target.value)}/>
              <button style={{display:'none'}}>submit</button>
          </form>
        </div>
        <div className='feeds'>
          <Feed Icon={InsertPhotoIcon} title='Media' color='#70b5f9' />
          <Feed Icon={EventNoteIcon} title='Events' color='#e7a33e'/>
          <Feed Icon={CalendarViewDayIcon} title='Write article' color='brown'/>
        </div>
      </div>

      {post.reverse().map((postMsg, i) => <div className='feeds-display' key={i}>
        <div className="feeds-container">
          <img src={logo} alt="" className='feed-profile'/>
          <div>
              <p><b>Emi Segun</b></p>
              <p>420,124 followers</p>
              <p>{Date()}</p>
              <br />
          </div>
        </div>
        <p className='post'>
          {postMsg}
        </p>

        <hr />
        <div className='feeds'>
          
          {colors ? 
          <Reaction Icon={ThumbUpOffAltIcon} title='like' colorChanged={colorChanged}/> : 
          <Reaction Icon={ThumbUpIcon} title='like' colorChanged={colorChanged} color='#0a66c2'/>}

          <Reaction Icon={InsertCommentIcon} title='comment' />
          <Reaction Icon={SyncIcon} title='repost' />
          <Reaction Icon={SendIcon} title='send' />
        </div>
      </div>)}

    </div>
  )
}
