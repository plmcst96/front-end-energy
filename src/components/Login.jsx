import { useEffect, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  })

  const postLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        localStorage.setItem("token", data.token)

        alert("Login effettuato con successo!")
      } else {
        throw new Error("The login is fail!")
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    setLogin({
      ...login,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center">
        <Col sm={6} className="border border-dark-subtle rounded p-3">
          <Row className="flex-column">
            <Col className="d-flex justify-content-center">
              <Link to="/login" className="nav-link fs-3">
                Login
              </Link>
            </Col>
            <Col>
              <Form onSubmit={postLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      setLogin({
                        ...login,
                        email: e.target.value,
                      })
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => {
                      setLogin({
                        ...login,
                        password: e.target.value,
                      })
                    }}
                  />
                </Form.Group>
                <Button type="submit">Login</Button>
                <Button className="ms-3" type="submit">
                  <Link to="/register" className="nav-link">
                    SingUp
                  </Link>
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default Login
