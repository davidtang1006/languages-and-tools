/* ./action/TodoActions.js */
import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos() {
  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 421254297,
        text: "Go Shopping Again",
        complete: false
      },
      {
        id: 423552694,
        text: "Hug Wife",
        complete: true
      }
    ]});
    if (false) {
      dispatcher.dispatch({type: "FETCH_TODOS_ERROR"});
    }
  }, 1000);
}