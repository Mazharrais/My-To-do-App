import {ADD_TODO} from '../Action/actionTypes';
import { TOGGLE_TODO } from '../Action/actionTypes';

const initialState = { 
    todos : [],
    filter : 'All',
    search : ''
}

const todoReducer = (state = initialState, action) =>{

    switch(action.type){
        case ADD_TODO:
         return {
            todos:[...state.todos, {
               text: action.payload.text, completed: false 
            }],
            filter: state.filter,
            search: state.search
         }
         case TOGGLE_TODO:
            return{
                todos:state.todos.map((todo,index)=>index === action.payload.id ?
               {...todo, completed: !todo.completed} : todo  
            ),
                filter: state.filter,
                search: state.search
            }
    }
}