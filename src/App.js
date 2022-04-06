import { useState, useEffect, useContext } from 'react';
import TodoContextProvider from './context/TodoContext';
import { v4 as uuidv4 } from 'uuid';
import {TodoContext} from './context/TodoContext'



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
        {localDataArray.map((todoItems, index) => (<li onClick={(event) => completeTask(todoItems.completed, index, event)} className={`${todoItems.completed ? 'done' : ''}`} >{todoItems.taskName}<span onClick={(event)=>deleteTask(todoItems._id, event)}> <i class="fa fa-trash"></i></span></li>))}
          
        </ul>
    </div>
  );
}


const EnterTasks = () => {
  const [userTask, setUserTask] = useState('');
  const { userTaskArray, setUserTaskArray } = useContext(TodoContext);
  useEffect(() => {
    
    // const task = { taskName: userTask, completed: false }
    localStorage.setItem('task', JSON.stringify(userTaskArray));
    
  }, [userTaskArray]);
  
  function saveTask() {
    
    const localData = JSON.parse(localStorage.getItem('task'))
    setUserTaskArray([...localData, { taskName: userTask, completed: false, _id: uuidv4()  }])
    // setTaskArray(taskArray)
// console.log(localData);

   
   
}
  

  return (
    <div class="inputField">
      <input type="text" placeholder="Enter new task" onChange={(e) => setUserTask(e.target.value)} value={userTask} />
     
          <button onClick={saveTask}> <i class="fas fa-plus"></i> </button>
        </div>
  );
}



const ClearPending = () => {
  const { userTaskArray, setUserTaskArray } = useContext(TodoContext);
  function clearDone() {
    let newArr = userTaskArray.filter(function (item) {
      return item.completed === false
    })
    setUserTaskArray(newArr)

  
}

  return (
    <div>
      <span>You have 1 pending tasks.</span>
        <button onClick={clearDone}>Clear Done</button>
      
    </div>
  );
}






function App() {
  return (
    <div class="wrapper">
      <TodoContextProvider>
        <header>Todo List</header>
        <EnterTasks/>
        <PrintTask />
      <div class="footer">
        <ClearPending/>
        </div>
        </TodoContextProvider>
    </div>
  );
}

export default App;
