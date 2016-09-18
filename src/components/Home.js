import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions';

@connect((state) => state)
export default class Home extends React.Component {
    static fetchData(store) {
        let todos = actions.getTodos();
        return store.dispatch(todos);
    }

    getCompleted( todos ){

        let completed = 0;

        todos.map( todo => {
            if(todo.completed){
                completed++;
            }
        });

        return completed
    }

    render(){

        const { result } = this.props.todos;

        const completed = this.getCompleted(result);

        return(
            <div>
                You have all records: {result.length}
                <br/>
                Completed: {completed}
            </div>

        )
    }


}