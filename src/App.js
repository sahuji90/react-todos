import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoTable from './components/ToDoTable';
import NewToDoForm from './components/NewToDoForm';
function App() {
const [todos,setTodos] = useState(
    [{rownum:'1',taskName:'Study React',taskAssigned:'user1'},
    {rownum:'2',taskName:'Go To Gym',taskAssigned:'user1'}, 
    {rownum:'3',taskName:'Study Angular',taskAssigned:'user2'},
    {rownum:'4',taskName:'Charge EV',taskAssigned:'user2'}]
  ) 
  const addTodo = (description,assigned) => {
    if(todos.length > 0){
      const newTodo = {rownum: todos.length+1, taskName: description, taskAssigned: assigned};
      setTodos([...todos,newTodo]);
    } 
  };
  return (
    <div className='mt-5 container'>
        <div className="card">
          <div className="card-header">
            Your Todo's
          </div>
          <div className="card-body">
            <ToDoTable todos={todos}/>
            <button class='btn btn-primary' onClick={addTodo}>Add new Todo</button>
          </div>
          <NewToDoForm addTodo={addTodo}/>
        </div>
        
    </div>
  );
}

export default App;
