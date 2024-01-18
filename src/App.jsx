/* eslint-disable */
import React, { Component } from 'react';
import './my-sass.scss'
import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Plan0 from './Pages/Plan0/Plan0';
import Plan1 from './Pages/Plan1/Plan1';
import Home from './Pages/Home/Home'
import Inloggning from './Pages/Inloggning/Inloggning'
import Profil from './Pages/Profil/Profil';
import VäljaÄmne from './Pages/Profil/VäljaÄmne';





const AppJsx =() => {
  return (
    <Router>
      
         <Navbar expand="lg" className="bg-body-tertiary">
         <Container fluid >
            <Navbar.Brand href="Home">Rudmaps</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
             <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >

                <Nav.Link href="profil">Profil</Nav.Link>
                <Nav.Link href="plan0" enabled>
                 Plan 0
                </Nav.Link>
                <Nav.Link href="plan1" enabled>
                 Plan 1
                </Nav.Link>
                <NavDropdown title="Information" id="navbardropdown">
                 <NavDropdown.Item href="schema">
                  Schema
                  </NavDropdown.Item>
                  <NavDropdown.Item href="klassrum">
                   Klassrum
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="inloggning">
                  Logga ut
                 </NavDropdown.Item>
                </NavDropdown>

              </Nav>
              <Form className="d-flex">
               <Nav.Link href="inloggning" enabled>
                Logga in
               </Nav.Link>

             </Form>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Sök..."
                  className="me-2"
                 aria-label="Search" />
                <Button variant="outline-success" id="">Sök</Button>
             </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>  
      
      
      
    
      
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profil" element={<VäljaÄmne />} />
          <Route path="/plan0" element={<Plan0 />} />
          <Route path="/plan1" element={<Plan1 />} />
          <Route path="/inloggning" element={<Inloggning />} />
        </Routes>
      </div>
      

    </Router>


      
    
  );
}

export default AppJsx;