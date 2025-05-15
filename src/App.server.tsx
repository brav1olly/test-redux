import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, type RootState } from "./slices";

export function Counter() {
   const value = useSelector((state: RootState) => state.value);
   const dispatch = useDispatch();
 
   return (
     <div>
       <h1>Counter: {value}</h1>
       <button onClick={() => dispatch(increment())}>+1</button>
       <button onClick={() => dispatch(decrement())}>-1</button>
     </div>
   );
 }