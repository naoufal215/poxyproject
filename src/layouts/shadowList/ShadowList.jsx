import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Shadow from './Shadow';
import { addShadow } from '../../features/shadow';

export default function ShadowList() {

  const shadowState = useSelector(state => state.shadows);

  const dispatch = useDispatch();


  return (
    <div>
        <div className='flex justify-between p-5 border-b border-gray-300'>
            <p
              className='font-bold text-lg'
            >
                Customize shadows
            </p>
            <button
              className='py-1 px-3 text-sm rounded bg-blue-600 focus:outline-none focus:ring-4
              focus:ring-offset-2 hover:bg-blue-700 text-white'

              onClick={()=>dispatch(addShadow())}
            >
                Add a shadow
            </button>
        </div>
        <ul>
          {shadowState.map(
            (shadow, index)=>(
              <Shadow 
                panelNumber={index+1}
                shadow={shadow}
                key={shadow.id}
              />
            )
          )}
        </ul>
    </div>
  )
}
