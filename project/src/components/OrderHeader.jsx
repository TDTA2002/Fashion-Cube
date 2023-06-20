import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MDBIcon } from 'mdb-react-ui-kit';
import './SCSS/OrderHeader.scss'

function NavbarMenu() {
    return (
        <div className='fixed-navbar'>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center' }}> <h2>FASHION</h2><h2 style={{ color: 'red', fontSize: '32px' }}>CUBE</h2> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav.Link href="#features" className='navbar-menulink'>HOME</Nav.Link>
                        <NavDropdown title="SHOP" id="collasible-nav-dropdown" className='navbar-menulink'>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing" className='navbar-menulink'>CONTACT</Nav.Link>
                        <div className='navbar-icon'>
                            <MDBIcon fas icon="search" />
                            <MDBIcon fas icon="user-alt" />
                            <MDBIcon fas icon="shopping-cart" />
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarMenu;