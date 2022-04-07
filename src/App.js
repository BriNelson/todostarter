import TodoContextProvider from './context/TodoContext';
import PrintTask from './components/PrintTask';
import ClearPending from './components/ClearPending';
import EnterTasks from './components/ClearPending';



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
