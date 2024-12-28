import React, { useEffect, useState } from 'react'
import { MdOutlineVideocam } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoCameraOutline } from "react-icons/io5";
import HomeChat from './HomeChat';
import {GoogleMap, Marker, LoadScript} from '@react-google-maps/api'
import whatsAppImage from '../assest/dp.jpg'
const OpenChat = () => {
const [image, setImage] = useState(whatsAppImage)
    const apiKey="AIzaSyC26rbYwOJyNck3DCMAGSeqdH5ysyYVOxc";
    // const [currentLocation,setCurrentLocation]=useState()
    // useEffect(()=>{
    //     navigator.geolocation.getCurrentPosition(
    //         async(position)=>{
    //            const {latitude,longitude}=position.coords
    //             setCurrentLocation({lat: position.coords.latitude,lng: position.coords.longitude})

    //             const response=await fetch(`https://maps.googleapis.com/maps/api/geocode/json?lating=${latitude},${longitude}&key=${apiKey}`)
    //             const data=await response.json()
    //             if(data.results && data.results.length >0){
    //                 console.log("Address: ",data.results[0].formatted_address)
    //             }else{
    //                 console.log('no address found')
    //             }
    //         },
    //         (error)=>{
    //             console.error("Error Getting location",error)
    //         }
    //     )

    // },[])

 
   

    // const containerStyle={
    //     width: '100%',
    //     height: '500px'
    // }


 

    const navigate=useNavigate()
    const voewProfile=()=>{
        navigate('/viewProfile')
        
    }
  return (
    <div className=''>
        
        <div className='flex items-center justify-between shadow-md px-1 py-4 sticky top-0 bg-white'>
            <div className='flex items-center justify-center gap-1 '>
                <Link to={'/home'}><IoArrowBack size={25}/></Link>
                {/* <p className='w-12 h-12 bg-black rounded-full'></p> */}
                   <img src={image} className='w-12 h-12 rounded-full '/> 
                <div onClick={voewProfile} className='px-2'>
                    <p className=' line-clamp-1'> Daramalla Pavan</p>
                    <p className='text-md'>10:33PM</p>
                </div>

            </div>
            <div className='flex items-center justify-center gap-5'>
                <p><MdOutlineVideocam size={30}/></p>
                <p><MdOutlineCall size={25}/></p>
                <p><CiMenuKebab size={25}/></p>
            </div>

        </div>

{/* middle */}
        {/* <div className='flex flex-col items-center justify-center min-h-screen '>
        <h1 className='text-2xl font-bold mb-4 text-gray-800'>Your Location</h1>
        {
            currentLocation ? (
                <div className='w-full max-w-4xl shadow-lg rounded-lg overflow-hidden'>
                    <LoadScript googleMapsApiKey="AIzaSyC26rbYwOJyNck3DCMAGSeqdH5ysyYVOxc">
                        <GoogleMap mapContainerStyle={containerStyle} center={currentLocation} zoom={15}>
                            <Marker position={currentLocation}/>

                        </GoogleMap>

                    </LoadScript>

                </div>
            ):
            (
                <p className='text-gray-600'>Loading map...</p>
            )
        }
       </div>  */}
       {/* AIzaSyC26rbYwOJyNck3DCMAGSeqdH5ysyYVOxc */}
    


        <div className='fixed bottom-1 w-full rounded-full bg-white shadow-lg border py-3 px-3'>
            <div className='flex items-center justify-between gap-2'>
               <div className='flex gap-4'>
               <p><MdOutlineEmojiEmotions size={25}/></p>
               <input type='text' placeholder='Message' className='outline-none'/ >
               </div>
               <div className='flex gap-4'>
                <p><MdAttachFile size={25}/></p>
                <p><RiMoneyRupeeCircleFill size={25}/></p>
                <p><IoCameraOutline size={25}/></p>
               </div>
            </div>
       

         </div>
   
        
      
    </div>
  )
}

export default OpenChat