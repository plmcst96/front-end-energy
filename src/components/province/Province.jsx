import { Container, Row, Col, Button, Pagination } from 'react-bootstrap'
import ProvinceElement from './ProvinceElement'
import { Link } from 'react-router-dom'

const Province = () => {
  return (
    <Container>
      <Row className="flex-column">
        <Col className="mt-5 py-4 ps-5 border border-dark">
          <h1>Elenco delle Province</h1>
        </Col>
        <Col className="mt-5">
          <ProvinceElement />
          {/* <Pagination /> */}
        </Col>
        <Col>
          <Link to="/address">
            <Button variant="dark" className="mt-5">
              Indietro
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Province
