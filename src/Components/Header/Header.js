import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";


const Header = () => {
  const { user, logOut } = UseAuth()
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <div className="container md:w-10/12 mx-auto">
        <Link className="no-underline" to="/home">
          <h1 className="text-green-500 text-4xl py-1">Seba Hospital</h1>
        </Link>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0 flex items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="no-underline text-gray-900 px-3" to="/home">Home</Link>

            <Link className="no-underline text-gray-900 px-3" to="/doctors">Doctors</Link>
            
            <Link className="no-underline text-gray-900 px-3" to="/contact">Contact Us</Link>
            {user.email? <span>{user.displayName}</span>: <span></span>}
            {user.email? <button onClick={logOut}  className="border bg-red-400 rounded text-white px-2 py-1 md:ml-2">Log out</button> : <Link className="no-underline text-gray-900 px-3" to="/login">Login</Link>}
            
          </Nav>
        </Navbar.Collapse>
      </div>
      </Navbar>
    </div>
  );
};

export default Header;
