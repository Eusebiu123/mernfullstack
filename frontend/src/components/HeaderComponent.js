import { Navbar, Nav, Container, NavDropdown, Badge, Form, Dropdown, DropdownButton, Button, InputGroup } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

import { Link } from 'react-router-dom';



const HeaderComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="/">Dezmembrari Auto</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <InputGroup >
                            <DropdownButton id="dropdown-basic-button" title="Toate piesele">
                                <Dropdown.Item >Sistem de franare</Dropdown.Item>
                                <Dropdown.Item >Filtre</Dropdown.Item>
                                <Dropdown.Item >Motor</Dropdown.Item>
                                <Dropdown.Item >Sistem aprindere si bujii incadescente</Dropdown.Item>
                                <Dropdown.Item >Suspensie, tije</Dropdown.Item>
                                <Dropdown.Item >Amortizoare, arcuri, resorturi</Dropdown.Item>
                                <Dropdown.Item >Componente caroserie, faruri, geamuri</Dropdown.Item>
                                <Dropdown.Item >Sistem curatare parbriz</Dropdown.Item>
                                <Dropdown.Item >Electrice</Dropdown.Item>
                                <Dropdown.Item >Sistemul de esapament</Dropdown.Item>
                                <Dropdown.Item >Sistem racire motor</Dropdown.Item>
                                <Dropdown.Item >Ambreiaj/piese</Dropdown.Item>
                                <Dropdown.Item >Curele, lanauri, role</Dropdown.Item>
                                <Dropdown.Item >Habitaclu si dispozitive de confort secundare</Dropdown.Item>
                                <Dropdown.Item >Sistem alimentare</Dropdown.Item>
                                <Dropdown.Item >Articulatie planetara/planetara</Dropdown.Item>
                                <Dropdown.Item >Directie</Dropdown.Item>
                                <Dropdown.Item >Sistem de aer conditionat</Dropdown.Item>
                                <Dropdown.Item >Senzori,releuri,unitati control</Dropdown.Item>
                                <Dropdown.Item >Incalzire</Dropdown.Item>
                                <Dropdown.Item >Uleiuri si lichide</Dropdown.Item>
                                <Dropdown.Item >Garnituri si inele de etansare</Dropdown.Item>
                                <Dropdown.Item >Cutie de viteze</Dropdown.Item>
                                <Dropdown.Item >Racorduri si furtunuri</Dropdown.Item>
                                <Dropdown.Item >Set reparatie</Dropdown.Item>
                                <Dropdown.Item >Rulmenti</Dropdown.Item>
                                <Dropdown.Item >Arbori cardanici diferentiale</Dropdown.Item>
                                <Dropdown.Item >Sistem de tractare/piese</Dropdown.Item>


                            </DropdownButton>
                            <Form.Control type="text" placeholder="Cauta in magazin ..." />
                            <Button variant="warning">
                                <i className="bi bi-search text-dark"></i>
                            </Button>{' '}
                        </InputGroup>
                    </Nav>
                    <Nav>
                        <LinkContainer to="/admin/orders">
                            <Nav.Link>
                                Administrator
                                <span className="position-absolute top-1 start-10 
                                translate-middle p-2 bg-danger border border-light
                                rounded-circle"></span>
                            </Nav.Link>
                        </LinkContainer>



                        <NavDropdown title="John Doe" id="collasible-nav-dropdown">
                            <NavDropdown.Item eventKey="/user/my-orders" as={Link} to="/user/my-orders">
                                Comenzile mele
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                                Profilul meu
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                        <LinkContainer to="/login">
                            <Nav.Link>
                                Login

                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/register">
                            <Nav.Link>
                                Register

                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <Nav.Link>
                                <Badge pill bg="danger">
                                    2
                                </Badge>{' '}
                                <i className="bi bi-cart-dash"></i>
                                <span className="ms-1">Coș</span>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderComponent; 