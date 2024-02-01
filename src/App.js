import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Province from './components/province/Province'
import Town from './components/town/Town'
import ClientsPage from './components/ClientsPage'
import Login from './components/Login'
import Registration from './components/Registration'
import AddressPage from './components/AddressPage'
import ClientProfile from './components/ClientProfile'
import UserPage from './components/UserPage'

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/province" element={<Province />} />
          <Route path="/town" element={<Town />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/clients/:uuid" element={<ClientProfile />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
