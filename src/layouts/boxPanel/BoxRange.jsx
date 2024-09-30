import React from 'react';
import {useDispatch} from "react-redux";
import {updateBoxValue} from "../../features/boxProperties"

export default function BoxRange({inputData}) {

  const dispatch = useDispatch();

  function handleInput(e){

    dispatch(updateBoxValue({
      ...inputData,
      value : e.target.value

    }))
  }
  return (
    <div className='my-6'>
        <div className='flex justify-between'>
          <p>{inputData.name}</p>
          <div className='flex items-baseline mb-2'>
            <input
                onChange={(e)=>handleInput(e)}
                value={inputData.value}
                className='w-14 h-8 mr-2 border border-gray-200 text-center'
                type='number'
            />
            <p>px</p>
          </div>
        </div>
        <div className='relative z-0 w-full flex items-center'>

          <input
          className='w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer'
          min={inputData.minMax[0]}
          max={inputData.minMax[1]}
          value={inputData.value}
          onChange={e=>handleInput(e)}
          type='range'
           />
           <div className='absolute -z-10 top-1/2 left-1/2 -translate-y-1/2
           -translate-x-1/2 w-0.5 h-10 bg-gray-300'></div>
        </div>
    </div>
  )
}
