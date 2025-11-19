import React from 'react'

const InputBox = ({title,holder,onChange}) => {
  return (
    <div className='mt-3'>
        <span className='text-white text-md font-medium text-left py-2'>{title}</span><br></br>
        <input onChange={onChange} placeholder={holder} className='w-full text-white rounded border border-white/40 px-2 py-1 outline-none placeholder:text-white/60 placeholder:text-sm'/>
    </div>
  )
}

export default InputBox