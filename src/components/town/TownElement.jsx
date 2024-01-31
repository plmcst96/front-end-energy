import { Container, Row, Col, ListGroup } from 'react-bootstrap'

const TownElement = () => {
  return (
    <Container>
      <Row className="flex-column">
        <Col className="d-flex justify-content-evenly">
          <div>
            <h3>Denominazione in Italiano</h3>
          </div>
          <div>
            <h3>Progressivo del Comune</h3>
          </div>
          <div>
            <h3>Provincia</h3>
          </div>
          <div>
            <h3>Codice Provincia</h3>
          </div>
        </Col>
        <Col className="d-flex mt-4 justify-content-center">
          <ListGroup>
            {/* qua si fa il map per mostrare tutti  i dati */}
            <ListGroup.Item className="d-flex justify-content-evenly">
              <div className="me-5">nome</div>
              <div className="mx-5">progr del comune</div>
              <div className="ms-5">provincia</div>
              <div className="ms-5">cod provincia</div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default TownElement
