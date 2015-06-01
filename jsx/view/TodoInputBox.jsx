'use strict';

import React from 'react';

class TodoInputBox extends React.Component {

    constructor(props) {
        super(props);
    }

    onCreate () {
        this.props.onCreate('abc');
    }

    render() {

        return (
            <p>
                <input type="text"
                    onInput={this.onCreate.bind(this)} />
            </p>
        );
    }
}
TodoInputBox.propTypes = {
    onCreate: React.PropTypes.func.isRequired
};

export default TodoInputBox;
