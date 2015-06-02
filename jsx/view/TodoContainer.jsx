'use strict';

import React from 'react';
import TodoItem from './TodoItem';
import TodoInputBox from './TodoInputBox';
import Button from './Button';
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
        if ( !confirm('Are you sure?') ) {
            return
        }

        var todos = this.state.todos.filter((todo) => {
            return todoId !== todo.id;
        });
        this.setState({todos: todos});
    }

    onDeleteAllWithDone () {
        if ( !confirm('Are you sure?') ) {
            return
        }

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
        var hasDoneSomeTodo = this.state.todos.some((todo) => {
            return todo.done;
        });

        return (
            <div>
                <TodoInputBox onCreate={this.onCreate.bind(this)} />
                <Button
                    title="完了済み削除ボタン"
                    enable={hasDoneSomeTodo}
                    onClick={this.onDeleteAllWithDone.bind(this)} />
                <p>Todo一覧</p>
                {todoItems}
            </div>
        );
    }
}

export default TodoContainer;
