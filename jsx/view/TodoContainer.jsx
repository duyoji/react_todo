'use strict';

import React from 'react';
import TodoItem from './TodoItem';
import Todo from '../model/Todo';

class TodoContainer extends React.Component {

    constructor(props) {
        var todos = [];
        var i, n;
        for (i = 0, n = 10; i < n; i++) {
            todos.push(new Todo(`title-${i}`));
        }

        super(props);
        this.state = {todos: todos};
    }

    onChangeStatus (todoId) {
        var todos = this.state.todos.map((todo) => {
            if (todo.id === todoId) {
                todo.toggleStatus();
            }

            return todo;
        });

        this.setState({todos: todos});
    }

    onDelete (todoId) {
        var todos = this.state.todos.filter((todo) => {
            return todoId !== todo.id;
        });

        this.setState({todos: todos});
    }

    render() {
        var todoItems = this.state.todos.map((todo) => {
            return <TodoItem todo={todo}
                    key={todo.id}
                    onChangeStatus={this.onChangeStatus.bind(this)}
                    onDelete={this.onDelete.bind(this)} />;
        });

        return (
            <div>
                <p>Todo一覧</p>
                {todoItems}
            </div>
        );
    }
}

export default TodoContainer;
