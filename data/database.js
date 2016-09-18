import pmongo from 'promised-mongo';

const db = pmongo('reduxtest', ['todos']);

export function getTodo(_id) {
    return db.todos.findOne({ _id: pmongo.ObjectId(_id) });
}

export function getTodos() {
    return db.todos.find({});
}

export function searchTodos( pattern ) {
    return db.todos.find({"todo": {'$regex' : pattern, '$options' : 'i'}});
}

export function createTodo(todo) {
    if (!todo) {
        return new Promise((resolve, reject) => {
            reject(`"todo" cannot be empty`);
        });
    }

    return db.todos.insert({ todo, completed: false });
}

export function removeTodo(_id) {
    return db.todos.remove({ _id: pmongo.ObjectId(_id) })
        .then(() => {
            return { _id: _id };
        });
}

export function updateTodo(_id, todo, completed) {
    let todoItem = {
        todo, completed
    };

    if (!_id) return new Promise((resolve, reject) => {
        reject(`"_id" required to update Todo Item\n`);
    });

    if (!todo) delete todoItem.todo;
    if (typeof completed !== 'boolean') delete todoItem.completed;

    return db.todos.findAndModify({
        new: true, // return the newly modified document
        query: { _id: pmongo.ObjectId(_id) },
        update: { $set: todoItem } }).then(({ value }) => value);
}