import { useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";
//import { DataContainer } from "../../App";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  // fixed Header
  function scrollHandler() {
    if (window.scrollY >= 100) {
        setIsFixed(true);
    } else if(window.scrollY <= 50) {
        setIsFixed(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);
  return (
      <Navbar
      fixed="top"
      expand="md"
      className={isFixed ? "navbar fixed":"navbar"}
      >
        <Container className="navbar-container">
            <Navbar.Brand to="/">
              <ion-icon name="bag"></ion-icon>
              <h1 className="logo">ShwetaShop</h1>
            </Navbar.Brand>
            {/* Media cart and toggle */}
            <div className="d-flex">
              <div className="media-cart">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="nav-icon">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>
              </div>
              <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => {
                  setExpand(expand ? false : "expanded");
              }}
              >
              <span></span>
              <span></span>
              <span></span>
              </Navbar.Toggle>
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Item>
                  <Link aria-label="Go to Home Page" className="navbar-link" to="/" onClick={() => setExpand(false)}>
                      <span className="nav-link-label">Home</span>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                <Link aria-label="Go to Shop Page" className="navbar-link" to="/shop" onClick={() => setExpand(false)}>
                    <span className="nav-link-label">Shop</span>
                </Link>
                </Nav.Item>
              </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar
