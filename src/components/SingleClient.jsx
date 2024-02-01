import { Col, Row } from "react-bootstrap";

const SingleClient = () => {
  return (
    <Row className=" ms-1 px-4 mb-3">
      <Col>
        <Row className="border border-secondary rounded  ">
          {/* <Col className="p-0 text-center">Client Number</Col> */}
          <Col className="p-0 text-center">Business name</Col>
          <Col className="p-0 text-center">Email</Col>
          <Col className="p-0 text-center">VAT number</Col>
          <Col className="p-0 text-center">Type</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SingleClient;
