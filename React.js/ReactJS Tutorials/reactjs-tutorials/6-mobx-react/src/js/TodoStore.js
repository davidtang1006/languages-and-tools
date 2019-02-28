/* ./src/js/TodoStore.js */
import { computed, observable } from "mobx";

class Todo {
  @observable value;
  @observable id;
  @observable complete;

  constructor(value) {
    this.value = value;
    this.id = Date.now();
    this.complete = false;
  }
}

class TodoStore {
  @observable todos = [];
  // With MobX, we can filter this list according to the filter in real time
  @observable filter = "";
  @computed get filteredTodos() { // The get syntax binds an object property to a function that will be called when that property is looked up
    var matchesFilter = new RegExp(this.filter, "i"); // We are going to do a case insensitive check
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
    // The filter() method creates a new array with all elements that pass the test implemented by the provided function
    // If no filter is set or the to-do list item matches the filter, the item will show
  }

  clearComplete = () => {
    // this.todos = [];
    // We cannot point this.todos to a new array because it will mess up the reference
    // This is the main difference between observable arrays and plain arrays
    const incompleteTodos = this.todos.filter(todo => !todo.complete);
    this.todos.replace(incompleteTodos); // We have replace method instead
  }

  createTodo(value) {
    this.todos.push(new Todo(value));
  }
}

var store = new TodoStore;
export default store;