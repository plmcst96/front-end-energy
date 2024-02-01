import React, { useState } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { postAddress } from "../redux/action"

const AddressPage = () => {
  const [address, setAddress] = useState({
    street: "",
    streetNumber: "",
    district: "",
    zipCode: "",
    nameTown: "",
  })
  const dispatch = useDispatch()
  return (
    <Container fluid>
      <Row className=" ms-1 px-4 mb-3">
        <Col>
          <Row className="border border-secondary rounded  ">
            {/* <Col className="p-0 text-center">Client Number</Col> */}
            <Form>
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
    </Container>
  )
}

export default AddressPage
