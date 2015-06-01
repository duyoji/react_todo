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
        this.state = {todos:todos};
    }

    render() {
        var todoItems = this.state.todos.map((todo) => {
            return <TodoItem todo={todo} />
        });

        console.log(todoItems, this.state);

        return (
            <div>
                <p>Todo一覧</p>
                {todoItems}
            </div>
        );
    }
}

export default TodoContainer;