import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[150px]'>
      <ClipLoader color='#3498db' loading={true} size={50} />
      <p className='mt-2 text-lg text-gray-600'>로딩 중...</p>
    </div>
  )
}

export default Loading
