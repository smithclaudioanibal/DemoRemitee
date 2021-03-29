import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import Home from './components/home/Home';
import Exchange from './components/exchange/Exchange.js';
import About from './components/about/About';

function App() {
  return (
    <Router>
      <>
        
        <Navbar bg="light" expand="lg">
          <Navbar.Brand><Link to="/">Demo Remitee</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/exchange">Exchange</Link></Nav.Link>
              <Nav.Link><Link to="/about">About</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/exchange">
            <Exchange />
          </Route>
        </Switch>

      </>
    </Router>
  );
}

export default App;