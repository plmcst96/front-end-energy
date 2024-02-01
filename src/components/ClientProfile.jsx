import { Card, Col, Container, ListGroup, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { getSingleClient } from "../redux/action/clients"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const ClientProfile = () => {
  const { uuid } = useParams()
  console.log(uuid)
  const singleClient = useSelector((state) => state.client.singleClient)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleClient(uuid))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])
  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        <Col xs={12} md={9}>
          {singleClient && (
            <Card>
              <Card.Body>
                <div className="text-center">
                  <Card.Title>{singleClient.businessName} </Card.Title>
                </div>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <strong>Data di inserimento: </strong>:{" "}
                  {singleClient.inputDate}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Data ultimo contatto: </strong>:
                  {singleClient.lastContactDate}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Nome</strong>: {singleClient.name}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Cognome</strong>: {singleClient.surname}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Telefono</strong>: {singleClient.telephone}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Email</strong>: {singleClient.email}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Partita IVA</strong>: {singleClient.vatnumber}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Tipo di cliente</strong>: {singleClient.clientType}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default ClientProfile
