import React, { useState } from 'react'
import { MdOutlineQrCodeScanner } from 'react-icons/md'
import { IoCameraOutline } from 'react-icons/io5'
import { CiMenuKebab } from 'react-icons/ci'
import dp from '../assest/dp.jpg'
import { IoIosSearch } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { MdOutlineCall } from "react-icons/md";
const Calls = () => {
    const [image, setImage] = useState(dp)
  return (
    <div className='px-4'>
         <div className='flex items-center justify-between  py-4  sticky top-0 bg-white '>
                    <div>
                        <h1 className=' text-2xl '>Calls</h1>
                    </div>
                    <div className='flex gap-5 text-2xl '>
                        <p><MdOutlineQrCodeScanner/></p>
                        <p><IoCameraOutline/></p>
                        <p><IoIosSearch/></p>
                        <div>
                        <p><CiMenuKebab/></p>
                      
                        </div>
                       
        
                       
                    </div>
                 
        
        
             {/* <div className='absolute px-2 right-0 top-10 opacity-0 group-hover:opacity-100 bg-gray-200 p-2 rounded shadow transition-opacity'>
         <div className='grid gap-1 py-5'>
         <p className='hover:bg-gray-200 py-2 px-2'>New group</p>
              <p className='hover:bg-gray-200 py-2 px-2'>New broadcast</p>
              <p className='hover:bg-gray-200 py-2 px-2'>Linked devices</p>
              <p className='hover:bg-gray-200 py-2 px-2'>starred messages</p>
              <p className='hover:bg-gray-200 py-2 px-2'>Payments</p>
              <p className='hover:bg-gray-200 py-2 px-2'>Settings</p>
         </div>
        
             </div> */}
         </div>

         <div className=''>
            <p className='text-xl'>Favourite</p>
            <div className='py-4'>
                <div className='flex gap-4'>
                <div className=''>
                {/* <img src={image} className='w-12 h-12 rounded-full object-cover'/> */}
              <p className='bg-green-800 text-white px-2 rounded-full py-2'><FcLike size={25}/></p>
                </div>
                <div className='flex items-center'>
                    <h1>Add favourite</h1>
                  
                </div>
                </div>
            </div>

         </div>

         <div>
            <p>Recent</p>
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 py-3'>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday, 10:21 PM</p>
                </div>
                </div>
                <p><MdOutlineCall size={25}/></p>
                
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 py-3'>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday, 10:21 PM</p>
                </div>
                </div>
                <p><MdOutlineCall size={25}/></p>
                
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 py-3'>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday, 10:21 PM</p>
                </div>
                </div>
                <p><MdOutlineCall size={25}/></p>
                
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 py-3'>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday, 10:21 PM</p>
                </div>
                </div>
                <p><MdOutlineCall size={25}/></p>
                
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 py-3'>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday, 10:21 PM</p>
                </div>
                </div>
                <p><MdOutlineCall size={25}/></p>
                
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 py-3'>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday, 10:21 PM</p>
                </div>
                </div>
                <p><MdOutlineCall size={25}/></p>
                
            </div>
   
            
         </div>
    </div>
  )
}

export default Calls