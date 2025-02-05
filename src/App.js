import logo from './logo.svg';
import './App.css';
import ToDoRowItem from './components/ToDoRowItem';
function App() {
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
                </tr>
              </thead>
              <tbody>
                <ToDoRowItem/>
                <tr>
                  <td scope="row">Task 2</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td scope="row">Task 3</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
    </div>
  );
}

export default App;
