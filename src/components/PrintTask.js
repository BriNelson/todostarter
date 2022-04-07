import { useState, useEffect, useContext } from 'react';

import {TodoContext} from '../context/TodoContext'



const PrintTask = () => {
    const { userTaskArray, setUserTaskArray } = useContext(TodoContext);
    const [localDataArray, setLocalDataArray] = useState([]);
   
    
    useEffect(() => {
      const localData = JSON.parse(localStorage.getItem('task'))
      setLocalDataArray(localData)
      console.log(userTaskArray);
      
   }, [userTaskArray]);
    
    function deleteTask(id, event) {
      let newArr = userTaskArray.filter(function (item) {
        return item._id !== id
      })
      console.log(event.target)
      setUserTaskArray(newArr)
    }
  
    function completeTask(completedItem, index, event) {
      if (event.target.matches("li")) {
      
        if (completedItem === false) { localDataArray[index].completed = true } else if (completedItem === true) { localDataArray[index].completed = false }
      
        console.log(event.target)
      
        setUserTaskArray(localDataArray)
      }
    }
  
    return (
      <div>
        <ul class="todoList">
          {localDataArray.map((todoItems, index) => (<li onClick={(event) => completeTask(todoItems.completed, index, event)} className={`${todoItems.completed ? 'done' : ''}`} >{todoItems.taskName}<span className="editBtn"><i class="fa fa-edit"></i></span><span className="deleteBtn" onClick={(event)=>deleteTask(todoItems._id, event)}> <i class="fa fa-trash"></i></span></li>))}
            
          </ul>
      </div>
    );
}
  



export default PrintTask;
