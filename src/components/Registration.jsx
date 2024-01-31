import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Registration = () => {
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center">
        <Col sm={6} className="border border-dark-subtle rounded p-3">
          <Row className="flex-column">
            <Col className="d-flex justify-content-center">
              <Link to="/register" className="nav-link fs-3">
                Registration
              </Link>
            </Col>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlPsw1"
                >
                  <Form.Label>Surname</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlPsw1"
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlPsw1"
                  >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlPsw1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Button>SingUp</Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default Registration
