import React from 'react'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import './styles/app.css'

import { App, Home, Foo, Bar } from './components'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store)


export default (
    <Provider store={store}>
        <div className='app'>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="foo" component={Foo}/>
                    <Route path="bar" component={Bar}/>
                </Route>
            </Router>
        </div>
    </Provider>
)

