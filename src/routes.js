import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App, Home, AllTodos, Bar } from './components'


export default (

    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="todos" component={AllTodos}/>
        <Route path="bar" component={Bar}/>
    </Route>
)

