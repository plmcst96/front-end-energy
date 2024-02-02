import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProvince } from "../../redux/action";

const ProvinceElement = () => {
  const provinceData = useSelector((state) => state.province.content);
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProvince(token));
  }, [dispatch]);

  return (
    <Container fluid>
      <Row className="flex-column">
        <Col className="d-flex justify-content-around">
          <div className="me-5 ps-5">
            <h3>Sigla</h3>
          </div>
          <div className="me-5 ps-5">
            <h3>Provincia</h3>
          </div>
          <div className="me-5 ps-5">
            <h3>Regione</h3>
          </div>
        </Col>
        <Col className="d-flex mt-4 justify-content-around">
          <ListGroup className="w-100">
            {provinceData &&
              provinceData.map((provinceItem, index) => {
                return (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-evenly"
                  >
                    <Col sm={3} className="me-5 ps-5">
                      {provinceItem.provinceCode}
                    </Col>
                    <Col sm={3} className="me-5 ps-5">
                      {provinceItem.name}
                    </Col>
                    <Col sm={3} className="me-5 ps-5">
                      {provinceItem.region}
                    </Col>
                  </ListGroup.Item>
                );
              })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProvinceElement;
