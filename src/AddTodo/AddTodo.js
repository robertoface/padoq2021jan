import React, {useState} from 'react';
import Todos from '../Todos/Todos';


 function AddTodo( {addTask} ) {

    const [ listInput, setListInput ] = useState(''); // reformatted AddToDo component with a useState hook. 

    const handleSubmit = (e) => {
        console.log("Clicks");
        e.preventDefault();
        addTask(listInput);
        setListInput("");
    }
function handleChange (e) {
      setListInput(e.currentTarget.value)
    }
    // ⚠️ attempted to keep as much of the legacy code as possible throughout the project. However in this instance, simpler to remove and make anew.  

      return (
        <div className="input-group mb-3" data-testid="addtodo-div-1">
          <form onSubmit={handleSubmit}>
            <input value = {listInput} type="text" placeholder="To-Do" onChange={handleChange} />
            <button className="btn btn-outline-secondary" type="button" onClick={handleSubmit} id="button-addon2"> New To-Do</button>
          </form>
        </div>
      );
    }
 
  export default AddTodo;

