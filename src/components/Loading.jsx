import React from 'react'
import { Spinner } from '@material-tailwind/react'

const Loading = () => {
  return (
    <div className='flex space-x-2 items-center justify-center mt-7 mb-2'>
      <Spinner className="w-10 h-10"></Spinner>
      <p>Loading please wait...</p>
    </div>
  )
}

export default Loading
