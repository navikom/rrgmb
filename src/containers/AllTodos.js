import React from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions';
import { Todo, TodoForm, SearchTodos } from '../components'


@connect((state) => state)
export default class AllTodos extends React.Component {
    static fetchData(store) {
        let todos = actions.getTodos();
        return store.dispatch(todos);
    }

    render() {

        let { todos, dispatch } = this.props;
        let { result, error } = todos;

        let errors = null;

        return (

            <div>
                <TodoForm dispatch={dispatch} actions={actions} />
                <br/>
                <SearchTodos dispatch={dispatch} actions={actions} />
                <br />
                {typeof result.map === 'function' && result.map((todo) => {
                    return <Todo key={todo._id} todo={todo} dispatch={dispatch} actions={actions} />;
                })}
            </div>

        );
    }
}