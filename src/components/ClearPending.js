import { useState, useEffect, useContext } from 'react';

import {TodoContext} from '../context/TodoContext'

const ClearPending = () => {
    const { userTaskArray, setUserTaskArray } = useContext(TodoContext);
    const [pendingNum, setPendingNum] = useState('');
    function clearDone() {
      let newArr = userTaskArray.filter(function (item) {
        return item.completed === false
      })
      setUserTaskArray(newArr)
  
    
      
    }
  
  
    useEffect(() => {
      
      let newArr = userTaskArray.filter(function (item) {
        return item.completed === false
      })
      setPendingNum(newArr.length) 
      console.log(newArr.length)
   }, [userTaskArray]);
    
   
  
    return (
      <div>
        <span>You have {pendingNum} pending tasks.</span>
          <button onClick={clearDone}>Clear Done</button>
        
      </div>
    );
}
export default ClearPending;