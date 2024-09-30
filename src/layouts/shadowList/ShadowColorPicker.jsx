import React from 'react'
import { useDispatch } from 'react-redux';
import { updateShadow } from '../../features/shadow';

export default function ShadowColorPicker({inputData, shadowID}) {

    const dispatch = useDispatch();

    function handleInput(e){
  
      dispatch(updateShadow({
        ...inputData,
        value : e.target.value,
        shadowID
  
      }))
    }

  return (
    <div className='mt-3'>
    <p>{inputData.name}</p>
    <div className='flex mt-2'> 
      <input 
        className='flex-grow border py-1 px-2 focus:outline-1 outline-gray-400'
        type='text'
        value={inputData.value}
        onChange={handleInput}
      />
      <input
      className='cursor-pointer h-[40px]'
      type='color'
        value={inputData.value}
        onChange={handleInput}          
      />
    </div>
</div>
  )
}
