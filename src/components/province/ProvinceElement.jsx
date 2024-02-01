import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProvince } from '../../redux/action'

const ProvinceElement = () => {
  const provinceData = useSelector((state) => state.province.content)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProvince())
  }, [dispatch])

  return (
    <Container fluid>
      <Row className="flex-column">
        <Col className="d-flex justify-content-evenly">
          <div>
            <h3>Sigla</h3>
          </div>
          <div>
            <h3>Provincia</h3>
          </div>
          <div>
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
                    <div className="me-5">{provinceItem.provinceCode}</div>
                    <div className="mx-5">{provinceItem.name}</div>
                    <div className="ms-5">{provinceItem.region}</div>
                  </ListGroup.Item>
                )
              })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default ProvinceElement
