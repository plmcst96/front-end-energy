import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Province from "./components/province/Province";
import Town from "./components/town/Town";
import ClientsPage from "./components/ClientsPage";
import AddressPage from "./components/AddressPage";

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prov" element={<Province />} />
          <Route path="/town" element={<Town />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/address" element={<AddressPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
