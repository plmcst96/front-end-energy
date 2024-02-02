import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { EnvelopeAt, PencilFill, Trash3Fill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeClient } from "../redux/action/clients";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCLients, editClient, sendMail } from "../redux/action/clients";
import { getAddress } from "../redux/action";

const SingleClient = ({ client, addressData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [show, setShow] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [editedClient, setEditedClient] = useState(null);
  const [filtersClients, setFiltersClients] = useState({
    minRevenue: 0,
    maxRevenue: 1000000000,
    businessName: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseEmail = () => setShowEmail(false);
  const handleShowEmail = () => setShowEmail(true);
  const [emailContent, setEmailContent] = useState(null);

  useEffect(() => {
    dispatch(getAddress(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Row className=" ms-1 px-4 mb-3">
      {/* MODALE PER INVIARE LA MAIL */}
      <Modal show={showEmail} onHide={handleCloseEmail}>
        <Modal.Header closeButton>
          <Modal.Title>Invia una mail a {client.email}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setEmailContent({
                ...emailContent,
                subject: e.target.value,
              });
            }}
          />
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setEmailContent({
                ...emailContent,
                content: e.target.value,
              });
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEmail}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleCloseEmail();
              dispatch(sendMail(client.uuid, emailContent, token));
            }}
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>

      {/* MODALE PER MODIFICARE IL CLIENTE */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Business name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setEditedClient({
                    ...editedClient,
                    businessName: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>VAT Number</Form.Label>
              <Form.Control
                // value={editedClient ? editedClient.vatnumber : client.vatnumber}
                type="text"
                onChange={(e) => {
                  setEditedClient({
                    ...editedClient,
                    VATNumber: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                // value={editedClient ? editedClient.email : client.email}
                type="text"
                onChange={(e) => {
                  setEditedClient({
                    ...editedClient,
                    email: e.target.value,
                  });
                }}
              />
            </Form.Group>

            {/* questo deve essere rimosso, la data di input è automatica */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Input Date</Form.Label>
              <Form.Control
                // value={editedClient ? editedClient.inputDate : client.inputDate}
                type="text"
                onChange={(e) => {
                  setEditedClient({
                    ...editedClient,
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
                  setEditedClient({
                    ...editedClient,
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
                  setEditedClient({
                    ...editedClient,
                    annualRevenue: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Pec</Form.Label>
              <Form.Control
                // value={editedClient ? editedClient.pec : client.pec}
                type="text"
                onChange={(e) => {
                  setEditedClient({
                    ...editedClient,
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
                  setEditedClient({
                    ...editedClient,
                    telephoneNumberContact: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Telephone number</Form.Label>
              <Form.Control
                // value={editedClient ? editedClient.telephone : client.telephone}
                type="text"
                onChange={(e) => {
                  setEditedClient({
                    ...editedClient,
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
                  setEditedClient({
                    ...editedClient,
                    contactEmail: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                // value={editedClient ? editedClient.name : client.name}
                type="text"
                onChange={(e) => {
                  setEditedClient({
                    ...editedClient,
                    name: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                // value={editedClient ? editedClient.surname : client.surname}
                type="text"
                onChange={(e) => {
                  setEditedClient({
                    ...editedClient,
                    surname: e.target.value,
                  });
                  console.log(editedClient);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setEditedClient({
                    ...editedClient,
                    clientType: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label>Legal Address</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setEditedClient({
                    ...editedClient,
                    legalAddress: e.target.value,
                  });
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
                onChange={(e) => {
                  setEditedClient({
                    ...editedClient,
                    operativeAddress: e.target.value,
                  });
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
              handleClose();
              dispatch(editClient(client.uuid, editedClient, token)).then(
                () => {
                  dispatch(getAllCLients(filtersClients, token));
                }
              );
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Col>
        <Row className="border border-secondary rounded g-2 py-1 ">
          {/* <Col className="p-0 text-center">Client Number</Col> */}
          <Col
            className="p-0 text-center mt-4 ms-1 fw-bold cursor"
            onClick={() => {
              navigate("/clients/" + client.uuid);
            }}
          >
            {client.businessName}
          </Col>
          <Col className="text-center mt-4">
            <p>{client.email}</p>
          </Col>
          <Col className="p-0 text-center mt-4">
            {client.telephoneNumberContact}
          </Col>
          <Col className="p-0 text-center mt-4">
            <p>{client.vatnumber}</p>
          </Col>
          <Col className="p-0 text-center mt-4">
            <p>{client.inputDate}</p>
          </Col>
          <Col className="cursor">
            <div className="d-flex justify-content-center gap-3">
              <EnvelopeAt
                className="mt-3 fs-5"
                onClick={() => {
                  handleShowEmail();
                }}
              />
              <PencilFill
                className="mt-3 fs-5"
                onClick={() => {
                  handleShow();
                }}
              />
              <Trash3Fill
                className="mt-3 text-danger fs-5"
                onClick={() => {
                  dispatch(removeClient(client.uuid, token)).then(() => {
                    dispatch(getAllCLients(filtersClients, token));
                  });
                }}
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SingleClient;
