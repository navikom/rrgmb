/**
 * Created by Andrei Nadchuk on 18.09.16.
 * email: navikom11@mail.ru
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import actions from '../redux/actions';


@withRouter
class EditTodoForm extends React.Component {
    editTodo(e) {
        e.preventDefault();

        let input = ReactDOM.findDOMNode(this.input);
        let todo = input.value;
        let completed = this.checkbox.checked;

        let { dispatch } = this.props;
        let { _id } = this.props.todo;

        dispatch(actions.updateTodo({
            _id,
            todo,
            completed
        })).then(() => {
            this.props.router.push('/todos');
        });
    }

    componentWillReceiveProps(newProps) {
        let input = ReactDOM.findDOMNode(this.input);
        input.value = newProps.todo.todo;
        this.checkbox.checked = newProps.todo.completed;
    }

    render() {
        let { todo, completed } = this.props.todo;

        return (
            <div>
                <form onSubmit={::this.editTodo}>
                    <h6>Todo text</h6>
                    <input type='text' placeholder='A todo item...' defaultValue={todo} ref={(input) => this.input = input}/>
                    <br/>
                    <label>
                        <input type="checkbox" defaultChecked={completed} ref={(checkbox) => { this.checkbox = checkbox; }}/>
                        -Mark as Completed
                    </label>
                    <br/>
                    <button type='submit'>Update Todo</button>
                </form>
            </div>
        );
    }
}


@connect((state) => state)
export default class EditTodo extends React.Component {
    static fetchData(store, params) {
        return store.dispatch(actions.getTodo({
            _id: params.id
        }));
    }

    render() {
        let { todos, dispatch } = this.props;
        let { result } = todos;

        return (
            <div>
                <h1>Editing Todo Item:</h1>
                <EditTodoForm todo={result} dispatch={dispatch} />
            </div>
        );
    }
}