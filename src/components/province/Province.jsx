import { Container, Row, Col, Button, Pagination } from 'react-bootstrap'
import ProvinceElement from './ProvinceElement'
import { useState, useEffect } from 'react'

const Province = () => {
  const [province, setProvince] = useState([])
  const getProvince = () => {
    fetch('http://localhost:3001/provinces?page=0&size=10&orderBy=name', {
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
        setProvince(data)
      })
      .catch((error) => {
        console.log('Error!', error)
      })
  }

  useEffect(() => {
    getProvince()
  }, [])

  return (
    <Container>
      <Row className="flex-column">
        <Col className="mt-5 py-4 ps-5 border border-dark">
          <h1>Elenco delle Province</h1>
        </Col>
        <Col className="mt-5">
          <ProvinceElement />
          {/* <Pagination /> */}
        </Col>
        <Col>
          <Button variant="dark" className="mt-5">
            Indietro
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Province
