import React from 'react'
import { Link, browserHistory } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'
import Header from '../common/header'

export default class App extends React.Component {

    render(){

        return (
            <Grid>
                <Row>
                    <Col><Header/></Col>
                </Row>
                <Row>
                    <Col md={12}>{this.props.children}</Col>
                </Row>
            </Grid>
        )

    }

}