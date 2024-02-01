import React, { useEffect, useState } from "react"
import { Container, Row, Col, Button, Form, ListGroup } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getAddress, postAddress } from "../redux/action"
import AddressElement from "./AddressElement"

const AddressPage = () => {
  const addressData = useSelector((state) => state.address.list)
  const [address, setAddress] = useState({
    street: "",
    streetNumber: "",
    district: "",
    zipCode: "",
    nameTown: "",
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAddress())
  }, [dispatch])

  return (
    <Container fluid className="mt-5">
      <Row className=" ms-1 px-4 mb-3">
        <Col>
          <Row className="border border-secondary rounded  ">
            {/* <Col className="p-0 text-center">Client Number</Col> */}
            <Form className="p-4">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setAddress({
                      ...address,
                      street: e.target.value,
                    })
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Street Number</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setAddress({
                      ...address,
                      streetNumber: e.target.value,
                    })
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setAddress({
                      ...address,
                      district: e.target.value,
                    })
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setAddress({
                      ...address,
                      zipCode: e.target.value,
                    })
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Town</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setAddress({
                      ...address,
                      nameTown: e.target.value,
                    })
                  }}
                />
              </Form.Group>
              <Button
                type="submit"
                onClick={(e) => {
                  e.preventDefault()
                  dispatch(postAddress(address))
                }}
              >
                Save
              </Button>
            </Form>
          </Row>
        </Col>
      </Row>
      <Row className="p-4">
        <Col className="border border-secondary rounded ms-3 py-4">
          <Row className="ms-1 mb-3 d-flex justify-content-center">
            <Col sm={2} className="text-center fw-semibold">
              Street
            </Col>
            <Col sm={2} className="text-center fw-semibold">
              Street Number
            </Col>
            <Col sm={2} className="text-center fw-semibold">
              District
            </Col>
            <Col sm={2} className="text-center fw-semibold">
              ZipCode
            </Col>
            <Col sm={2} className="text-center fw-semibold">
              Town
            </Col>
            <Col sm={2}></Col>
          </Row>
          <ListGroup>
            {addressData &&
              addressData.map((add) => (
                <AddressElement key={add.uuid} address={add} />
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default AddressPage
