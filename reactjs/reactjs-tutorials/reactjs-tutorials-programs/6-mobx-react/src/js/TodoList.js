/* ./src/js/TodoList.js */
import React from "react";
import { observer } from "mobx-react";

@observer
export default class TodoList extends React.Component {
  createNew(e) {
    if (e.which === 13) {
      // Enter key is pressed
      this.props.store.createTodo(e.target.value);
      e.target.value = "";
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value;
  }

  toggleComplete(todo) {
    // We have this function so that the check box can change its state
    todo.complete = !todo.complete;
    // Aside from manually change the state here,
    // we can also fire off an action and let something outside the module handle it
  }

  render() {
    const { clearComplete, filter, filteredTodos, todos } = this.props.store;
    const todoLis = filteredTodos.map(todo => (
      <li key={todo.id}>
      <input type="checkbox" value={todo.complete} checked={todo.complete} onChange={this.toggleComplete.bind(this, todo)}/>{todo.value}</li>
    ));
    // We will now actually print the to-do list
    return <div>
      <h1>To-dos</h1>
      <div>filter: {filter}</div>
      <input className="filter" value={filter} onChange={this.filter.bind(this)}/>
      <input className="create" onKeyPress={this.createNew.bind(this)}/>
      <u1>{todoLis}</u1>
      <a href="#" onClick={clearComplete}>Clear Completed Item(s)</a>
    </div>
    // We do not need to have clearAll.bind(this)
    // With arrow function, this is automatically done
  }
}