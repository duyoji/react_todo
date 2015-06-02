'use strict';

import React from 'react';

class Button extends React.Component {

    constructor (props) {
        super(props);
    }

    onClick (event) {
        this.props.onClick(event);
    }

    render() {
        return this.renderButtonByEnable();
    }

    renderButtonByEnable () {
        if (this.props.enable) {
            return <input type="button"
                onClick={this.onClick.bind(this)}
                value={this.props.title}/>;
        } else {
            return <input type="button"
                onClick={this.onClick.bind(this)}
                value={this.props.title}
                disabled/>;
        }
    }
}

Button.propTypes = {
    title: React.PropTypes.string.isRequired,
    enable: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default Button;
