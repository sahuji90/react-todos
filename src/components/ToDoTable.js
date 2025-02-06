import ToDoRowItem from './ToDoRowItem';
function ToDoTable(props){
    return(
        <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Task</th>
                  <th scope="col">Actions</th>
                  <th scope="col">Assigned To</th>
                </tr>
              </thead>
              <tbody>
                {props.todos.map((todo) => (
                    <ToDoRowItem  
                        rownum={todo.rownum} 
                        taskName={todo.taskName} 
                        taskAssigned={todo.taskAssigned}
                    />
                )
            )}
                
              </tbody>
            </table>
    )
}
export default ToDoTable;