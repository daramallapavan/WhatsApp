import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import { useState } from 'react'

function App() {

const navigate=useNavigate()

const [visible,setVisible]=useState(true)
  const openHome=()=>{
    setVisible(false)
    navigate('/home')

  }

  return (
    <>
 
  <div>
  {
    visible && (
      <div className='flex items-center justify-center py-6'>
      <p className='px-4 py-1 border shadow' onClick={openHome}>Click here</p>
    </div>
    )
  }
  <Outlet/>
  </div>
  
    </>
  )
}

export default App
