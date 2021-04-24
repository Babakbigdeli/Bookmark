import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {} from 'react-router-dom';
import { RiBookMarkLine } from 'react-icons/ri';

function NavBar() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"> <RiBookMarkLine/> Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav href="">Home</Nav>
      <Nav href="">Features</Nav>
      <Nav href="">Pricing</Nav>
    </Nav>
    </Navbar>
    </>
  )
}

export default NavBar;
