import { Container, Row, Col, ListGroup } from 'react-bootstrap'

const ProvinceElement = () => {
  return (
    <Container>
      <Row className="flex-column">
        <Col className="d-flex justify-content-evenly">
          <div>
            <h3>Sigla</h3>
          </div>
          <div>
            <h3>Provincia</h3>
          </div>
          <div>
            <h3>Regione</h3>
          </div>
        </Col>
        <Col className="d-flex mt-4">
          <ListGroup>
            {/* qua si fa il map per mostrare tutti  i dati */}
            <ListGroup.Item className="d-flex justify-content-evenly">
              <div className="me-5">sigla</div>
              <div className="mx-5">provincia</div>
              <div className="ms-5">regione</div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default ProvinceElement
