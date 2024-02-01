import { Col, Container, ListGroup, Row } from 'react-bootstrap'

const UserElement = () => {
  return (
    <Container fluid>
      <Row className="flex-column">
        <Col>
          <div className="me-5 ps-5">
            <h3>Id</h3>
          </div>
          <div className="me-5 ps-5">
            <h3>Name</h3>
          </div>
          <div className="me-5 ps-5">
            <h3>Surname</h3>
          </div>
          <div className="me-5 ps-5">
            <h3>Username</h3>
          </div>
          <div className="me-5 ps-5">
            <h3>Email</h3>
          </div>
          <div className="me-5 ps-5">
            <h3>Role</h3>
          </div>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item></ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default UserElement
