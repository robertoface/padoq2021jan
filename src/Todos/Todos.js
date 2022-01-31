import React from 'react';
import Todo from '../Todo/Todo.js';
import AddTodo from '../AddTodo/AddTodo.js';

function Todos () {

const listState = {
  addTodoValue: "",
  todos: []
}
//      💭 can apply useReducer to `listState= { addTodoValue , todos []}` via Switch statement. More wordy but better for SOLID principles. 

function getTime () {  
  let d = new Date();
  var n = d.getTime();
  return n;
}     // ⚠️ the role of getTime() and Date() in the Todos component seemed out of place! It believe it is used to keep the items in some sort of consistent order. 
 
function handleDelete (todo) {
  const todos = this.state.todos.filter(t => t.id !== todo);
  this.setState({ todos });
} 

function handleDone (todo) {
  const todos = [...this.state.todos];
  todos.map(t => {
    if (t.id === todo.id) {
      t.isDone = !t.isDone;
    }  
    
    return t;
  });
  
  this.setState({todos});
}

function addNewTodo (value) {
  if (value) {
    const todos = [...this.state.todos];
    todos.push(
          {
            id: getTime(),
            value: value,
            isDone: false
          }
          );
          
          this.setState({ addTodoValue: "", todos })
        } else {
          console.log("Please Add Todo Text");
        }
  }
      
      // ⚠️ rolled back code, as would not render. 
      
  return (
    <table className="table">
        <tbody>
          {listState.todos.map((todo, index) => (
            <tr key={todo.id}>
              <Todo index={index+1} todo={todo} fooDelete={handleDelete} fooDoneDone={handleDone} />         {console.log("Todo in Todos") }
            </tr>
          ))}
          <tr>
            <td colSpan="4" className="text-center">
                <AddTodo addTask={addNewTodo}  />
              </td>
          </tr>
        </tbody>
    </table>
  );
}
      
export default Todos;