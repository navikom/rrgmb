import React from 'react'
import { Link } from 'react-router';
import { Nav, Navbar, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default class Header extends React.Component {

    render(){

        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">TODO React</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer eventKey={1} to="todos">
                            <MenuItem >List</MenuItem>
                        </LinkContainer>
                        <LinkContainer eventKey={2} to="bar">
                            <MenuItem >Bar</MenuItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )

    }

}