import { Container, Row, Col } from 'react-bootstrap'
import UserElement from './UserElement'

const UserPage = () => {
  return (
    <Container>
      <Row className="flex-column">
        <Col className="mt-5 py-4 ps-5 border border-dark">
          <h1>Elenco degli utenti</h1>
        </Col>
        <Col>
          <UserElement />
        </Col>
      </Row>
    </Container>
  )
}

export default UserPage
