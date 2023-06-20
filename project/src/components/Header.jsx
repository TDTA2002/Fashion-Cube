import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './SCSS/Header.scss';

function CollapsibleExample() {
    return (
        <div className='custom-header'>
            <Navbar collapseOnSelect expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="#home" style={{ color: 'white' }}>FREE SHIPPING ON ALL U.S ORDERS OVER 550</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <NavDropdown title="USD" id="collapsible-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1" >CAD</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2" >
                                    AUD
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3" >EUR</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" >
                                    GBP
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="English" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">French</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    Italian
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">German</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Spanish
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="My Account" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    Register
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default CollapsibleExample;
