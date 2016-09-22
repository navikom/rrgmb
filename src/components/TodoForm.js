/**
 * Created by Andrei Nadchuk on 18.09.16.
 * email: navikom11@mail.ru
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl, Row, Col, Button } from 'react-bootstrap';

export default class TodoForm extends React.Component {
    createTodo ( e ) {
        e.preventDefault();

        let input = ReactDOM.findDOMNode( this.input );

        let todo = input.value;

        let { dispatch, actions } = this.props;

        dispatch( actions.createTodo( { todo } ) );

        input.value = '';
    }

    render () {
        return (
            <Form onSubmit={::this.createTodo}>

                <FormGroup controlId="formBasicText">
                    <Col md={10}>
                        <FormControl type="text" placeholder="A todo item..." ref={(input) => this.input = input}/>
                    </Col>
                    <Col md={2}><Button bsStyle="success" type="submit">Create Todo</Button></Col>
                </FormGroup>


            </Form>
        );
    }
}