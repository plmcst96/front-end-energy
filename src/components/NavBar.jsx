import { Container, Image, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from "../logo.png"

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Image
          src={logo}
          className="rounded-circle me-5"
          style={{ width: "70px" }}
        />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="text-decoration-none text-black">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/clients" className="text-decoration-none text-black">
                Clients
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/address" className="text-decoration-none text-black">
                Address
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/invoice" className="text-decoration-none text-black">
                Invoice
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/login"
                className="text-decoration-none text-black"
                style={{ marginLeft: "800px" }}
              >
                Login/SingUP
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar
