import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import VideoContainer from './VideoContainer';
import LIveChat from './LiveChat';


const WatchPage = () => {

    const [searchParams ] = useSearchParams()
    // console.log(searchParams.get("v"))

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='flex flex-col w-full'>
    <div className='px-4 m-2 flex  w-[69rem]'>
        <div>  
        <iframe className='rounded-lg' width="1060" height="500" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div>
          <LIveChat/>
        </div>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage