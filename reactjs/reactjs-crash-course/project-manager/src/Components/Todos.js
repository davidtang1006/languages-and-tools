/* ./src/Components/Todos.js */
import PropTypes from 'prop-types'; // New
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem key={todo.title} todo={todo}/>
        );
      });
    }
    return (
      <div className="Todos">
        <h3>TodoList</h3>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array,
}

export default Todos;