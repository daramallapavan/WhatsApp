import React, { useState } from 'react'
import { IoArrowBack } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { MdOutlineCall } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { MdOutlineVideocam } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlinePermMedia } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineEnhancedEncryption } from "react-icons/md";
import { PiClockCountdownFill } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { PiAddressBookTabsLight } from "react-icons/pi";
import { MdBlock } from "react-icons/md";
import { BiDislike } from "react-icons/bi";
import { Link } from 'react-router-dom';
import whatsAppImage from '../assest/dp.jpg'
const ViewProfile = () => {
  const [image, setImage] = useState(whatsAppImage)
  return (
    <div className='grid gap-3'>
        <div className='py-3 shadow-md'>
        <div className='flex   justify-between px-3'>
            <Link to={'/openChat'}><IoArrowBack size={35}/> </Link>

           <div className=' '>
           {/* <p className='w-40 h-40 bg-black rounded-full '></p> */}
           <img src={image} className='w-40 h-40 rounded-full object-cover'/> 
           <div className='flex  items-center justify-center '>
              <div className='grid '  >
                <div className='flex items-center justify-center py-2'>
                <p className='text-3xl'>Pavan</p>
                </div>
                <p className='text-2xl'>+91 7286802948</p>
              </div>
            
            </div>
       
           </div>
            <p className='text-black'><CiMenuKebab size={25}/></p>

        </div>



        <div className='grid grid-cols-4 gap-4 px-2 py-4'>

            <div className='flex  items-center justify-center border shadow rounded-md  border-slate-300 px-2 py-2'>
              <div className='grid gap-2'  >
                <div className='flex items-center justify-center'>
                <p className='text-green-600'><MdOutlineCall size={25}/></p>
                </div>
                <p>Audio</p>
              </div>
            
            </div>
            <div className='flex  items-center justify-center border shadow rounded-md  border-slate-300 px-2 py-2'>
              <div className='grid gap-2'  >
                <div className='flex items-center justify-center'>
                <p className='text-green-600'><MdOutlineVideocam size={25}/></p>
                </div>
                <p>Video</p>
              </div>
            
            </div>
            <div className='flex  items-center justify-center border shadow rounded-md  border-slate-300 px-2 py-2'>
              <div className='grid gap-2'  >
                <div className='flex items-center justify-center'>
                <p className='text-green-600'><RiMoneyRupeeCircleFill size={25}/></p>
                </div>
                <p>Pay</p>
              </div>
            
            </div>
            <div className='flex  items-center justify-center  shadow border rounded-md  border-slate-300 px-2 py-2'>
              <div className='grid gap-2'  >
                <div className='flex items-center justify-center'>
                <p className='text-green-600'><IoIosSearch size={25}/></p>
                </div>
                <p>Search</p>
              </div>
            
            </div>


        </div>


        </div>
        <div className='shadow-md px-3 border'>
           <div className='py-3'>
           <p>Available</p>
           <p>May 10</p>
           </div>

        </div>
        <div className='py-3 px-3 shadow-md border grid gap-5'>
            <div className='flex gap-5'>
                <p><IoMdNotificationsOutline size={25}/></p>
                <p>Notifications</p>
            </div>
            <div className='flex gap-5'>
                <p><MdOutlinePermMedia size={25}/></p>
                <p>Media visibility</p>
            </div>
            <div className='flex gap-5'>
                <p><FiMessageSquare size={25}/></p>
                <p>Kept messages</p>
            </div>
        </div>
        <div className='shadow-md border py-3  px-3 grid gap-5'>
        <div className='flex gap-5'>
                <p><MdOutlineEnhancedEncryption size={25}/></p>
                <p>Encryption</p>
            </div>
            <div className='flex gap-5'>
                <p><PiClockCountdownFill size={25}/></p>
                <p>Dissappearing messages</p>
            </div>
            <div className='flex gap-5'>
                <p><RiLockPasswordLine size={25}/></p>
                <p>Chat lock</p>
            </div>
        </div>
        <div className='shadow-md border py-3  px-3 grid gap-5'>
            <p>No groups in common</p>
        <div className='flex gap-5'>
                <p><FaUserGroup size={25}/></p>
                <p>Create group with Pavan</p>
            </div>
        
        </div>
        <div className='shadow-md border py-3  px-3 grid gap-5'>
        <div className='flex gap-5'>
                <p><MdFavoriteBorder size={25}/></p>
                <p>Add to Favourites</p>
            </div>
            <div className='flex gap-5'>
                <p><PiAddressBookTabsLight size={25}/></p>
                <p>Add to list</p>
            </div>
            <div className='flex gap-5 text-red-600'>
                <p><MdBlock size={25}/></p>
                <p>Block Pavan</p>
            </div>
            <div className='flex gap-5 text-red-600'>
                <p><BiDislike size={25}/></p>
                <p>Report Pavan</p>
            </div>
        </div>
    </div>
  )
}

export default ViewProfile