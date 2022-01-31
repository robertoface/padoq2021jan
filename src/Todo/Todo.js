import React, {useReducer} from 'react';
import Todos from '../Todos/Todos.js'

function Todo (index, fooDelete, todoId) {

// const [state, dispatch] = useReducer (reducer, 
//     {isDone : false,
//     value : ""} )

// ⚠️ attempted to  apply a useReducer here, but the component began to bug. Tried to roll back, but did not seem satisfied with that either!!

function renderTodo (isDone, value) {
    if(isDone) {
        return <s>{value}</s>;
    }
    return value;
    }

// const reducer = (state, action) => {
//         switch (action.type) {
//             case "Completion" :
//                 return {isDone : !isDone,
//                 value : value}
//             case "Incomplete" :
//                 return {isDone : !isDone,
//                 value: value}
//             default:
//                 return state;
//         }
//     } 💭 useReducer rolled back, did not work in allocated time .


      return (
        <div >
          <td style={{ width: 10 }} className="text-center">
            {index}
          </td>
          <td style={{ width: 15 }} className="text-center">
            <input type="checkbox" defaultChecked={false}  onChange={() => ( Todos.todo )} />
          </td>
          <td className="list-item">
            {
              renderTodo()
            }
          </td>
          <td style={{ width: 100 }} className="text-center">
            <button onClick={() => fooDelete(todoId)} className="btn btn-danger btn-sm">Delete</button>
          </td> 
          
          {console.log("Todo") }
        </div>         
      ); 
    }

  export default Todo;  