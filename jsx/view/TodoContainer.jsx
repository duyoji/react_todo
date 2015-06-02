'use strict';

import React from 'react';
import TodoItem from './TodoItem';
import TodoInputBox from './TodoInputBox';
import Button from './Button';
import Todo from '../model/Todo';

class TodoContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {todos: Todo.fetch()};
    }

    onCreate (title) {
        var todo = new Todo(title);
        todo.save();

        this.state.todos.push( todo );
        this.setState({todos: this.state.todos});
    }

    onChangeStatus (todoId) {
        var todos = this.state.todos.map((todo) => {
            if (todo.id === todoId) {
                todo.toggleStatus();
                todo.save();
            }

            return todo;
        });

        this.setState({todos: todos});
    }

    onDelete (todoId) {
        if ( !confirm('Are you sure?') ) {
            return;
        }

        var todos = this.state.todos.filter((todo) => {
            if (todoId === todo.id) {
                todo.remove();
                return false;
            } else {
                return true;
            }
        });
        this.setState({todos: todos});
    }

    onDeleteAllWithDone () {
        if ( !confirm('Are you sure?') ) {
            return;
        }

        var todos = this.state.todos.filter((todo) => {
            if (todo.done) {
                todo.remove();
                return false;
            } else {
                return true;
            }
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
