import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info );
    
    

  return (
    <div className='h-68 w-96 p-3'>
     { <img className=' w-full  rounded-lg' src={info.snippet.thumbnails.medium.url} /> }
      { <ul>
       <li className='font-bold' >{info.snippet.title}</li>
      <li>{info.snippet.channelTitle}</li>
       <li>{info.statistics.viewCount} views</li>
      </ul> } 

    </div>
  )
}

export default VideoCard