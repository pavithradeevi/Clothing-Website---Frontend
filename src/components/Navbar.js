import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import fashion from "../photo/FashionIsta.png";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbars() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  const dispatch = useDispatch();
  return (
    <div>
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
        <img className="logo" src ={fashion}></img>
        </Navbar.Brand>
        

        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
           <ul className="navbar-nav ml-auto">
           {currentUser ? (
            <>
              
          <li className="nav-item mr-3">
             
             <a className="nav-link" href="/admin" style={{ color: "white" }}>
               Admin
             </a>
           </li>
           

            <NavDropdown
              id="nav-dropdown-white-example"
              title={currentUser.name}
              menuVariant="white"
            >
              <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => {
                      dispatch(logoutUser());
                    }}>
                <li>Logout</li>
              </NavDropdown.Item>
              
            </NavDropdown>
            </>
           ):(
            <>
            <li className="nav-item mr-3">
              <a className="nav-link" href="/Home" style={{ color: "white" }}>
                Home
              </a>
             
            </li>

              <li className="nav-item mr-3" >
                <a className="nav-link" href="/login" style={{ color: "white" }}>
                  Login
                </a>
              </li>

              <li className="nav-item mr-3" >
                <a className="nav-link" href="/logout" style={{ color: "white" }}>
                 Logout
                </a>
              </li>

            </>
           )}
      <li className="nav-item">
              <a className="nav-link" href="/cart" style={{ color: "white" }}>
                Cart 
              </a>
            </li>
           </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
      
    </div>
  )
}
