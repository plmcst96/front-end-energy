import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const TownElement = () => {
  const [town, setTown] = useState([{}])
  const getTown = () => {
    fetch('http://localhost:3001/town?page=0&size=30&orderBy=uuid', {
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
        setTown(data.content)
      })
      .catch((error) => {
        console.log('Error!', error)
      })
  }

  useEffect(() => {
    getTown()
  }, [])

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
            {town &&
              town.map((townItem, index) => {
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
