/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = [];
  }
  add(todo) {
    this.todoList.push(todo);
  }
  remove(idx) {
    this.todoList.splice(idx, 1);
  }
  update(idx, updatedTodo) {
    if (updatedTodo === "Invalid Task" || idx >= this.todoList.length) {
      return;
    }
    this.todoList[idx] = updatedTodo;
  }
  getAll() {
    return this.todoList;
  }
  get(idx) {
    if (idx >= this.todoList.length) {
      return null;
    }
    return this.todoList[idx];
  }
  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
