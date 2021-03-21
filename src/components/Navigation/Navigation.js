import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navigation.scss';

const Navigation = () => {
    return <Navbar bg="light" expand="lg" className="navbar--and">
        <Navbar.Brand href="/">AND <strong>LikeMe</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default Navigation;