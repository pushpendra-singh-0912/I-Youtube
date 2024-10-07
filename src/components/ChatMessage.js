import React from 'react'

const ChatMessage = ({name , text}) => {
  return (
    <div className='m-2'>
      <img className='h-5 w-5 m-1 inline-block' src='https://cdn-icons-png.flaticon.com/512/9187/9187604.png'></img>
      <span className='ml-2 font-bold'>{name}</span>
      <span className='ml-2 '>{text}</span>
    </div>
  )
}

export default ChatMessage