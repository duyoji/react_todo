import React from 'react';

class TodoItem extends React.Component {

    static get propTypes() {
        return {
            onChangeStatus: React.PropTypes.func.isRequired
        };
    }

    constructor(props) {
        super(props);
    }

    _onChangeStatus (event) {
        console.log(this);
    }

    render() {
        var title     = this.props.todo.title;
        var hasDone   = this.props.todo.done;
        var doneText  = hasDone ? 'done' : 'not done';

        return (
            <p>
                <input type="checkbox" onClick={this._onChangeStatus} checked={hasDone}/>
                title : {title}  |  {doneText}
            </p>
        );
    }
}

export default TodoItem;
