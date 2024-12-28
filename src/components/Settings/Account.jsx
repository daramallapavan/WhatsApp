import React from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <div>
        
        <div className='py-4  px-4 shadow sticky top-0 bg-white'>
       <div className='flex items-center '>
            <div className='flex items-center gap-4'>
                <Link to={'/settings'} ><IoArrowBack size={25}/></Link>
                <p className='text-2xl'>Account</p>

            </div>
 

        </div>
         </div>


         <div className='grid gap-5 px-5 py-4'>

            <div className='flex items-center gap-4 py-2'>
                <p>icon</p>
                <p>Security Notifications</p>

            </div>
            <div className='flex items-center gap-4 py-2'>
                <p>icon</p>
                <p>Security Notifications</p>

            </div>
            <div className='flex items-center gap-4 py-2'>
                <p>icon</p>
                <p>Security Notifications</p>

            </div>
            <div className='flex items-center gap-4 py-2'>
                <p>icon</p>
                <p>Security Notifications</p>

            </div>
            <div className='flex items-center gap-4 py-2'>
                <p>icon</p>
                <p>Security Notifications</p>

            </div>
            <div className='flex items-center gap-4 py-2'>
                <p>icon</p>
                <p>Security Notifications</p>

            </div>
            
         </div>
    </div>
  )
}

export default Account