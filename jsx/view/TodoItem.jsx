import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var title = this.props.todo.title;
        var done  = this.props.todo.done ? 'done' : 'not done';

        return <p>title : {title}  |  {done}</p>;
    }
}

export default TodoItem;
