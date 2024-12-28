import React, { useState } from 'react'
import { MdOutlineQrCodeScanner } from 'react-icons/md'
import { IoCameraOutline } from 'react-icons/io5'
import { CiMenuKebab } from 'react-icons/ci'
import dp from '../assest/dp.jpg'
import { IoIosSearch } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
const Updates = () => {
    const [image, setImage] = useState(dp)
  return (
    <div className='px-4'>
         <div className='flex items-center justify-between  py-4  sticky top-0 bg-white '>
                    <div>
                        <h1 className=' text-2xl '>Updates</h1>
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
            <p className='text-xl'>Status</p>
            <div className='py-4'>
                <div className='flex gap-4'>
                <div className='relative'>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                <div className='absolute bottom-0 right-0'>
                    <p className='text-white  bg-green-800 overflow-hidden rounded-full '><IoAddCircleOutline size={25}/></p>
                    {/* <p className='p-3 rounded-full bg-green-600 border border-white'></p> */}

                </div>
                </div>
                <div className=''>
                    <h1>My Status</h1>
                    <p className='text-gray-600'>Tap to add status update</p>
                </div>
                </div>
            </div>

         </div>

         <div>
            <p>Recent updates</p>
            <div className='flex gap-4 py-3'>
                <div>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                </div>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday</p>
                </div>
            </div>
            <div className='flex gap-4 py-3'>
                <div>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                </div>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday</p>
                </div>
            </div>
            <div className='flex gap-4 py-3'>
                <div>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                </div>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday</p>
                </div>
            </div>
            <div className='flex gap-4 py-3'>
                <div>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                </div>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday</p>
                </div>
            </div>
            <div className='flex gap-4 py-3'>
                <div>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                </div>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday</p>
                </div>
            </div>
            <div className='flex gap-4 py-3'>
                <div>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                </div>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday</p>
                </div>
            </div>
            <div className='flex gap-4 py-3'>
                <div>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                </div>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday</p>
                </div>
            </div>
            <div className='flex gap-4 py-3'>
                <div>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                </div>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday</p>
                </div>
            </div>
            <div className='flex gap-4 py-3'>
                <div>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                </div>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday</p>
                </div>
            </div>
            <div className='flex gap-4 py-3'>
                <div>
                <img src={image} className='w-12 h-12 rounded-full object-cover'/>
                </div>
                <div>
                    <p>Pavan</p>
                    <p className='text-gray-600'>Yesterday</p>
                </div>
            </div>
            
         </div>
    </div>
  )
}

export default Updates