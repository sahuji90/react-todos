function ToDoRowItem(props){
    return (
        
            <tr>
                  <td scope="row">{props.rownum}</td>
                  <td>{props.taskName}</td>
                  <td>{props.taskAssigned}</td>
            </tr>
        
    )
}
export default ToDoRowItem;