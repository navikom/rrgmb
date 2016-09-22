import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, Row, Col } from 'react-bootstrap';


export default class SearchTodos extends React.Component {
    searchTodos(e) {
        e.preventDefault();

        let input = ReactDOM.findDOMNode(this.input);

        let pattern = input.value;

        let { dispatch, actions } = this.props;

        dispatch(actions.searchTodos( pattern ));

    }

    render() {
        return (
            <FormGroup>
                <Col md={4}>
                    <Row>
                        <Col md={12}>
                            <FormControl type="text" placeholder='Search...' ref={(input) => this.input = input} onChange={::this.searchTodos} />
                        </Col>
                    </Row>

                </Col>

            </FormGroup>
        );
    }
}