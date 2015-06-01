class Todo {
    constructor (title = 'default title', hasDone = false) {
        this.title = title;
        this.done  = hasDone;
    }

    update (title = this._title, hasDone = this.done) {
        this.title = title;
        this.done  = hasDone;
    }
}

export default Todo;
