import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const ProvinceElement = () => {
  const [province, setProvince] = useState([{}])
  const getProvince = () => {
    fetch('http://localhost:3001/provinces?page=0&size=30&orderBy=name', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIyYzJmZjY2Ni02YTlmLTQxMDItOGNlYy00MGUyNTVhMTcyMWUiLCJpYXQiOjE3MDY3MDA1OTcsImV4cCI6MTcwNzMwNTM5N30.SLeqiiCVTUMQZdHnkcdMgLAv1u3Y6LxtAqRO3r9nOeLgfky3IvBKvGujaJ4dFV_3 ',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero delle province')
        }
      })
      .then((data) => {
        console.log('Fetch completata, dati recuperati', data)
        setProvince(data.content)
      })
      .catch((error) => {
        console.log('Error!', error)
      })
  }

  useEffect(() => {
    getProvince()
  }, [])
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
            {province &&
              province.map((provinceItem, index) => {
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
