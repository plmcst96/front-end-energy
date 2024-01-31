import { Container, Row, Col, Button, Pagination } from 'react-bootstrap'
import TownElement from './TownElement'

const Town = () => {
  return (
    <Container>
      <Row className="flex-column">
        <Col className="mt-5 py-4 ps-5 border border-dark">
          <h1>Elenco dei Comuni</h1>
        </Col>
        <Col className="mt-5">
          <TownElement />
          {/* <Pagination /> */}
        </Col>
        <Col>
          <Button variant="dark" className="mt-5">
            Indietro
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Town
