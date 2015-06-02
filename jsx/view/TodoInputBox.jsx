'use strict';

import React from 'react';

class TodoInputBox extends React.Component {

    constructor (props) {
        super(props);
        this.state = {title: ''};
    }

    onCreate (title) {
        this.props.onCreate(title);
        this.setState({title: ''});
    }

    onDeleteAllWithDone () {
        if (confirm('Are you sure?')) {
            this.props.onDeleteAllWithDone();
        }
    }

    onChange (event) {
        this.setState({title: event.target.value});
    }

    onKeyDown (event) {
        var enterKeyCode = 13;
        var value = event.target.value;
        if (value && enterKeyCode === event.keyCode) {
            this.onCreate(value);
        }
    }

    render() {
        return (
            <p>
                <input type="text"
                    onChange={this.onChange.bind(this)}
                    onKeyDown={this.onKeyDown.bind(this)}
                    value={this.state.title}/>
                {this.renderDeleteAllButton()}
            </p>
        );
    }

    renderDeleteAllButton () {
        if (this.props.isEnableDeleteAll) {
            return <input type="button"
                onClick={this.onDeleteAllWithDone.bind(this)}
                value="完了済みを削除"/>;
        } else {
            return <input type="button"
                onClick={this.onDeleteAllWithDone.bind(this)}
                value="完了済みを削除"
                disabled/>;
        }
    }
}

TodoInputBox.propTypes = {
    isEnableDeleteAll: React.PropTypes.bool.isRequired,
    onCreate: React.PropTypes.func.isRequired,
    onDeleteAllWithDone: React.PropTypes.func.isRequired
};

export default TodoInputBox;
