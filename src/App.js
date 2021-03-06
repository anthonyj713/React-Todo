import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const tasks = [
  {
    name: 'Dishes',
    id: 1,
    completed: false
  },
  {
    name: 'Laundry',
    id: 2,
    completed: false
  },
  {
    name: 'Study',
    id: 3,
    completed: false
  },
  {
    name: 'Work Out',
    id: 4,
    completed: false
  },
  {
    name: 'Eat',
    id: 5,
    completed: false
  },
  {
    name: 'Sleep',
    id: 6,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();
      this.state = {
        todoList: tasks
      };
    }

toggleTodo = clickedId => {
  console.log("helloooo")
    const newTodoList = this.state.todoList.map(todo => {
      if (todo.id === clickedId) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });

    this.setState({
      todoList: newTodoList
    });
};

  addNewTodo = todoText => {
    const newTodo = {
      name: todoText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  clearCompleted = () => {
    const newTodoList = this.state.todoList.filter(todo => {
        return !todo.completed
      });
      this.setState({
        todoList: newTodoList
      })
    }


  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTodo={this.addNewTodo}/>
        <TodoList
          tasks={this.state.todoList}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }
}

export default App;
