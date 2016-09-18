/**
 * Created by Andrei Nadchuk on 18.09.16.
 * email: navikom11@mail.ru
 */
import React from 'react';
import { withRouter } from 'react-router';


@withRouter
export default class Todo extends React.Component {
    toggleCompletion() {
        let { _id } = this.props.todo;
        let { dispatch, actions } = this.props;

        dispatch(actions.updateTodo({
            _id,
            completed: this.input.checked
        }));
    }

    removeTodo() {
        let { _id } = this.props.todo;
        let { dispatch, actions } = this.props;

        dispatch(actions.removeTodo({ _id }));
    }

    editTodo() {
        let path = `/todo/edit/${this.props.todo._id}`;
        this.props.router.push( path );
    }

    render() {
        let { todo, completed } = this.props.todo;
        let style = {
            textDecoration: completed ? 'line-through' : null
        };

        return (
            <div>
                <label style={style} >
                    <input type="checkbox"
                           onChange={::this.toggleCompletion}
                           ref={(input) => { this.input = input; }}
                           checked={completed}/>
                    {todo}
                </label>
                <button onClick={::this.removeTodo} style={{marginRight: 12.5}}>Remove</button>
                <button onClick={::this.editTodo}>Edit</button>
            </div>
        );
    }
}