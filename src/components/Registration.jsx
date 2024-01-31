import { useEffect, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Registration = () => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    username: "",
  })

  const postRegister = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (res.ok) {
        alert("Login effettuato con successo!")
      } else {
        throw new Error("The login is fail!")
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    setRegister({
      ...register,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center">
        <Col sm={6} className="border border-dark-subtle rounded p-3">
          <Row className="flex-column">
            <Col className="d-flex justify-content-center">
              <Link to="/register" className="nav-link fs-3">
                Registration
              </Link>
            </Col>
            <Col>
              <Form onSubmit={postRegister}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    onchange={(e) => {
                      setRegister({
                        ...register,
                        name: e.target.value,
                      })
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlPsw1"
                >
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    type="text"
                    value={register.surname}
                    onchange={(e) => {
                      setRegister({
                        ...register,
                        surname: e.target.value,
                      })
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlPsw1"
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlPsw1"
                  >
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      value={register.username}
                      onchange={(e) => {
                        setRegister({
                          ...register,
                          username: e.target.value,
                        })
                      }}
                    />
                  </Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={register.email}
                    onchange={(e) => {
                      setRegister({
                        ...register,
                        email: e.target.value,
                      })
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlPsw1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={register.password}
                    onchange={(e) => {
                      setRegister({
                        ...register,
                        password: e.target.value,
                      })
                    }}
                  />
                </Form.Group>
                <Button>SingUp</Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default Registration
