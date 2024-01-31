import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

function App() {
  return (
    <Container fluid>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>

    </Container>
  );
}

export default App;
