import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const ToDoApp = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  return (
    <div className='max-w-4xl max-auto sm:mt-8 p-4 bg-blue-200 rounded'>
    <h2 className='mt-3 mb-6 text-2xl font-bold text-center
     text-blue-700 uppercase'>Todo List App...!</h2>

     {/* Input Button */}
     
     <div className='flex item-center mb-4'>
     <input type='text' placeholder='Enter your Task'
         className='flex grow p-2 border-b-2 border-grey-300 rounded focus:outline none focus:border-blue-500'
           name='text'
           id='addTodo'   
           onChange={(e)=> setTodoText(e.target.value)}  />


     </div>


    </div>
  )
}

export default ToDoApp
