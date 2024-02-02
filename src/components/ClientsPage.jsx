import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap"
import SingleClient from "./SingleClient"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getAllCLients,
  addClient,
  // getAllCLientsWithFilter,
} from "../redux/action/clients"
import { getAddress } from "../redux/action"

const ClientsPage = () => {
  const dispatch = useDispatch()
  const tokenStorage = localStorage.getItem("token")
  const addressData = useSelector((state) => state.address.list)

  const [show, setShow] = useState(false)
  // const [filterDate, setFilterDate] = useState("");
  const [newClient, setNewClient] = useState(null)
  const clientsData = useSelector((state) => state.client.clients.content)
  //const [searchClientInput, setSearchClientInput] = useState("");
  const [filtersClients, setFiltersClients] = useState({
    minRevenue: 0,
    maxRevenue: 10000000000,
  })
  console.log(filtersClients)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  useEffect(() => {
    dispatch(getAllCLients(filtersClients, tokenStorage))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])
  useEffect(() => {
    dispatch(getAllCLients(filtersClients, tokenStorage))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersClients])

  const role = useSelector((state) => state.register.role)
  const token = useSelector((state) => state.register.token)

  useEffect(() => {
    dispatch(getAddress(filtersClients, tokenStorage))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // useEffect(() => {
  //   dispatch(getAllCLientsWithFilter(filtersClients));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filtersClients]);

  return (
    <Container fluid>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Business name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewClient({
                    ...newClient,
                    businessName: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>VAT Number</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewClient({
                    ...newClient,
                    VATNumber: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewClient({
                    ...newClient,
                    email: e.target.value,
                  })
                }}
              />
            </Form.Group>

            {/* questo deve essere rimosso, la data di input è automatica */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Input Date</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewClient({
                    ...newClient,
                    inputDate: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Contact Date</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewClient({
                    ...newClient,
                    lastContactDate: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Annuale revenue</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewClient({
                    ...newClient,
                    annualRevenue: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Pec</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewClient({
                    ...newClient,
                    pec: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Telephone contact number</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewClient({
                    ...newClient,
                    telephoneNumberContact: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Telephone number</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewClient({
                    ...newClient,
                    telephone: e.target.value,
                  })
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contact Email</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewClient({
                    ...newClient,
                    contactEmail: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewClient({
                    ...newClient,
                    name: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewClient({
                    ...newClient,
                    surname: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewClient({
                    ...newClient,
                    clientType: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label>Legal Address</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setNewClient({
                    ...newClient,
                    legalAddress: e.target.value,
                  })
                }}
              >
                <option>Select Address</option>
                {addressData &&
                  addressData.map((add) => (
                    <option key={add.uuid} value={add.uuid}>
                      {add.street +
                        " " +
                        add.streetNumber +
                        " " +
                        add.zipCode +
                        " " +
                        add.town.name}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label>Operative Address</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setNewClient({
                    ...newClient,
                    operativeAddress: e.target.value,
                  })
                  console.log(newClient)
                }}
              >
                <option>Select Address</option>
                {addressData &&
                  addressData.map((add) => (
                    <option key={add.uuid} value={add.uuid}>
                      {add.street +
                        " " +
                        add.streetNumber +
                        " " +
                        add.zipCode +
                        " " +
                        add.town.name}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose()
              dispatch(addClient(newClient, token)).then(() => {
                dispatch(getAllCLients(filtersClients, token))
              })
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="mt-5 justify-content-center" xs={1} md={2}>
        <Col md={8}>
          <div className="d-flex justify-content-center flex-grow-1 border border-secondary rounded">
            <div className="m-3 d-flex flex-column gap-3">
              <Form>
                <Form.Group className="mb-3">
                  <div className="d-flex justify-content-center mb-1 mt-2">
                    <Form.Label className="bw-bold">Search client</Form.Label>
                  </div>
                  <Form.Control
                    placeholder="Insert the name"
                    onChange={(e) => {
                      // setSearchClientInput(e.target.value);
                      setFiltersClients({
                        ...filtersClients,
                        businessName: e.target.value,
                      })
                    }}
                  />
                </Form.Group>
              </Form>
              {role === "ADMIN" ? (
                <Button
                  className="py-2 btn btn-success w-100"
                  onClick={handleShow}
                >
                  Add client
                </Button>
              ) : null}
            </div>
          </div>
        </Col>
        <Col md={8}>
          <div className="d-flex ">
            <Form className="d-flex flex-column flex-grow-1 border border-secondary rounded p-5 mt-2">
              <div>Filtra per: </div>
              <Form.Label>Min revenue</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => {
                  setFiltersClients({
                    ...filtersClients,
                    minRevenue: e.target.value,
                  })
                }}
              />
              <Form.Label>Max revenue</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => {
                  setFiltersClients({
                    ...filtersClients,
                    maxRevenue: e.target.value,
                  })
                }}
              />

              <Form.Group className="mb-3">
                <Form.Label>Input date</Form.Label>
                <Form.Control
                  type="date"
                  // onChange={(e) => {
                  //   setFilterDate(e.target.value);
                  // }}
                />
                <Form.Label>Last contact date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Form>
          </div>
        </Col>
        <Col className="p-0 mt-4" xs={12} md={10}>
          <div
            className="border border-1 border-black rounded-3"
            style={{ height: "1000px" }}
          >
            <div className="d-flex justify-content-center py-3">
              <h1>Lista clienti</h1>
            </div>
            <Row className="p-0">
              <Row className="p-0">
                <Row className=" ms-1 px-4 mb-3">
                  <Col>
                    <Row className="rounded g-2 py-1 ">
                      {/* <Col className="p-0 text-center">Client Number</Col> */}
                      <Col className="p-0 text-center mt-4 ms-1 fw-bold">
                        Business name
                      </Col>
                      <Col className="text-center mt-4 fw-bold">Email</Col>
                      <Col className="p-0 text-center mt-4 fw-bold">
                        Telephone contact number
                      </Col>
                      <Col className="p-0 text-center mt-4 fw-bold">
                        VAT Number
                      </Col>
                      <Col className="p-0 text-center mt-4 fw-bold">
                        Input Date
                      </Col>
                      <Col className="cursor">
                        <div className="d-flex justify-content-center"></div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {console.log(clientsData)}
                {clientsData &&
                  clientsData.map((client) => {
                    return (
                      <SingleClient
                        client={client}
                        key={client.uuid}
                        addressData={addressData}
                      />
                    )
                  })}
              </Row>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ClientsPage
// .filter((client) =>
//   client.businessName
//     .toLowerCase()
//     .includes(searchClientInput.toLowerCase())
// )
