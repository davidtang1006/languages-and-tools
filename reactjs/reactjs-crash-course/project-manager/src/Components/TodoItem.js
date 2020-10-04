/* ./src/Components/TodoItem.js */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TodoItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Project">
        {this.props.todo.title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
}

export default TodoItem;