import { render } from 'react-dom'
import routes from './routes'

render( routes, document.getElementById( 'root' ) );

if ( module.hot ) {
    module.hot.accept( './routes', () => {
        // reload routes again
        require( './routes' ).default;
        render( routes, document.getElementById( 'root' ) );
    } );
}