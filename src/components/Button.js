
import React from 'react'

const Button = ({item}) => {
  return (
    <div>
        <button className='bg-gray-100 rounded-md p-1 m-5'>{item}</button>
    </div>
  )
}

export default Button