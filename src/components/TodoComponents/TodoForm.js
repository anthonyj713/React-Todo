import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        };
    }

   handleChanges = e => {
       this.setState({
           newTodo: e.target.value
       });
   };

   handleSubmit = e => {
       e.preventDefault();
       this.props.addNewTodo(this.state.newTodo);
       this.setState({ newTodo: '' });
   };

render() {
    console.log('rendering form');
    return (
        <form onSubmit={this.handleSubmit}>
            <input
                type='text'
                name='newTodo'
                value={this.state.newTodo}
                onChange={this.handleChanges}
                />
                <button>Add To Do!</button>
        </form>
        );
    }
}

export default TodoForm;