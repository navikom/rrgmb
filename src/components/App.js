import React from 'react'
import { Link, browserHistory } from 'react-router'

export default class App extends React.Component {

    render(){

        return (
            <div>
                <header>
                    Links:
                    {' '}
                    <Link to="/">Home</Link>
                    {' '}
                    <Link to="/todos">Todos</Link>
                    {' '}
                    <Link to="/bar">Bar</Link>
                </header>
                <div>
                    <button onClick={() => browserHistory.push('/todos')}>Go to /todos</button>
                </div>
                <div style={{ marginTop: '1.5em' }}>{this.props.children}</div>
            </div>
        )

    }

}