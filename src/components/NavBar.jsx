import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from "../logo.png"

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Image
          src={logo}
          className="rounded-circle"
          style={{ width: "70px" }}
        />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="/clients" className="text-decoration-none text-black">
                Clients
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login" className="text-decoration-none text-black">
                Login/SingUP
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/address" className="text-decoration-none text-black">
                Address
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar
