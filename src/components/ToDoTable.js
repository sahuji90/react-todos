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
                <ToDoRowItem rownum={props.todos[0].rownum}
                              taskName={props.todos[0].taskName}
                              taskAssigned={props.todos[0].taskAssigned}/>
                <ToDoRowItem rownum={props.todos[1].rownum}
                              taskName={props.todos[1].taskName}
                              taskAssigned={props.todos[1].taskAssigned}/>
                <ToDoRowItem rownum={props.todos[2].rownum}
                              taskName={props.todos[2].taskName}
                              taskAssigned={props.todos[2].taskAssigned}/>
                
              </tbody>
            </table>
    )
}
export default ToDoTable;