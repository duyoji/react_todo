'use strict';

import React from 'react';
import Todo from '../model/Todo';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
    }

    onChangeStatus () {
        this.props.onChangeStatus(this.props.todo.id);
    }

    onDelete () {
        if (confirm('Are you sure?')) {
            this.props.onDelete(this.props.todo.id);
        }
    }

    render() {
        var hasDone = this.props.todo.done;
        var doneText = hasDone ? 'done' : 'not done';

        return (
            <p>
                <input type="checkbox"
                    onChange={this.onChangeStatus.bind(this)}
                    checked={hasDone} />
                    {this.renderTitle()} | {doneText}
                |
                <input type="button"
                    onClick={this.onDelete.bind(this)}
                    value="delete" />
            </p>
        );
    }

    renderTitle() {
        var title = this.props.todo.title;
        var hasDone = this.props.todo.done;

        if (hasDone) {
            return <s>title | {title}</s>;
        } else {
            return <span>title | {title}</span>;
        }
    }
}
TodoItem.propTypes = {
    onChangeStatus: React.PropTypes.func.isRequired,
    onDelete      : React.PropTypes.func.isRequired,
    todo          : Todo.propTypes
};

export default TodoItem;
