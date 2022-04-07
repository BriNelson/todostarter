import { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from './context/TodoContext';


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
export default EnterTasks;