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

function createLocalStorageKey(id) {
    return `react-todo-${id}`;
}

class Todo {
    constructor (title = 'default title', hasDone = false, id = guid()) {
        this.id = id;
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

    save () {
        var saveData = {
            id    : this.id,
            title : this.title,
            done  : this.done
        };

        window.localStorage.setItem(
            createLocalStorageKey(this.id),
            JSON.stringify(saveData)
        );
    }

    remove () {
        window.localStorage.removeItem( createLocalStorageKey(this.id) );
    }

    // TODO create TodoCollection and move this method into it.
    static fetch () {
        var allKeys  = Object.keys(localStorage);
        var todoKeys = allKeys.filter(function (key) {
            return key.match(/^react-todo-[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/);
        });
        var todos = todoKeys.map(function (key) {
            var data = JSON.parse( window.localStorage.getItem(key) );

            return new Todo(data.title, data.done, data.id);
        });

        return todos;
    }
}

Todo.propTypes = React.PropTypes.shape({
    id   : React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    done : React.PropTypes.bool.isRequired
});

export default Todo;
