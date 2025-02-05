import logo from './logo.svg';
import './App.css';
import ToDoRowItem from './components/ToDoRowItem';
function App() {
  const todos = [{rownum:'1',taskName:'Study React',taskAssigned:'user1'},
                 {rownum:'2',taskName:'Go To Gym',taskAssigned:'user1'}, 
                 {rownum:'3',taskName:'Study Angular',taskAssigned:'user2'}];
  return (
    <div className='mt-5 container'>
        <div className="card">
          <div className="card-header">
            Your Todo's
          </div>
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Task</th>
                  <th scope="col">Actions</th>
                  <th scope="col">Assigned To</th>
                </tr>
              </thead>
              <tbody>
                <ToDoRowItem rownum={todos[0].rownum}
                              taskName={todos[0].taskName}
                              taskAssigned={todos[0].taskAssigned}/>
                <ToDoRowItem rownum={todos[1].rownum}
                              taskName={todos[1].taskName}
                              taskAssigned={todos[1].taskAssigned}/>
                <ToDoRowItem rownum={todos[2].rownum}
                              taskName={todos[2].taskName}
                              taskAssigned={todos[2].taskAssigned}/>
                <tr>
                  <td scope="row">Task 2</td>
                  <td>Study React</td>
                  <td>User1</td>
                </tr>
                <tr>
                  <td scope="row">Task 3</td>
                  <td>Go for a walk</td>
                  <td>User2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
    </div>
  );
}

export default App;
