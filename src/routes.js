import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { Home, Bar } from './components'
import { App, AllTodos, TodoEdit } from './containers'


export default (

    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="todos" component={AllTodos}/>
        <Route path='todo/edit/:id' component={TodoEdit} />
        <Route path="bar" component={Bar}/>
    </Route>
)

