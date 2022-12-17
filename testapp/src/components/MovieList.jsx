import React from 'react'

export default function MovieList(props) {
  return (
    <div>
         <div className='mb-10 ml-6'>
        <p className='text-xl font-bold my-2 ml-2'>{props.name}</p>
        <div className='bar flex w-full overflow-x-auto'>{props.list}</div>
      </div>
    </div>
  )
}
