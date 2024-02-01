import { Button, Col, ListGroupItem, Row } from "react-bootstrap"
import { Trash2 } from "react-bootstrap-icons"

const AddressElement = ({ address }) => {
  return (
    <>
      <ListGroupItem className="p-0 py-2">
        <Row className="d-flex justify-content-center">
          <Col sm={2} className="text-center">
            {address.street}
          </Col>
          <Col sm={2} className="text-center">
            {address.streetNumber}
          </Col>
          <Col sm={2} className="text-center">
            {address.district}
          </Col>
          <Col sm={2} className="text-center">
            {address.zipCode}
          </Col>
          <Col sm={2} className="text-center">
            {address.town.name}
          </Col>
          <Col>
            <Button>
              <Trash2 />
            </Button>
          </Col>
        </Row>
      </ListGroupItem>
    </>
  )
}

export default AddressElement
