'use strict';

import React from 'react';

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-'
        + s4() + '-' + s4() + s4() + s4();
}

class Todo {
    constructor (title = 'default title', hasDone = false) {
        this.id = guid();
        this.title = title;
        this.done = hasDone;
    }

    title (title) {
        this.title = title;
    }

    toggleStatus () {
        this.done = !this.done;
    }

    undone () {
        this.done = false;
    }

    done () {
        this.done = true;
    }
}

Todo.propTypes = React.PropTypes.shape({
    id   : React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    done : React.PropTypes.bool.isRequired
});

export default Todo;
