import React from 'react'
import { Route, Routes } from 'react-router'
import Main from './Main'
import Hi from './Hi'
import Card from './Card'
import Scores from './Scores'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/hi' element={<Hi/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/scores' element={<Scores/>}/>
    </Routes>
  )
}

export default App
