import React from 'react';

import {Navbar, Nav, Link, Button} from 'react-bootstrap';

export default function Navibar(){
    return (
         <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Deni</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Users</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="mr-2">Log In</Button>
                        <Button variant="primary">Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
         </>
    );
}