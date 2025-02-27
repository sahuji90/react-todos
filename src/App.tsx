import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoTable from './components/ToDoTable';
import NewToDoForm from './components/NewToDoForm';
function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
const [todos,setTodos] = useState(
    [{rowNumber:1, rowDescription:'Study Something New', rowAssigned:'Sunil'},
    {rowNumber:2, rowDescription:'Come up with New memes', rowAssigned:'Sunil'}, 
    {rowNumber:3, rowDescription:'Share memes on Intech ke dushman', rowAssigned:'Sunil'},
    {rowNumber:4, rowDescription:'Intech se kaise peehca chudaaye', rowAssigned:'Sunil'}]
  ) 
  const addTodo = (description: string, assigned: string) => {
    let rowNumber = 0;

    if(todos.length > 0){
      rowNumber = todos[todos.length-1].rowNumber+1;
    }else{
      rowNumber = 1;
    }
      const newTodo = {rowNumber: rowNumber, rowDescription: description, rowAssigned: assigned};
      setTodos([...todos,newTodo]);
    
  };
  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function(value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }
  return (
    <div className='mt-5 container'>
        <div className="card">
          <div className="card-header">
            Your Todo's
          </div>
          <div className="card-body">
            <ToDoTable todos={todos} deleteTodo={deleteTodo}/>
            <button onClick={()=>setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary mt-3'>
              {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
            </button>
          </div>
          {showAddTodoForm &&
            <NewToDoForm addTodo={addTodo}/>
          }
          
        </div>
        
    </div>
  );
}

export default App;
