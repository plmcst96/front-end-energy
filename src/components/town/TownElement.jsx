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
          <div>
            <h3>Denominazione in Italiano</h3>
          </div>
          <div>
            <h3>Progressivo del Comune</h3>
          </div>
          <div>
            <h3>Provincia</h3>
          </div>
          <div>
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
                    <div className="me-5">{townItem.name}</div>
                    <div className="mx-5">{townItem.municipalSerialNumber}</div>
                    <div className="ms-5">{townItem.province.name}</div>
                    <div className="ms-5">{townItem.provinceCode}</div>
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
