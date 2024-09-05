import { CgNametag } from "react-icons/cg";
import { filterTodo, markAllCompleted } from "../Redux/Action/action";
import { useDispatch, useSelector } from "react-redux";


const FilterButton = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state => state.filter));
    const handleFilter = (filter)=>{
        dispatch(filterTodo(filter))
    }
  return (
    <div className="flex space-x-4 items-center">
       <select
          value={currentFilter}
          onChange={(e)=> handleFilter(e.target.value)}
          className="text-sm px-2 py-1 border-blue-300 focus:outline-none">
            <option value='ALL'>Default</option>
            <option value='COMPLETED'>Completed</option>
            <option value='INCOMPLETED'>Incompleted</option>
            </select> 
         
        <button onClick={()=>dispatch(markAllCompleted())} className="text-sm px-2 py-1
        bg-blue-700 text-white ml-2 rounded">Mark All Completed</button>


    </div>
  )
}

export default FilterButton;
