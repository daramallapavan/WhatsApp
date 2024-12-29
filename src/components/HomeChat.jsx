import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../assest/chat.jpeg'
import whatsAppImage from '../assest/ProfileP.jpg'
import dp from '../assest/dp.jpg'
import { MdOutlineQrCodeScanner } from 'react-icons/md'
import { IoCameraOutline } from 'react-icons/io5'
import { CiMenuKebab } from 'react-icons/ci'
import { IoIosSearch } from 'react-icons/io'
import { MdOutlineCall } from "react-icons/md";
import { MdOutlineVideocam } from "react-icons/md";
import { PiChatTextLight } from "react-icons/pi";
const HomeChat = () => {

  const [image, setImage] = useState(dp)

  const [isPicVisible,setIsPicVisible]=useState(false)

  const [visibleMenu,setVisibleMenu]=useState(false)
    const navigate=useNavigate()

    const openSettings=()=>{
      setVisibleMenu(false)
      navigate('/settings')

    }

    const openChat=()=>{

        navigate('/openChat')
    }
  return (
    <div className='relative'>

      <div className={`${isPicVisible ? 'opacity-30':'opacity-100'}`}>
                       {/* Header */}

     <div className='flex items-center justify-between px-4 py-4 shadow-sm sticky top-0 bg-white '>
            <div>
                <h1 className=' font-bold text-2xl text-green-700'>WhatsApp</h1>
            </div>
            <div className='flex gap-5 text-2xl '>
                <p><MdOutlineQrCodeScanner/></p>
                <p><IoCameraOutline/></p>
                <div className='relative'>
                <p onClick={()=>setVisibleMenu(true)}><CiMenuKebab/></p>
               {
                visibleMenu && (
                  <div className='absolute right-0 top-12 bg-white border shadow-md w-[200px] rounded-md '>
                  <div className='grid gap-2 w-full text-sm  py-4'>
                    <p className='hover:bg-gray-200 py-2 px-4'>New group</p>
                    <p className='hover:bg-gray-200 py-2 px-4'>new broadcast</p>
                    <p className='hover:bg-gray-200 py-2 px-4'>Linked devices</p>
                    <p className='hover:bg-gray-200 py-2 px-4'>Starred messages</p>
                    <p className='hover:bg-gray-200 py-2 px-4'>Payments</p>
                    <p className='hover:bg-gray-200 py-2 px-4' onClick={openSettings}>Settings</p>
                  </div>
                </div>
                )
               }
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
  
 
   
     {/* Search */}
     <div className='py-2 px-2'>
      <div className='rounded-full bg-gray-100 px-4 py-2 flex items-center'>
        <p><IoIosSearch size={25}/></p>
        <button className='px-2'>Search...</button>
      </div>
  
     </div>
          
          <div className='py-3 hover:bg-slate-200 ' >
            <div className='flex justify-between px-2' >
              <div className='flex gap-3' onClick={()=>{setIsPicVisible(true)}}>
            {/* <p className='w-12 h-12 rounded-full bg-black cursor-pointer'></p> */}
                 <img src={image} className='w-12 h-12 rounded-full object-cover cursor-pointer'/> 
               <div className='overflow-hidden cursor-pointer' onClick={openChat}>
               <p className='text-xl'>Daramalla Pavan</p>
               <p className=' '> message message ....  </p>
               </div>
              </div>
              <div>
                <p className='text-sm'>Yesterday</p>
              </div>
               
            </div>
          </div>
          <div className='py-3 hover:bg-slate-200 ' onClick={openChat}>
            <div className='flex justify-between px-2' >
              <div className='flex gap-3'>
            {/* <p className='w-12 h-12 rounded-full bg-black cursor-pointer'></p> */}
                 <img src={image} className='w-12 h-12 rounded-full object-cover cursor-pointer'/> 
               <div className='overflow-hidden cursor-pointer' >
               <p className='text-xl'>Daramalla Pavan</p>
               <p className=' '> message message ....  </p>
               </div>
              </div>
              <div>
                <p className='text-sm'>Yesterday</p>
              </div>
               
            </div>
          </div>
          <div className='py-3 hover:bg-slate-200 ' onClick={openChat}>
            <div className='flex justify-between px-2' >
              <div className='flex gap-3'>
            {/* <p className='w-12 h-12 rounded-full bg-black cursor-pointer'></p> */}
                 <img src={image} className='w-12 h-12 rounded-full object-cover cursor-pointer'/> 
               <div className='overflow-hidden cursor-pointer' >
               <p className='text-xl'>Daramalla Pavan</p>
               <p className=' '> message message ....  </p>
               </div>
              </div>
              <div>
                <p className='text-sm'>Yesterday</p>
              </div>
               
            </div>
          </div>
     
          <div className='py-3 hover:bg-slate-200 ' onClick={openChat}>
            <div className='flex justify-between px-2' >
              <div className='flex gap-3'>
            {/* <p className='w-12 h-12 rounded-full bg-black cursor-pointer'></p> */}
                 <img src={image} className='w-12 h-12 rounded-full object-cover cursor-pointer'/> 
               <div className='overflow-hidden cursor-pointer' >
               <p className='text-xl'>Daramalla Pavan</p>
               <p className=' '> message message ....  </p>
               </div>
              </div>
              <div>
                <p className='text-sm'>Yesterday</p>
              </div>
               
            </div>
          </div>
          <div className='py-3 hover:bg-slate-200 ' onClick={openChat}>
            <div className='flex justify-between px-2' >
              <div className='flex gap-3'>
            {/* <p className='w-12 h-12 rounded-full bg-black cursor-pointer'></p> */}
                 <img src={image} className='w-12 h-12 rounded-full object-cover cursor-pointer'/> 
               <div className='overflow-hidden cursor-pointer' >
               <p className='text-xl'>Daramalla Pavan</p>
               <p className=' '> message message ....  </p>
               </div>
              </div>
              <div>
                <p className='text-sm'>Yesterday</p>
              </div>
               
            </div>
          </div>
          <div className='py-3 hover:bg-slate-200 ' >
            <div className='flex justify-between px-2' >
              <div className='flex gap-3' onClick={()=>{setIsPicVisible(true)}}>
            {/* <p className='w-12 h-12 rounded-full bg-black cursor-pointer'></p> */}
                 <img src={image} className='w-12 h-12 rounded-full object-cover cursor-pointer'/> 
               <div className='overflow-hidden cursor-pointer' onClick={openChat}>
               <p className='text-xl'>Daramalla Pavan</p>
               <p className=' '> message message ....  </p>
               </div>
              </div>
              <div>
                <p className='text-sm'>Yesterday</p>
              </div>
               
            </div>
          </div>
          <div className='py-3 hover:bg-slate-200 ' onClick={openChat}>
            <div className='flex justify-between px-2' >
              <div className='flex gap-3'>
            {/* <p className='w-12 h-12 rounded-full bg-black cursor-pointer'></p> */}
                 <img src={image} className='w-12 h-12 rounded-full object-cover cursor-pointer'/> 
               <div className='overflow-hidden cursor-pointer' >
               <p className='text-xl'>Daramalla Pavan</p>
               <p className=' '> message message ....  </p>
               </div>
              </div>
              <div>
                <p className='text-sm'>Yesterday</p>
              </div>
               
            </div>
          </div>
          <div className='py-3 hover:bg-slate-200 ' onClick={openChat}>
            <div className='flex justify-between px-2' >
              <div className='flex gap-3'>
            {/* <p className='w-12 h-12 rounded-full bg-black cursor-pointer'></p> */}
                 <img src={image} className='w-12 h-12 rounded-full object-cover cursor-pointer'/> 
               <div className='overflow-hidden cursor-pointer' >
               <p className='text-xl'>Daramalla Pavan</p>
               <p className=' '> message message ....  </p>
               </div>
              </div>
              <div>
                <p className='text-sm'>Yesterday</p>
              </div>
               
            </div>
          </div>
     
          <div className='py-3 hover:bg-slate-200 ' onClick={openChat}>
            <div className='flex justify-between px-2' >
              <div className='flex gap-3'>
            {/* <p className='w-12 h-12 rounded-full bg-black cursor-pointer'></p> */}
                 <img src={image} className='w-12 h-12 rounded-full object-cover cursor-pointer'/> 
               <div className='overflow-hidden cursor-pointer' >
               <p className='text-xl'>Daramalla Pavan</p>
               <p className=' '> message message ....  </p>
               </div>
              </div>
              <div>
                <p className='text-sm'>Yesterday</p>
              </div>
               
            </div>
          </div>
          <div className='py-3 hover:bg-slate-200 ' onClick={openChat}>
            <div className='flex justify-between px-2' >
              <div className='flex gap-3'>
            {/* <p className='w-12 h-12 rounded-full bg-black cursor-pointer'></p> */}
                 <img src={image} className='w-12 h-12 rounded-full object-cover cursor-pointer'/> 
               <div className='overflow-hidden cursor-pointer' >
               <p className='text-xl'>Daramalla Pavan</p>
               <p className=' '> message message ....  </p>
               </div>
              </div>
              <div>
                <p className='text-sm'>Yesterday</p>
              </div>
               
            </div>
          </div>
          <div className='py-3 hover:bg-slate-200 ' onClick={openChat}>
            <div className='flex justify-between px-2' >
              <div className='flex gap-3'>
            {/* <p className='w-12 h-12 rounded-full bg-black cursor-pointer'></p> */}
                 <img src={image} className='w-12 h-12 rounded-full object-cover cursor-pointer'/> 
               <div className='overflow-hidden cursor-pointer' >
               <p className='text-xl'>Daramalla Pavan</p>
               <p className=' '> message message ....  </p>
               </div>
              </div>
              <div>
                <p className='text-sm'>Yesterday</p>
              </div>
               
            </div>
          </div>
    

      </div>

    <div >
    {
        isPicVisible && (
        <div className='flex items-center justify-center bg-black bg-opacity-30'>
          <div className='flex items-center justify-center bg-white'>
          </div>
        </div>
        )
      }
    </div>
 
     
    


    </div>
  )
}

export default HomeChat