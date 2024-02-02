import { Col, ListGroupItem, Row } from 'react-bootstrap'
import { PencilFill, Trash3Fill } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import { getAddress, removeAddress, updateAddress } from '../redux/action'

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
              <PencilFill
                className="ms-3"
                onClick={() => {
                  dispatch(updateAddress(address.uuid)).then(() => {
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
