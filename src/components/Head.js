import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cachesResult } from '../utils/searchSlice';

const Head = () => {
  const [serachQuerry , setSerachQuerry ] = useState("");
  const [suggestion , setSuggestion] = useState([]);
  const [showSuggestion , setShowSuggestion] = useState(false);

  const searchCache = useSelector((store)=>store.search)
  // const dispatch = useDispatch()

useEffect(()=>{
  // console.log(serachQuerry);
  
  const timer = setTimeout(()=> {

    if(searchCache[serachQuerry]){
      setSuggestion(searchCache[serachQuerry])
    }else{
    getSearchSuggestion()
    }
  
    },200);

  return ()=>{
    clearTimeout(timer)
  }

},[serachQuerry]);

const getSearchSuggestion = async ()=>{
  const data = await fetch(YOUTUBE_SEARCH_API+serachQuerry);
  const json = await data.json();
  setSuggestion(json[1])
  // console.log(json[1])

  // update slice

  dispatch(cachesResult({
    [serachQuerry] : json[1]
  }))
}

  const dispatch = useDispatch();

  const toggleManuHandler = () => {
    dispatch(toggleMenu())
  }

  
  return (
    <div className='grid grid-flow-col p-2 sticky top-0 bg-white'>
        <div className='flex justify-around col-span-1 '>
        <i onClick={()=>toggleManuHandler()} className="fa-solid fa-bars text-2xl h-7 my-auto"></i>
        <img className='h-7 w-24 my-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png"></img>
        </div>
        <div className='col-span-10' >
            <div className='w-1/2 mx-auto'>
            <div>
            <input placeholder='Search' className='w-10/12 border border-gray-400 p-2 rounded-l-full' type='text' value={serachQuerry} onChange={(e)=>setSerachQuerry(e.target.value)} onFocus={()=>setShowSuggestion(true)} onBlur={()=>setShowSuggestion(false)}></input>
            <button className='border border-gray-400 p-2 rounded-r-full bg-gray-50'><i className="fa-solid fa-magnifying-glass w-12"></i></button>
            </div>
           {showSuggestion && <div className='fixed bg-white w-[31rem] rounded-xl border border-gray-100' >
              <ul>

              {
                suggestion.map((value,index)=>{
                  return(
                    <li key={index} className='hover:bg-gray-200 hover:font-bold'> <i className=" fa-solid fa-magnifying-glass w-12 p-3  "></i>{value}</li>
                  )
                })
              }
              </ul>
            </div>}
            </div>
        </div>
        <div className='col-span-1' >
            <img className='h-7 w-7 mx-auto my-2' src='https://cdn-icons-png.flaticon.com/512/9187/9187604.png'></img>
        </div>
    </div>
  )
}

export default Head