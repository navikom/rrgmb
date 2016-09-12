
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux/reducers';

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState);

    // When using WebPack, module.hot.accept should be used. In LiveReactload,
    // same result can be achieved by using "module.onReload" hook.
    if (module.onReload) {
        module.onReload(() => {
            const nextReducer = require('../redux/reducers');
            store.replaceReducer(nextReducer.default || nextReducer);

            // return true to indicate that this module is accepted and
            // there is no need to reload its parent modules
            return true
        });
    }

    return store;
}