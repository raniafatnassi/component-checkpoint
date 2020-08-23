import React from 'react';
import ProfilPhoto from './profile/ProfilPhoto';
import Address from './profile/Address';
import FullName from './profile/FullName'
import './style.css';
import {Button, Nav, Navbar, Form, FormControl} from 'react-bootstrap';



function Main() {
  return (
    <div className = 'profile'> 
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
        </Form>
        </Navbar>
        <ProfilPhoto />
        <FullName />
        <Address />
    </div> 
);
}

export default Main;
