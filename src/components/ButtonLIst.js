import React from 'react'
import Button from './Button'

const ButtonLIst = () => {
  const list = ["Games","Moveis","Cooking","Cricket","Marvel Studios","8 ball pool","Americas Got Talent's","Arijit Singh","Horror","Live"]
  return (
    <div className='flex sticky top-14 bg-white'>
      <button className='bg-black text-white  rounded-md p-1 m-5' >&nbsp; All &nbsp;</button>
      {
        list.map((item,index)=>{
          return(
            <Button item={item} key={index}/>
          )
        })
      }
    </div>
  )
}

export default ButtonLIst