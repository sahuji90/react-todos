import React from "react";

function ToDoRowItem(props: {
    rowNumber: number, 
    rowDescription: string, 
    rowAssigned: string, 
    deleteTodo: Function}) {
    return (
        
            <tr onClick={()=>props.deleteTodo(props.rowNumber)}>
                  <td scope="row">{props.rowNumber}</td>
                  <td>{props.rowDescription}</td>
                  <td>{props.rowAssigned}</td>
            </tr>
        
    )
}
export default ToDoRowItem;