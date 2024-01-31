import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import SingleClient from "./SingleClient";
import { useState } from "react";

const ClientsPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Business name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>VAT Number</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            {/* questo deve essere rimosso, la data di input è automatica */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Input Date</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Contact Date</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Annuale revenue</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Pec</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Telephone contact number</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Telephone number</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contact Email</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Type</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="mt-5 justify-content-center" xs={1} md={2}>
        <Col md={4}>
          <div className="d-flex justify-content-around border border-secondary rounded">
            <div className="m-3 d-flex flex-column gap-3 px-4 py-2">
              <Button className="py-2" onClick={handleShow}>
                Add a client
              </Button>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <div className="d-flex justify-content-center mb-1 mt-2">
                    <Form.Label>Search client</Form.Label>
                  </div>
                  <Form.Control placeholder="Insert the name" />
                </Form.Group>
              </Form>
            </div>
          </div>
        </Col>
        <Col className="p-0">
          <div className="border border-1 border-black  rounded-3 ">
            <div className="d-flex justify-content-center py-3">
              <h1>Lista clienti</h1>
            </div>
            <Row className="p-0">
              <SingleClient />
              <SingleClient />
              <SingleClient />
              <SingleClient />
              <SingleClient />
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ClientsPage;
