import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import SingleClient from "./SingleClient";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCLients, addClient } from "../redux/action/clients";

const ClientsPage = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const clientsData = useSelector((state) => state.client.clients.content);
  const [newClient, setNewClient] = useState(null);
  useEffect(() => {
    dispatch(getAllCLients());
  }, [dispatch]);

  const [searchClientInput, setSearchClientInput] = useState("");

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
                  });
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
                  });
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
                  });
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
                  });
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
                  });
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
                  });
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
                  });
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
                  });
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
                  });
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
                  });
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
                  });
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
                  });
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
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label>Legal Address</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label>Operative Address</Form.Label>
              <Form.Control type="text" />
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
              handleClose();
              dispatch(addClient(newClient)).then(() => {
                dispatch(getAllCLients());
              });
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
                      setSearchClientInput(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
              <Button
                className="py-2 btn btn-success w-100"
                onClick={handleShow}
              >
                Add client
              </Button>
            </div>
            <div>Filtra per: </div>
            <div>Fatturato Annuale</div>
          </div>
        </Col>
        <Col className="p-0 mt-4" xs={12} md={10}>
          <div className="border border-1 border-black  rounded-3 ">
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

                {clientsData &&
                  clientsData
                    .filter((client) =>
                      client.businessName
                        .toLowerCase()
                        .includes(searchClientInput.toLowerCase())
                    )
                    .map((client) => {
                      return <SingleClient client={client} key={client.uuid} />;
                    })}
              </Row>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ClientsPage;
