import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Navigation.css'

const Navigation = () => {

    return (
        <div className="Navigation">

            <Navbar expand="md" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Ejemplos de BS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Link to="/">
                                <Nav.Link as="span">Inicio</Nav.Link>
                            </Link>
                            {/* LA PROP "as" CAMBIA LA ETIQUETA QUE GENERA UN COMPONENTE DE BS */}

                            <Nav.Link href="/coasters">Montañas rusas</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default Navigation