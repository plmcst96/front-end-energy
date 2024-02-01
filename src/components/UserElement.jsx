import { useEffect } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, removeUser, setAdmin, setUser } from '../redux/action/users'
import { PencilFill, Trash3Fill } from 'react-bootstrap-icons'

const UserElement = () => {
  const userData = useSelector((state) => state.user.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <Container fluid>
      <Row className="flex-column">
        <Col className="d-flex justify-content-around mt-5">
          <div className="me-5 ps-5">
            <h3>Id</h3>
          </div>
          <div className="me-5 ps-5">
            <h3>Name</h3>
          </div>
          <div className="me-5 ps-5">
            <h3>Surname</h3>
          </div>
          <div className="me-5 ps-5">
            <h3>Username</h3>
          </div>
          <div className="me-5 ps-5">
            <h3>Email</h3>
          </div>
          <div className="me-5 ps-5">
            <h3>Avatar</h3>
          </div>
          <div className="me-5 ps-5">
            <h3>Role</h3>
          </div>
        </Col>
        <Col>
          <ListGroup className="my-3">
            {userData &&
              userData.map((user, index) => {
                return (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-evenly"
                  >
                    <Col sm={1} className="me-5">
                      {user.uuid}
                    </Col>
                    <Col sm={1} className="me-5 ps-3">
                      {user.name}
                    </Col>
                    <Col sm={1} className="me-5 ps-3">
                      {user.surname}
                    </Col>
                    <Col sm={1} className="me-5 ps-3">
                      {user.username}
                    </Col>
                    <Col sm={1} className="me-5 ps-3">
                      {user.email}
                    </Col>
                    <Col sm={1} className="me-5 ps-3">
                      {user.avatar}
                    </Col>
                    <Col sm={1} className="me-5 ps-5">
                      {user.role}{' '}
                      <PencilFill
                        className="ms-3"
                        onClick={() => {
                          dispatch(
                            user.role === 'USER'
                              ? setAdmin(user.uuid)
                              : setUser(user.uuid)
                          ).then(() => {
                            dispatch(getUsers())
                          })
                        }}
                      />
                    </Col>
                    <Trash3Fill
                      onClick={() => {
                        dispatch(removeUser(user.uuid)).then(() => {
                          dispatch(getUsers())
                        })
                      }}
                    />
                  </ListGroup.Item>
                )
              })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default UserElement
