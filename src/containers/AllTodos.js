import React from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions';
import { Todo, TodoForm, SearchTodos } from '../components'
import { Grid, Row, Col, Alert } from 'react-bootstrap';


@connect( ( state ) => state )
export default class AllTodos extends React.Component {
    static fetchData ( store ) {
        let todos = actions.getTodos();
        return store.dispatch( todos );
    }

    render () {

        let { todos, dispatch } = this.props;
        let { result, error } = todos;

        let errors = error ?
            (
                <Alert bsStyle="danger">
                    {error.map(({ message }, i) => {
                        return <div key={i} className="text-center">{message}</div>
                    })}
                </Alert>
            ) : null;

        return (

            <Grid>
                <h2 className="text-center">Todo List</h2>
                {errors}
                <Row>
                    <Col>
                        <TodoForm dispatch={dispatch} actions={actions}/>
                    </Col>
                </Row>
                <Row>
                    <Col><SearchTodos dispatch={dispatch} actions={actions}/></Col>
                </Row>

                <br/>
                <Row>
                    <Col md={12}>
                        {typeof result.map === 'function' && result.map( ( todo ) => {
                            return <Todo key={todo._id} todo={todo} dispatch={dispatch} actions={actions}/>;
                        } )}
                    </Col>
                </Row>
            </Grid>

        );
    }
}