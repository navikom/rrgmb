import React from 'react';
import ReactDOM from 'react-dom';


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
            <div>
                <input type="text" placeholder='Search...' ref={(input) => this.input = input} onChange={::this.searchTodos} />
                - Search
            </div>
        );
    }
}