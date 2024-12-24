import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {FaUser, FaBell, FaEnvelope } from 'react-icons/fa'; // Icons for Notification and Chat


const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container>
                {/* Navbar Brand */}
                <Navbar.Brand href="#home">Hukup</Navbar.Brand>

                {/* Navbar Toggle for Mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Navbar Content */}
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Centered Navigation Links */}
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown
                            title="Your Activity"
                            id="user-dropdown"
                            align="end"
                            className="ms-3"
                        ></NavDropdown>
                        <NavDropdown
                            title="Saved"
                            id="user-dropdown"
                            align="end"
                            className="ms-3"
                        ></NavDropdown>
                        <Nav.Link href="#favorites">Favorites</Nav.Link>
                        <Nav.Link href="#profiles">Group Profiles</Nav.Link>
                    </Nav>


                    <Nav className="ms-auto align-items-center">

                        {/* User Dropdown */}
                        <NavDropdown
                            title={<><FaUser className="me-2" />John Doe</>}
                            id="user-dropdown"
                            align="end"
                            className="ms-3"
                        >
                            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                        </NavDropdown>

                        {/* Notification and Chat Icons */}
                        <Nav.Link href="#notifications">
                            <FaBell size={20} className="me-2" />
                        </Nav.Link>
                        <Nav.Link href="#chats">
                            <FaEnvelope size={20} className="me-2" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
