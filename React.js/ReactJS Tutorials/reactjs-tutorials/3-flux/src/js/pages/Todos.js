/* ./src/js/pages/Todos.js */
import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this); // To type less
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {
    // When componentWillUnmount() does not exist
    // The following is the offending code
    // Every time we change our route and change back, a new Todos component get created
    // There may be two components (the new and the original Todos component) listen to the change, but the original one is not connected to the DOM tree
    TodoStore.on("change", this.getTodos);
    // console.log("Count:", TodoStore.listenerCount("change"))
    // This shows that every time we change our route and change back, the count of listener increases by one
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  reloadTodos() { 
    TodoActions.reloadTodos();
  }

  render() {
    const { todos } = this.state;
    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });
    return (
      <div>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}