import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center align-items-center mt-5 flex-column">
          <h1 className="my-5">Welcome to Epic Energy Service!</h1>
          <Button>
            <Link to="/register/admin" className="nav-link">
              Enter Admin
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
export default HomePage
