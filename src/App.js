import logo from './logo.svg';
import './App.css';
import ToDoTable from './components/ToDoTable';
function App() {
  const todos = [{rownum:'1',taskName:'Study React',taskAssigned:'user1'},
                 {rownum:'2',taskName:'Go To Gym',taskAssigned:'user1'}, 
                 {rownum:'3',taskName:'Study Angular',taskAssigned:'user2'},
                 {rownum:'4',taskName:'Charge EV',taskAssigned:'user2'}];
  return (
    <div className='mt-5 container'>
        <div className="card">
          <div className="card-header">
            Your Todo's
          </div>
          <div className="card-body">
            <ToDoTable todos={todos}/>
          </div>
        </div>
        
    </div>
  );
}

export default App;
