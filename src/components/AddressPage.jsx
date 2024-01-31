import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const AddressPage = () => {
  return (
    <Container fluid>
   <Row className=" ms-1 px-4 mb-3">
      <Col>
        <Row className="border border-secondary rounded  ">
          {/* <Col className="p-0 text-center">Client Number</Col> */}
          <Col className="p-0 text-center">Street</Col>
          <Col className="p-0 text-center">StreetNumber</Col>
          <Col className="p-0 text-center">District</Col>
          <Col className="p-0 text-center">Town</Col>
          <Col className="p-0 text-center">ZipCode</Col>
        </Row>
      </Col>
    </Row>
    </Container>
  );
};

export default AddressPage;

