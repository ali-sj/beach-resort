import React from 'react'
import './App.css'
import Home from './pages/Home'
import Room from './pages/Room'
import Error from './pages/Error'
import SingleRoom from './pages/SingleRoom'
import { Route,Routes} from 'react-router-dom'
import Header from './components/Header'
const App = () => {
  return (
    
      <>
      <Header/>

      <Routes>
      
           <Route path="/" element={<Home/>}/>
           <Route path="/rooms" element={<Room/>}/>
           <Route path="/singlepages/:slug" element={<SingleRoom/>}/>
           <Route path='*' element={<Error/>}/>

           
      </Routes>
   
      </>

      
  
  )
}

export default App
