import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_APIS } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = ()=>{

  const [video , setVideo] = useState([]);
  useEffect(()=>{
    getVideos()
  },[]);

  const getVideos = async ()=>{
    const data = await fetch(YOUTUBE_VIDEO_APIS);
    const json = await data.json();
    // console.log(json.items)
    setVideo(json.items)
  }

  
  return video.length>0?(
    <div className='flex flex-wrap p-2 m-2 justify-evenly '>
      {
        video.map(item=> <Link key={item.id}  to={"/watch?v="+item.id}><VideoCard info={item}/></Link>)
      }
    </div>
  ):null
 
}

export default VideoContainer;

