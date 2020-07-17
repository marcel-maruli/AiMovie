import React from 'react';
// import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Form, Button, FormControl, Image } from 'react-bootstrap'
// import { logo } from '../img'
import { Switch, Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ width: "10%", margin: "0%", padding: "0%" }}>
          <Link to='/' style={{ textDecoration: "none", color: "white" }}>
            <Image src="logo.png" style={{ width: "30%" }} />AiMovie
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link ><Link to="/" style={{ textDecoration: "none" }}>Search Movie</Link></Nav.Link>
          <Nav.Link ><Link to="/favorites" style={{ textDecoration: "none" }}>Favorite</Link></Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
