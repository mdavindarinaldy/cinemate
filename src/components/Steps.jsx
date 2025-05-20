import React from 'react'

function Steps() {
  const baseStyle = 'bg-gray-400 size-8 rounded-full text-white py-1 px-3'
//   const on = `bg-blue-600`
  return (
    <div className='flex flex-row gap-5 items-center justify-between box-border'>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <div className={baseStyle}>1</div>
            <span className='text-sm font-normal'>Fill Form</span>
        </div>
        <hr className='border-[0.5px] w-[8svw] h-[1px] border-dashed border-gray-400'/>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <div className={baseStyle}>2</div>
            <span className='text-sm font-normal'>Activate</span>
        </div>
        <hr className='border-[0.5px] w-[8svw] h-[1px] border-dashed border-gray-400'/>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <div className={baseStyle}>3</div>
            <span className='text-sm font-normal'>Done</span>
        </div>
    </div>
  )
}

export default Steps