import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';



const PrintTask = () => {
  const localData = localStorage.getItem('task')

 
  
  return (
    <div>
      <ul class="todoList">
          <li className='done'>Todo Item 1 (Done example)<span> <i class="fa fa-trash"></i></span></li>
          <li>Todo Item 2<span> <i class="fa fa-trash"></i></span></li>
        </ul>
    </div>
  );
}


const EnterTasks = () => {
  const [userTask, setUserTask] = useState('');
  const [taskArray, setTaskArray] = useState([]);
  useEffect(() => {
    
    // const task = { taskName: userTask, completed: false }
    localStorage.setItem('task', JSON.stringify(taskArray))
    
  }, [taskArray]);
  
  function saveTask() {
    
    const localData = JSON.parse(localStorage.getItem('task'))
    setTaskArray([...localData, { taskName: userTask, completed: false, _id: uuidv4()  }])
    // setTaskArray(taskArray)
console.log(localData);

   
   
}
  

  return (
    <div class="inputField">
      <input type="text" placeholder="Enter new task" onChange={(e) => setUserTask(e.target.value)} value={userTask} />
     <p> {userTask}</p>
          <button onClick={saveTask}> <i class="fas fa-plus"></i> </button>
        </div>
  );
}






function App() {
  return (
    <div class="wrapper">
        <header>Todo List</header>
        <EnterTasks/>
        <PrintTask />
      <div class="footer">
        <span>You have 1 pending tasks.</span>
        <button >Clear Done</button>
      </div>
    </div>
  );
}

export default App;
