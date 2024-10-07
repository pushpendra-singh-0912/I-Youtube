import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if(!isMenuOpen) return null;
    
  return (
    <div className="w-52 p-3 h-full bg-white  sticky top-16 ">
        <div className='col-span-1span-1 flex justify-evenly border bg-gray-200 rounded-lg mt-2 '> 
            <i className="fa-solid fa-house p-2 "></i>
           <Link to={"/"}> <button>HOME</button></Link>
        </div>
        <div className='col-span-1span-1 flex justify-evenly  hover:bg-gray-200 rounded-lg mt-2'> 
        <i className="fa-solid fa-music p-2 "></i>
            <button>MUSIC</button>
        </div>
        <div className='col-span-1span-1 flex justify-evenly hover:bg-gray-200 rounded-lg mt-2'> 
        <i className="fa-brands fa-tiktok p-2"></i>
            <button>TIKTOK</button>
        </div>
         <div className='col-span-1span-1 flex justify-evenly hover:bg-gray-200 rounded-lg mt-2'> 
            <i className="fa-solid fa-house p-2 "></i>
            <button>HOME</button>
        </div>


        <hr className='mt-3'></hr>


        <div className='col-span-1span-1 hover:bg-gray-200 rounded-lg mt-2 '> 
            <button className='ml-7' >You</button>
        <i className="fa-solid fa-greater-than p-2"></i>
        </div>
        <div className='col-span-1span-1 flex justify-evenly  hover:bg-gray-200 rounded-lg mt-2'> 
        <i className="fa-solid fa-gift p-2"></i>
            <button>Channel</button>
        </div>
        <div className='col-span-1span-1 flex justify-evenly hover:bg-gray-200 rounded-lg mt-2'> 
        <i className="fa-solid fa-film p-2"></i>
            <button>Video</button>
        </div>
         <div className='col-span-1span-1 flex justify-evenly hover:bg-gray-200 rounded-lg mt-2'> 
         <i className="fa-regular fa-clock p-2"></i>
            <button>History</button>
        </div>
        <div className='col-span-1span-1 flex justify-evenly hover:bg-gray-200 rounded-lg mt-2'> 
        <i className="fa-regular fa-thumbs-up p-2"></i>
            <button>Later</button>
        </div>

        <hr className='mt-3'></hr>
    </div>
  )
}

export default Sidebar