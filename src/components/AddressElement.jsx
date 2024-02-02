import { Col, ListGroupItem, Row } from "react-bootstrap"
import { PencilFill, Trash3Fill } from "react-bootstrap-icons"
import { useDispatch } from "react-redux"
import { getAddress, removeAddress, updateAddress } from "../redux/action"
import { useState } from "react"

const AddressElement = ({ add, handlePencilClick, token }) => {
  const dispatch = useDispatch()

  return (
    <>
      <ListGroupItem className="p-0 py-2">
        <Row className="d-flex justify-content-center">
          <Col sm={2} className="text-center">
            {add.street}
          </Col>
          <Col sm={2} className="text-center">
            {add.streetNumber}
          </Col>
          <Col sm={2} className="text-center">
            {add.district}
          </Col>
          <Col sm={2} className="text-center">
            {add.zipCode}
          </Col>
          <Col sm={2} className="text-center">
            {add.town.name}
          </Col>
          <Col className="cursor text-center">
            <div>
              <Trash3Fill
                onClick={() => {
                  dispatch(removeAddress(add.uuid, token)).then(() => {
                    dispatch(getAddress(token))
                  })
                }}
              />
              <PencilFill
                className="ms-3"
                onClick={() => {
                  // dispatch(updateAddress(add.uuid)).then(() => {
                  //   dispatch(getAddress())
                  // })
                  handlePencilClick(add)
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
