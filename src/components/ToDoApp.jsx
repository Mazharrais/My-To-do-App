import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaArrowAltCircleRight } from "react-icons/fa";
import {addTodo, updateSearchTodo} from '../Redux/Action/action';
import FilterButton from './FilterButton';

const ToDoApp = () => {
  const [todoText, setTodoText] = useState("");
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

   const handleAddTodo = (text) =>{
      dispatch(addTodo(text));
   }

   const saveTodo = ()=>{
    if(todoText.trim() !== ""){
      handleAddTodo(todoText.trim());
      setTodoText("")
    }
   }
   const  handleSearchTodo = (value)=>{
    dispatch(updateSearchTodo(value))
   }

  return (
    <div className='max-w-4xl max-auto sm:mt-8 p-4 bg-blue-200 rounded'>
    <h2 className='mt-3 mb-6 text-2xl font-bold text-center
     text-blue-700 uppercase'>Todo List App...!</h2>

     {/* Input Button */}
     
     <div className='flex item-center mb-4'>
     <input type='text' placeholder='Enter your Task'
         className='flex grow p-2 border-b-2 border-grey-300 rounded focus:outline-none focus:border-blue-500'
           name='text'
           id='addTodo'   
           onChange={(e)=> setTodoText(e.target.value)}  />
          <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue
           focus:outline-none' onClick={saveTodo}>
            <FaArrowAltCircleRight /></button>
     </div>
  
       {/* Filter Search */}
       
       <div className='flex items-center justify-between flex-wrap'> 
       <FilterButton />
       </div>
    
         {/* Search */}

         <div className='flex items-center justify-end mt-4 sm:mt-0'>
          <input 
          type='text'
          placeholder='search'
          value={searchText}
          name='text'
          onChange={(e)=>handleSearchTodo(e.target.value)}

          />

         </div>



    </div>
  )
}

export default ToDoApp;
