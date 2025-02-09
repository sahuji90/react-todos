import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoTable from './components/ToDoTable';
import NewToDoForm from './components/NewToDoForm';
function App() {

  const [showTodoForm, setShowTodoForm] = useState(false);
const [todos,setTodos] = useState(
    [{rownum:1,taskName:'Study Something New',taskAssigned:'Sunil'},
    {rownum:2,taskName:'Come up with New memes',taskAssigned:'Sunil'}, 
    {rownum:3,taskName:'Share memes on Intech ke dushman',taskAssigned:'Sunil'},
    {rownum:4,taskName:'Intech se kaise peehca chudaaye',taskAssigned:'Sunil'}]
  ) 
  const addTodo = (description,assigned) => {
    let rowNumber = 0;

    if(todos.length > 0){
      rowNumber = todos[todos.length-1].rownum+1;
    }else{
      rowNumber = 1;
    }
      const newTodo = {rownum: rowNumber, taskName: description, taskAssigned: assigned};
      setTodos([...todos,newTodo]);
    
  };
  const deleteTodo = (deleteToDoRownumber) => {
    let filtered = todos.filter(function(value){
      return value.rownum !== deleteToDoRownumber;
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
            <button onClick={()=>setShowTodoForm(!showTodoForm)} className='btn btn-primary mt-3'>
              {showTodoForm ? 'Close New Todo' : 'New Todo'}
            </button>
          </div>
          {showTodoForm &&
            <NewToDoForm addTodo={addTodo}/>
          }
          
        </div>
        
    </div>
  );
}

export default App;
