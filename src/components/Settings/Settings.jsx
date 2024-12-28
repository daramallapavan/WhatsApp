import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineVpnKey } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { PiAddressBookTabsLight } from "react-icons/pi";
import { BsChatSquareText } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { MdDataUsage } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";
import { RiThreadsFill } from "react-icons/ri";
const Settings = () => {

    const navigate=useNavigate()

    const openaccount=()=>{
        navigate('/account')
    }
 
  return (
    <div className=''>
           <div className='py-4  px-4 shadow sticky top-0 bg-white'>
       <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Link to={'/home/chats'} ><IoArrowBack size={25}/></Link>
                <p className='text-2xl'>Settings</p>

            </div>
            <p><IoIosSearch size={25}/></p>

        </div>
           </div>

           <div className='py-5 hover:bg-slate-200 border '>
                <div className='flex justify-between px-2' >
                  <div className='flex gap-3'>
            <p className='w-12 h-12 rounded-full bg-black cursor-pointer'></p> 
                     {/* <img src={image} className='w-12 h-12 rounded-full object-cover cursor-pointer'/>  */}
                   <div className='overflow-hidden cursor-pointer' >
                   <p className='text-xl'>Pavan</p>
                   <p className=' '>Hey there! I am using...  </p>
                   </div>
                  </div>
                  <div>
                    <p className='text-sm'>Yesterday</p>
                  </div>
                   
                </div>
            </div>

            <div className='px-4 '>
                
            <div className='flex  items-center gap-5 py-3' onClick={openaccount}>
            <p ><MdOutlineVpnKey size={25}/></p> 
            <div>
                <p>Account</p>
                <p className='text-gray-700'>Security notifications, change number</p>
            </div>

            </div>
            <div className='flex  items-center gap-5 py-3'>
            <p ><MdOutlineLock size={25}/></p> 
            <div>
                <p>Privacy</p>
                <p className='text-gray-700'>Block ontacts, disappearing messages</p>
            </div>

            </div>
            <div className='flex  items-center gap-5 py-3'>
            <p ><RxAvatar size={25}/></p> 
            <div>
                <p>Avatar</p>
                <p className='text-gray-700'>Create, edit, profile photo</p>
            </div>

            </div>
            <div className='flex  items-center gap-5 py-3'>
            <p ><PiAddressBookTabsLight size={25}/></p> 
            <div>
                <p>Lists</p>
                <p className='text-gray-700'>Manag people and groups</p>
            </div>

            </div>
            <div className='flex  items-center gap-5 py-3'>
            <p ><BsChatSquareText size={25}/></p> 
            <div>
                <p>Chats</p>
                <p className='text-gray-700'>Theme, wallpapers and chat history</p>
            </div>

            </div>
            <div className='flex  items-center gap-5 py-3'>
            <p ><IoIosNotificationsOutline size={25}/></p> 
            <div>
                <p>Notifications</p>
                <p className='text-gray-700'>Message , group & call tones</p>
            </div>

            </div>
            <div className='flex  items-center gap-5 py-3'>
            <p ><MdDataUsage size={25}/></p> 
            <div>
                <p>Storage and data</p>
                <p className='text-gray-700'>Network usage, auto download</p>
            </div>

            </div>
            <div className='flex  items-center gap-5 py-3'>
            <p ><GrLanguage size={25}/></p> 
            <div>
                <p>App language</p>
                <p className='text-gray-700'>English (device's language)</p>
            </div>

            </div>
            <div className='flex  items-center gap-5 py-3'>
            <p ><MdHelpOutline size={25}/></p> 
            <div>
                <p>Help</p>
                <p className='text-gray-700'>Help center, contact us, privacy policy</p>
            </div>

            </div>
            <div className='flex  items-center gap-5 py-3'>
            <p ><FaUserFriends size={25}/></p> 
            <div>
                <p>Invite a friend</p>
        
            </div>

            </div>
            <div className='flex  items-center gap-5 py-3'>
            <p ><MdOutlineSystemSecurityUpdateGood size={25}/></p> 
            <div>
                <p>App updates</p>
        
            </div>

            </div>


            <div className='py-4'>
                <p className='text-gray-500'>Also from Meta</p>

            <div className='flex  items-center gap-5 py-3'>
            <p ><FaInstagram size={25}/></p> 
            <div>
                <p>Open Instagram</p>
        
            </div>

            </div>
            <div className='flex  items-center gap-5 py-3'>
            <p ><PiFacebookLogoBold size={25}/></p> 
            <div>
                <p>Open Facebook</p>
        
            </div>

            </div>
            <div className='flex  items-center gap-5 py-3'>
            <p ><RiThreadsFill size={25}/></p> 
            <div>
                <p>Open Threads</p>
        
            </div>

            </div>

            </div>



    







            </div>



    
    </div>
  )
}

export default Settings