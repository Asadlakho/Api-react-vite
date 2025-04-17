import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home,About} from '../pages'
import Navbar from '../component/Navbar'
const Navigator = () => {
    return (
        <Routes>
        <Route path="/" element={<><Navbar/><Home /></>}/>
        <Route path="/about" element={<About />} />
          
        </Routes>
    )
}
export default Navigator
