import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect className='py-3 sticky-top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="home#home">
                        <img src="https://www.warehousemobile.co.nz/themes/project/assets/build/img/logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='nav-item'>
                            <Link to="/inventory">Manage Items</Link>
                            <Link to="/about">Add Items</Link>
                            <Link to="/myitems">My Items</Link>
                            <Link to="/blogs">Blogs</Link>
                            <Link to="/login">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header