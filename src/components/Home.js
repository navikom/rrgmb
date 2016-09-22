import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions';
import { Grid, Badge } from 'react-bootstrap';

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
            <Grid>
                <h3 className="text-center">Todo Home</h3>
                <p className="text-center">You have all records: <Badge bsClass="badge warning">{result.length}</Badge></p>
                <p className="text-center">Completed: <Badge bsClass="badge success">{completed}</Badge></p>
            </Grid>

        )
    }


}