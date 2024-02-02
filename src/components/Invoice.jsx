import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getInvoice, postInvoice } from "../redux/action/invoice";
import InvoiceElement from "./InvoiceElement";

const Invoice = () => {
  const [invoice, setInvoice] = useState({
    date: "",
    amount: "",
    number: "",
    invoiceState: "",
    clientId: "",
  });

  const role = useSelector((state) => state.register.role);
  const token = localStorage.getItem("token");
  console.log(role);
  const invoiceData = useSelector((state) => state.invoice.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoice(token));
  }, [dispatch]);

  return (
    <Container fluid className="mt-5">
      <Row className=" ms-1 px-4 mb-3">
        <Col>
          <Row className="border border-secondary rounded  ">
            {/* <Col className="p-0 text-center">Client Number</Col> */}
            {/* {role === "ADMIN" ? ( */}
            <Form className="p-4">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setInvoice({
                      ...invoice,
                      date: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setInvoice({
                      ...invoice,
                      amount: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Number Invoice</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setInvoice({
                      ...invoice,
                      number: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Invoice State</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setInvoice({
                      ...invoice,
                      invoiceState: e.target.value,
                    });
                  }}
                >
                  <option>Select State</option>
                  <option>IN_PROGRESS</option>
                  <option>SENT</option>
                  <option>DRAFT</option>
                  <option>DISCARDED</option>
                  <option>DELIVERED</option>
                  <option>SENT_NOT_DELIVERED</option>
                </Form.Select>
                {/*  <Form.Control
                  type="text"
                  onChange={(e) => {
                    setInvoice({
                      ...invoice,
                      invoiceState: e.target.value,
                    })
                  }}
                /> */}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Client</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setInvoice({
                      ...invoice,
                      clientId: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(postInvoice(invoice, token));
                }}
              >
                Save
              </Button>
            </Form>
            {/* ) : null} */}
          </Row>
        </Col>
      </Row>
      <Row className="p-4">
        <Col className="border border-secondary rounded ms-3 py-4">
          <Row className="ms-1 mb-3 d-flex justify-content-center">
            <Col sm={2} className="text-center fw-semibold">
              Date
            </Col>
            <Col sm={2} className="text-center fw-semibold">
              Amount
            </Col>
            <Col sm={2} className="text-center fw-semibold">
              Number Invoice
            </Col>
            <Col sm={2} className="text-center fw-semibold">
              Invoice State
            </Col>
            <Col sm={2} className="text-center fw-semibold">
              Client
            </Col>
            <Col sm={2}></Col>
          </Row>
          <ListGroup>
            {invoiceData &&
              invoiceData.map((invoice) => (
                <InvoiceElement key={invoice.uuid} invoice={invoice} />
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Invoice;
