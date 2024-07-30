import React from 'react'
import { Route, Routes, useLocation} from 'react-router-dom'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'
import NotFound from './NotFound'
import { AnimatePresence } from 'framer-motion'


const Pages=()=> {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>} />
        <Route path='/cuisine/:type' element={<Cuisine/>} />
        <Route path='/Searched/:search' element = {<Searched/>}/>
        <Route path='recipe/:name' element = {<Recipe/>}/>
        <Route path="*" element = {<NotFound/>}/>
      </Routes>
      </AnimatePresence>

  )
}

export default Pages
