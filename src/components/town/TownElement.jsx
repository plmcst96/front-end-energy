import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTown } from '../../redux/action'

const TownElement = () => {
  const townData = useSelector((state) => state.town.content)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTown())
  }, [dispatch])

  return (
    <Container>
      <Row className="flex-column">
        <Col className="d-flex justify-content-evenly">
          <div className="me-5 ps-4">
            <h3>Denominazione in Italiano</h3>
          </div>
          <div className="me-5 ps-4">
            <h3>Progressivo del Comune</h3>
          </div>
          <div className="me-5 ps-4">
            <h3>Provincia</h3>
          </div>
          <div className="me-5 ps-4">
            <h3>Codice Provincia</h3>
          </div>
        </Col>
        <Col className="d-flex mt-4 justify-content-around">
          <ListGroup className="w-100">
            {townData &&
              townData.map((townItem, index) => {
                return (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-evenly"
                  >
                    <Col sm={3} className="me-5 ps-4">
                      {townItem.name}
                    </Col>
                    <Col sm={1} className="mx-5 ps-4">
                      {townItem.municipalSerialNumber}
                    </Col>
                    <Col sm={1} className="ms-5 ps-4">
                      {townItem.province.name}
                    </Col>
                    <Col sm={1} className="ms-5 ps-4">
                      {townItem.provinceCode}
                    </Col>
                  </ListGroup.Item>
                )
              })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default TownElement
