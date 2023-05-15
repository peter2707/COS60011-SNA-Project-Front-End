import React from "react";
import { WavyLink } from "react-wavy-transitions";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <Navbar className="navbar">
                <Container>
                    <WavyLink to="/" color="#092644"><p className="logo link">@Feedback</p></WavyLink>
                    <Navbar.Toggle />
                    <Navbar.Offcanvas placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <WavyLink to="/register" color="#092644"><p className="right-link link">Register</p></WavyLink>
                                <WavyLink to="/login" color="#092644"><p className="right-link link">Login</p></WavyLink>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </nav>
    );
};

export default NavBar;
