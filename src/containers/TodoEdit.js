import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import actions from '../redux/actions';
import { Grid, Form, FormGroup, FormControl, Col, Button, ControlLabel, Checkbox, Alert } from 'react-bootstrap';


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
        })).then( () => {

            if(todo.length > 0){
                this.props.router.push('/todos');
            }
        });
    }

    componentWillReceiveProps(newProps) {
        let input = ReactDOM.findDOMNode(this.input);
        input.value = newProps.todo.todo;
        this.checkbox.checked = newProps.todo.completed;
    }

    render() {
        let { todo:{todo, completed}, error } = this.props;


        let errors = error ?
            (
                <Alert bsStyle="danger">
                    {error.map(({ message }, i) => {
                        return <div key={i} className="text-center">{message}</div>
                    })}
                </Alert>
            ) : null;

        return (
                <Form onSubmit={::this.editTodo}>

                    {errors}
                    <FormGroup controlId="formHorizontal">
                        <Col componentClass={ControlLabel} sm={2}>
                            Todo text
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                type="text"
                                placeholder='A todo item...'
                                ref={(input) => { this.input = input; }}
                                defaultValue={todo}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox type="checkbox" defaultChecked={completed} inputRef={(checkbox) => { this.checkbox = checkbox; }}>

                                -Mark as Completed
                                </Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Update Todo
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
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
        let { result, error } = todos;
        return (
            <Grid>
                <h3 className="text-center">Editing Todo Item</h3>
                <br/>
                <EditTodoForm todo={result} error={error} dispatch={dispatch} />
            </Grid>
        );
    }
}