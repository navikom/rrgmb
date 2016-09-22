/**
 * Created by Andrei Nadchuk on 18.09.16.
 * email: navikom11@mail.ru
 */
import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col, Checkbox, ButtonGroup, Button, Label } from 'react-bootstrap';


@withRouter
export default class Todo extends React.Component {
    toggleCompletion () {
        let { _id, todo } = this.props.todo;
        let { dispatch, actions } = this.props;

        dispatch( actions.updateTodo( {
            _id,
            todo,
            completed : this.input.checked
        } ) );
    }

    removeTodo () {
        let { _id } = this.props.todo;
        let { dispatch, actions } = this.props;

        dispatch( actions.removeTodo( { _id } ) );
    }

    editTodo () {
        let path = `/todo/edit/${this.props.todo._id}`;
        this.props.router.push( path );
    }

    render () {
        let { todo, completed } = this.props.todo;
        let done = 'checkbox' + ( completed ? ' completed' : '');

        return (
            <Row>
                <Col md={8}>
                    <Checkbox
                        bsClass={done}
                        onChange={::this.toggleCompletion}
                        inputRef={(input) => { this.input = input; }}
                        checked={completed}
                    >
                        {todo}
                    </Checkbox>

                </Col>
                <Col md={4}>
                    <ButtonGroup>
                        <Button onClick={::this.removeTodo}>Remove</Button>
                        <Button onClick={::this.editTodo}>Edit</Button>
                    </ButtonGroup>
                </Col>

            </Row>

        );
    }
}