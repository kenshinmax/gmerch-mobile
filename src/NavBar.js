import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
  
const logoStyle = {
    marginRight: '10px'
};
const logoPurple = {
    color: '#9813FD',
    fontWeight: '700'
}

function NavBar () {
    return (
   
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
         <Navbar.Brand href="/">
             
         <img
                src="https://merch-bucket.s3.amazonaws.com/media/shimmy-logo-small.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Shimmy logo"
                style={logoStyle}
            />
            <span style={logoPurple}>Guitar</span> Store
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
             
             
            </Nav>
            <Nav>
            <Nav.Link href="#deets">Blogs</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
               Latest Updates
            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>

        
    )
}

export default NavBar;