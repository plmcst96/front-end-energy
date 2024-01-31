import { Col, Row } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { removeClient } from "../redux/action/clients";
import { getAllCLients } from "../redux/action/clients";

const SingleClient = ({ client }) => {
  const dispatch = useDispatch();

  return (
    <Row className=" ms-1 px-4 mb-3">
      <Col>
        <Row className="border border-secondary rounded g-2 py-1 ">
          {/* <Col className="p-0 text-center">Client Number</Col> */}
          <Col xs={4} className="p-0 text-center mt-4 fw-bold ">
            {client.businessName}
          </Col>

          <Col xs={6} className="ms-3 text-center">
            <div className="d-flex gap-2 flex-column">
              <p>{client.email}</p>
              <p>{client.vatnumber}</p>
            </div>
          </Col>
          <Col xs={1} className="cursor">
            <div className="d-flex justify-content-center">
              <Trash3Fill
                className="mt-4"
                onClick={() => {
                  dispatch(removeClient(client.uuid)).then(() => {
                    dispatch(getAllCLients());
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
