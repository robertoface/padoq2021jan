import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center">ToDoist</h1>
        <Todos />
      </div>
    );
  }
}

export class Todos extends Component {
  state = {
    addTodoValue: "",
    todos: []
  }
  
  getTime() {
    let d = new Date();
    var n = d.getTime();
    return n;
  }
  
  handleDelete = todo => {
    const todos = this.state.todos.filter(t => t.id !== todo);
    this.setState({ todos });
  }

  handleDone = todo => {
    const todos = [...this.state.todos];
    todos.map(t => {
      if (t.id === todo.id) {
        t.isDone = !t.isDone;
      }
      
      return t;
    });
    
    this.setState({todos});
  }
  
  addNewTodo = value => {
    if (value) {
      const todos = [...this.state.todos];
      todos.push(
        {
          id: this.getTime(),
          value: value,
          isDone: false
        }
      );
      
      this.setState({ addTodoValue: "", todos })
    } else {
      console.log("Please Add Todo Text");
    }
  }

  render() {
    return (
      <table className="table">
          <tbody>
            {this.state.todos.map((todo, index) => (
              <tr key={todo.id}>
                <Todo index={index+1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
              </tr>
            ))}
            <tr>
              <td colSpan="4" className="text-center">
                <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} />
              </td>
            </tr>
          </tbody>
      </table>
    );
  }
}

class Todo extends Component {
  render() {
    return (
      <React.Fragment >
        <td style={{ width: 10 }} className="text-center">
          {this.props.index}
        </td>
        <td style={{ width: 15 }} className="text-center">
          <input type="checkbox" defaultChecked={this.props.todo.isDone}  onChange={() => this.props.fooDoneDone(this.props.todo)} />
        </td>
        <td>
          {
            this.renderTodo()
          }
        </td>
        <td style={{ width: 100 }} className="text-center">
          <button onClick={() => this.props.fooDelete(this.props.todo.id)} className="btn btn-danger btn-sm">Delete</button>
        </td>
      </React.Fragment>
    );
  }

  renderTodo(){
    if(this.props.todo.isDone) {
      return <s>{this.props.todo.value}</s>;
    }
    
    return this.props.todo.value;
  }
}

class AddTodo extends Component {
  state = {
      defaultValue: "",
      value: this.props.addTodoValue
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  clearInput = () => {
    document.getElementById("todoValue").value = "";
    this.setState({value:""});
  }

  addTodo = () => {
    this.props.fooAddTodo(this.state.value);
    this.clearInput();
  }

  render() {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" id="todoValue" placeholder="ToDo" onChange={this.handleChange} />
        <div className="input-group-append">
          <button onClick={this.addTodo} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New ToDo</button>
        </div>
      </div>
    );
  }
}
