import React, { useState } from 'react'
 import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
 import { CiMenuKebab } from "react-icons/ci";
 import { PiChatTextLight } from "react-icons/pi";
import { RxUpdate } from "react-icons/rx";
import { RiUserCommunityLine } from "react-icons/ri";
 import { MdOutlineCall } from "react-icons/md";
import HomeChat from './HomeChat';
import { IoIosSearch } from "react-icons/io";
import { Link, Outlet } from 'react-router-dom';
const Home = () => {

  const [selected,setSelected]=useState("")
  return (
    <div>
      
     

 
 {/* Chat */}
 <div>
  <Outlet/>
 </div>

{/* bottom */}
<div className='mt-2'>
<div className='flex items-center justify-between px-6 py-3 shadow-lg border fixed w-full bottom-0 bg-white'>

<div className='flex  items-center justify-center'>
  <div className='grid gap-1 ' onClick={()=>setSelected('chats')}>
    <div className='flex items-center justify-center'>
    <Link to={'/home/chats'} className={`${selected==='chats'?'bg-green-300  font-bold  rounded-full':''} py-1 px-2 `}><PiChatTextLight size={25}/></Link>
    </div>
    <p className={`${selected==='chats'?'font-bold':''} text-sm`}>Chats</p>
  </div>

</div>
<div className='flex  items-center justify-center'>
  <div className='grid gap-1' onClick={()=>setSelected('updates')} >
    <div className='flex items-center justify-center'>
    <Link to={'/home/updates'}  className={`${selected==='updates'?'bg-green-300   font-bold  rounded-full':''} py-1 px-4  `}><RxUpdate size={25}/></Link>
    </div>
    <p className={`${selected==='updates'?'font-bold':''} text-sm`}>Updates</p>
  </div>

</div>
<div className='flex  items-center justify-center'>
  <div className='grid gap-1' onClick={()=>setSelected('communities')}>
    <div className='flex items-center justify-center'>
    <Link to={'/home/communities'}   className={`${selected==='communities'?'bg-green-300  font-semibold  rounded-full':''} py-1 px-4 `}><RiUserCommunityLine size={25}/></Link>
    </div>
    <p className={`${selected==='communities'?'font-bold':''} text-sm` }>Communities</p>
  </div>

</div>
<div className='flex  items-center justify-center'>
  <div className='grid gap-1' onClick={()=>setSelected('calls')}>
    <div className='flex items-center justify-center'>
    <Link to={'/home/calls'}   className={`${selected==='calls'?'bg-green-300 font-semibold  rounded-full':''} py-1 px-2 `}><MdOutlineCall size={25}/></Link>
    </div>
    <p className={`${selected==='calls'?'font-bold':''} text-sm`}>Calls</p>
  </div>

</div>

</div>
</div>
    </div>
  )
}

export default Home