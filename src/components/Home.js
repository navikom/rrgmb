import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {increase, decrease} from '../redux/actions'

class Home extends React.Component {

    render(){
        const { number, increase, decrease } = this.props;
        return(
            <div>
                Some state changes:
                {number}
                <button onClick={() => increase(1)}>Increase</button>
                <button onClick={() => decrease(1)}>Decrease</button>
            </div>

        )
    }


}


export default connect(
    state => ({ number : state.update.number }),
    {increase, decrease }
)( Home )