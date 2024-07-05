import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'


const Pages=()=> {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cuisine/:type' element={<Cuisine/>} />
        <Route path='/Searched/:search' element = {<Searched/>}/>
      </Routes>

      
    </div>
  )
}

export default Pages
