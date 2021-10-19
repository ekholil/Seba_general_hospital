import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Usefirebase from "../../Hooks/useFirebase";

const Header = () => {
  const { user, logOut } = Usefirebase()
  return (
    <div className="py-3">
      <Navbar bg="light" expand="lg">
      <div className="container">
        <Link className="no-underline" to="/home">
          <h1 className="text-green-500 text-xl">Seba Hospital</h1>
        </Link>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0 flex items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="no-underline text-gray-900 px-3" to="/home">Home</Link>
            
            <Link className="no-underline text-gray-900 px-3" to="/contactus">Contact Us</Link>
            {user.email? <span>{user.displayName}</span>: <span></span>}
            {user.email? <button onClick={logOut}  className="border ml-1 px-2 py-1">Log out</button> : <Link className="no-underline text-gray-900 px-3" to="/login">Login</Link>}
            
          </Nav>
        </Navbar.Collapse>
      </div>
      </Navbar>
    </div>
  );
};

export default Header;
