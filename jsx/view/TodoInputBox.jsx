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

    onChange (event) {
        console.log('onChange');
        this.setState({title: event.target.value});
    }

    onKeyDown (event) {
        console.log('onKeyDown');
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
            </p>
        );
    }
}

TodoInputBox.propTypes = {
    onCreate: React.PropTypes.func.isRequired
};

export default TodoInputBox;
