import { Col, ListGroupItem, Row } from "react-bootstrap"
import { Trash3Fill } from "react-bootstrap-icons"
import { useDispatch } from "react-redux"
import { removeClient } from "../redux/action/clients"
import { getAddress, removeAddress } from "../redux/action"

const AddressElement = ({ address }) => {
  const dispatch = useDispatch()
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
          <Col className="cursor text-center">
            <div>
              <Trash3Fill
                onClick={() => {
                  dispatch(removeAddress(address.uuid)).then(() => {
                    dispatch(getAddress())
                  })
                }}
              />
            </div>
          </Col>
        </Row>
      </ListGroupItem>
    </>
  )
}

export default AddressElement
