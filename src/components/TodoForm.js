/**
 * Created by Andrei Nadchuk on 18.09.16.
 * email: navikom11@mail.ru
 */
import React from 'react';
import ReactDOM from 'react-dom';


export default class TodoForm extends React.Component {
    createTodo(e) {
        e.preventDefault();

        let input = ReactDOM.findDOMNode(this.input);

        let todo = input.value;

        let { dispatch, actions } = this.props;

        dispatch(actions.createTodo({ todo }));

        input.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={::this.createTodo}>
                    <input type="text" placeholder='A todo item...' ref={(input) => this.input = input} />
                    <button type="submit">Create Todo</button>
                </form>
            </div>
        );
    }
}