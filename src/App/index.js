import React from 'react';
import AddTodo from '../AddTodo/AddTodo.js';
import Todo from '../Todo/Todo.js';
import Todos from '../Todos/Todos.js';
import './App.css';
 

function App() {
  return (
    <div className="container" data-testid="app-div-1">
      <h1 className="text-center" data-testid="app-h1-1">To-Do List</h1>
      <Todos />
    </div>
  )
} 

/* ⚠️ This rendering was, at one point, H1 title, <Todos />  < Todo addTask={addTask} /> and < AddTodo / >. The objective was dependency inversion, so any component being worked on or altered would not impact the App as a whole. 
*/
export default App;
