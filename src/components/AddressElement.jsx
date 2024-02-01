import { Col, ListGroupItem, Row } from "react-bootstrap"

const AddressElement = ({ address }) => {
  return (
    <>
      <ListGroupItem>
        <Row>
          <Col sm={3}>{address.street}</Col>
          <Col sm={2}>{address.streetNumber}</Col>
          <Col sm={3}>{address.district}</Col>
          <Col sm={2}>{address.zipCode}</Col>
          <Col sm={2}>{address.town.name}</Col>
        </Row>
      </ListGroupItem>
    </>
  )
}

export default AddressElement
