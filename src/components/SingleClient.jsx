import { Col, Row } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { removeClient } from "../redux/action/clients";
import { getAllCLients } from "../redux/action/clients";
import { useNavigate } from "react-router-dom";

const SingleClient = ({ client }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Row className=" ms-1 px-4 mb-3">
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
            <div className="d-flex justify-content-center">
              <Trash3Fill
                className="mt-3 text-danger fs-5"
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
