import { Col, ListGroupItem, Row } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
import { deleteInvoice, getInvoice } from "../redux/action/invoice";
import { useDispatch, useSelector } from "react-redux";

const InvoiceElement = ({ invoice }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  return (
    <ListGroupItem className="p-0 py-2">
      <Row className="d-flex justify-content-center">
        <Col sm={2} className="text-center">
          {invoice.date}
        </Col>
        <Col sm={2} className="text-center">
          {invoice.amount}
        </Col>
        <Col sm={2} className="text-center">
          {invoice.number}
        </Col>
        <Col sm={2} className="text-center">
          {invoice.invoiceState}
        </Col>
        <Col sm={2} className="text-center">
          {invoice.clientId}
        </Col>
        <Col className="cursor text-center">
          <div>
            <Trash3Fill
              onClick={() => {
                dispatch(deleteInvoice(invoice.uuid, token)).then(() => {
                  dispatch(getInvoice(token));
                });
              }}
            />
          </div>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default InvoiceElement;
