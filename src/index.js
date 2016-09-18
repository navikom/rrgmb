import { render } from 'react-dom'
import routes from './routes'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, browserHistory } from 'react-router'
import { FetchData } from 'redux-fetch-data';

import './styles/app.css'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);


const provider = (
    <Provider store={store}>
        <div className='app'>
            <Router history={history} render={props => <FetchData {...props}/>} >
                {routes}
            </Router>
        </div>
    </Provider>
)

render( provider, document.getElementById( 'root' ) );

if ( module.hot ) {
    module.hot.accept( './routes', () => {
        // reload routes again
        require( './routes' ).default;
        render( provider, document.getElementById( 'root' ) );
    } );

    module.hot.accept('./redux/reducers', () => {
        // reload reducers again
        const nextReducer = require('./redux/reducers');
        store.replaceReducer(nextReducer.default || nextReducer);
    });
}