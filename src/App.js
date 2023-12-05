import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Section from './components/content/Section'

export default function App() {
  return (
    <div>
        <Router>
              <Navbar/>
            <Routes>
                <Route path='/' element={<Section/>}/>
            </Routes>
        </Router>
    </div>
  )
}
