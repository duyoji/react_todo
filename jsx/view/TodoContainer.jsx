'use strict';

import React from 'react';
import TodoItem from './TodoItem';
import TodoInputBox from './TodoInputBox';
import Todo from '../model/Todo';

class TodoContainer extends React.Component {

    constructor(props) {
        var todos = [];
        var i, n;
        for (i = 0, n = 3; i < n; i++) {
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

    onDeleteAllWithDone () {
        var todos = this.state.todos.filter((todo) => {
            return !todo.done;
        });

        this.setState({todos: todos});
    }

    onCreate (title) {
        this.state.todos.push( new Todo(title) );

        this.setState({todos: this.state.todos});
    }

    render() {
        var todoItems = this.state.todos.map((todo) => {
            return <TodoItem todo={todo}
                    key={todo.id}
                    onChangeStatus={this.onChangeStatus.bind(this)}
                    onDelete={this.onDelete.bind(this)} />;
        });
        var isEnableDeleteAll = this.state.todos.some((todo) => {
            return todo.done;
        });

        return (
            <div>
                <TodoInputBox
                    isEnableDeleteAll={isEnableDeleteAll}
                    onCreate={this.onCreate.bind(this)}
                    onDeleteAllWithDone={this.onDeleteAllWithDone.bind(this)}/>
                <p>Todo一覧</p>
                {todoItems}
            </div>
        );
    }
}

export default TodoContainer;
