import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'

const LIveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector(store => store.chat.messages);



    useEffect(()=>{
      const interval = setInterval(()=>{
        console.log("polling")

        dispatch(addMessage({
          name:generateRandomName(),
          message:makeRandomMessage(15)
        }))

      },500)

      return ()=>clearInterval(interval)

    },[])

  return (
    
      <div className='border border-red-700 h-[500px] w-[25rem] rounded-lg ml-3 p-3 flex flex-col-reverse overflow-y-scroll '>
        
       {
        ChatMessages.map((msg,index)=>{
             return(
              <ChatMessage key={index} name={msg.name} text={msg.message}/>
             )
        })
       }
      

    
      </div>
   
  )
}

export default LIveChat